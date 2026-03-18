var wg = { exports: {} }, m0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M2;
function yT() {
  if (M2) return m0;
  M2 = 1;
  var $ = Symbol.for("react.transitional.element"), ae = Symbol.for("react.fragment");
  function $e(N, Ce, je) {
    var vt = null;
    if (je !== void 0 && (vt = "" + je), Ce.key !== void 0 && (vt = "" + Ce.key), "key" in Ce) {
      je = {};
      for (var ee in Ce)
        ee !== "key" && (je[ee] = Ce[ee]);
    } else je = Ce;
    return Ce = je.ref, {
      $$typeof: $,
      type: N,
      key: vt,
      ref: Ce !== void 0 ? Ce : null,
      props: je
    };
  }
  return m0.Fragment = ae, m0.jsx = $e, m0.jsxs = $e, m0;
}
var y0 = {}, Xg = { exports: {} }, Qe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C2;
function pT() {
  if (C2) return Qe;
  C2 = 1;
  var $ = Symbol.for("react.transitional.element"), ae = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), je = Symbol.for("react.consumer"), vt = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), U = Symbol.iterator;
  function ie(S) {
    return S === null || typeof S != "object" ? null : (S = U && S[U] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _t = Object.assign, ft = {};
  function lt(S, B, F) {
    this.props = S, this.context = B, this.refs = ft, this.updater = F || Le;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, lt.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = lt.prototype;
  function Bt(S, B, F) {
    this.props = S, this.context = B, this.refs = ft, this.updater = F || Le;
  }
  var Jt = Bt.prototype = new Tl();
  Jt.constructor = Bt, _t(Jt, lt.prototype), Jt.isPureReactComponent = !0;
  var el = Array.isArray;
  function ul() {
  }
  var ze = { H: null, A: null, T: null, S: null }, Ve = Object.prototype.hasOwnProperty;
  function Dt(S, B, F) {
    var W = F.ref;
    return {
      $$typeof: $,
      type: S,
      key: B,
      ref: W !== void 0 ? W : null,
      props: F
    };
  }
  function se(S, B) {
    return Dt(S.type, B, S.props);
  }
  function Yt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === $;
  }
  function ye(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return B[F];
    });
  }
  var qe = /\/+/g;
  function Qt(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? ye("" + S.key) : B.toString(36);
  }
  function qt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ul, ul) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function _(S, B, F, W, ge) {
    var xe = typeof S;
    (xe === "undefined" || xe === "boolean") && (S = null);
    var Ee = !1;
    if (S === null) Ee = !0;
    else
      switch (xe) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case $:
            case ae:
              Ee = !0;
              break;
            case He:
              return Ee = S._init, _(
                Ee(S._payload),
                B,
                F,
                W,
                ge
              );
          }
      }
    if (Ee)
      return ge = ge(S), Ee = W === "" ? "." + Qt(S, 0) : W, el(ge) ? (F = "", Ee != null && (F = Ee.replace(qe, "$&/") + "/"), _(ge, B, F, "", function(ja) {
        return ja;
      })) : ge != null && (Yt(ge) && (ge = se(
        ge,
        F + (ge.key == null || S && S.key === ge.key ? "" : ("" + ge.key).replace(
          qe,
          "$&/"
        ) + "/") + Ee
      )), B.push(ge)), 1;
    Ee = 0;
    var Lt = W === "" ? "." : W + ":";
    if (el(S))
      for (var ht = 0; ht < S.length; ht++)
        W = S[ht], xe = Lt + Qt(W, ht), Ee += _(
          W,
          B,
          F,
          xe,
          ge
        );
    else if (ht = ie(S), typeof ht == "function")
      for (S = ht.call(S), ht = 0; !(W = S.next()).done; )
        W = W.value, xe = Lt + Qt(W, ht++), Ee += _(
          W,
          B,
          F,
          xe,
          ge
        );
    else if (xe === "object") {
      if (typeof S.then == "function")
        return _(
          qt(S),
          B,
          F,
          W,
          ge
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function L(S, B, F) {
    if (S == null) return S;
    var W = [], ge = 0;
    return _(S, W, "", "", function(xe) {
      return B.call(F, xe, ge++);
    }), W;
  }
  function P(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = F);
        },
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = F);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ae = {
    map: L,
    forEach: function(S, B, F) {
      L(
        S,
        function() {
          B.apply(this, arguments);
        },
        F
      );
    },
    count: function(S) {
      var B = 0;
      return L(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return L(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!Yt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Qe.Activity = X, Qe.Children = Ae, Qe.Component = lt, Qe.Fragment = $e, Qe.Profiler = Ce, Qe.PureComponent = Bt, Qe.StrictMode = N, Qe.Suspense = ne, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ze, Qe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return ze.H.useMemoCache(S);
    }
  }, Qe.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Qe.cacheSignal = function() {
    return null;
  }, Qe.cloneElement = function(S, B, F) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = _t({}, S.props), ge = S.key;
    if (B != null)
      for (xe in B.key !== void 0 && (ge = "" + B.key), B)
        !Ve.call(B, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && B.ref === void 0 || (W[xe] = B[xe]);
    var xe = arguments.length - 2;
    if (xe === 1) W.children = F;
    else if (1 < xe) {
      for (var Ee = Array(xe), Lt = 0; Lt < xe; Lt++)
        Ee[Lt] = arguments[Lt + 2];
      W.children = Ee;
    }
    return Dt(S.type, ge, W);
  }, Qe.createContext = function(S) {
    return S = {
      $$typeof: vt,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: je,
      _context: S
    }, S;
  }, Qe.createElement = function(S, B, F) {
    var W, ge = {}, xe = null;
    if (B != null)
      for (W in B.key !== void 0 && (xe = "" + B.key), B)
        Ve.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (ge[W] = B[W]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ge.children = F;
    else if (1 < Ee) {
      for (var Lt = Array(Ee), ht = 0; ht < Ee; ht++)
        Lt[ht] = arguments[ht + 2];
      ge.children = Lt;
    }
    if (S && S.defaultProps)
      for (W in Ee = S.defaultProps, Ee)
        ge[W] === void 0 && (ge[W] = Ee[W]);
    return Dt(S, xe, ge);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(S) {
    return { $$typeof: ee, render: S };
  }, Qe.isValidElement = Yt, Qe.lazy = function(S) {
    return {
      $$typeof: He,
      _payload: { _status: -1, _result: S },
      _init: P
    };
  }, Qe.memo = function(S, B) {
    return {
      $$typeof: k,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, Qe.startTransition = function(S) {
    var B = ze.T, F = {};
    ze.T = F;
    try {
      var W = S(), ge = ze.S;
      ge !== null && ge(F, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ul, pe);
    } catch (xe) {
      pe(xe);
    } finally {
      B !== null && F.types !== null && (B.types = F.types), ze.T = B;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return ze.H.useCacheRefresh();
  }, Qe.use = function(S) {
    return ze.H.use(S);
  }, Qe.useActionState = function(S, B, F) {
    return ze.H.useActionState(S, B, F);
  }, Qe.useCallback = function(S, B) {
    return ze.H.useCallback(S, B);
  }, Qe.useContext = function(S) {
    return ze.H.useContext(S);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(S, B) {
    return ze.H.useDeferredValue(S, B);
  }, Qe.useEffect = function(S, B) {
    return ze.H.useEffect(S, B);
  }, Qe.useEffectEvent = function(S) {
    return ze.H.useEffectEvent(S);
  }, Qe.useId = function() {
    return ze.H.useId();
  }, Qe.useImperativeHandle = function(S, B, F) {
    return ze.H.useImperativeHandle(S, B, F);
  }, Qe.useInsertionEffect = function(S, B) {
    return ze.H.useInsertionEffect(S, B);
  }, Qe.useLayoutEffect = function(S, B) {
    return ze.H.useLayoutEffect(S, B);
  }, Qe.useMemo = function(S, B) {
    return ze.H.useMemo(S, B);
  }, Qe.useOptimistic = function(S, B) {
    return ze.H.useOptimistic(S, B);
  }, Qe.useReducer = function(S, B, F) {
    return ze.H.useReducer(S, B, F);
  }, Qe.useRef = function(S) {
    return ze.H.useRef(S);
  }, Qe.useState = function(S) {
    return ze.H.useState(S);
  }, Qe.useSyncExternalStore = function(S, B, F) {
    return ze.H.useSyncExternalStore(
      S,
      B,
      F
    );
  }, Qe.useTransition = function() {
    return ze.H.useTransition();
  }, Qe.version = "19.2.4", Qe;
}
var g0 = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
g0.exports;
var U2;
function vT() {
  return U2 || (U2 = 1, (function($, ae) {
    process.env.NODE_ENV !== "production" && (function() {
      function $e(v, M) {
        Object.defineProperty(je.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function N(v) {
        return v === null || typeof v != "object" ? null : (v = Di && v[Di] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Ce(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var I = v + "." + M;
        _i[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), _i[I] = !0);
      }
      function je(v, M, I) {
        this.props = v, this.context = M, this.refs = mt, this.updater = I || xa;
      }
      function vt() {
      }
      function ee(v, M, I) {
        this.props = v, this.context = M, this.refs = mt, this.updater = I || xa;
      }
      function ne() {
      }
      function k(v) {
        return "" + v;
      }
      function He(v) {
        try {
          k(v);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var I = M.error, te = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return I.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            te
          ), k(v);
        }
      }
      function X(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === ss ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case B:
            return "StrictMode";
          case Ee:
            return "Suspense";
          case Lt:
            return "SuspenseList";
          case ce:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case Ae:
              return "Portal";
            case ge:
              return v.displayName || "Context";
            case W:
              return (v._context.displayName || "Context") + ".Consumer";
            case xe:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case ht:
              return M = v.displayName || null, M !== null ? M : X(v.type) || "Memo";
            case ja:
              M = v._payload, v = v._init;
              try {
                return X(v(M));
              } catch {
              }
          }
        return null;
      }
      function U(v) {
        if (v === S) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === ja)
          return "<...>";
        try {
          var M = X(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ie() {
        var v = re.A;
        return v === null ? null : v.getOwner();
      }
      function Le() {
        return Error("react-stack-top-frame");
      }
      function _t(v) {
        if (Ri.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function ft(v, M) {
        function I() {
          gc || (gc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: I,
          configurable: !0
        });
      }
      function lt() {
        var v = X(this.type);
        return Fr[v] || (Fr[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Tl(v, M, I, te, de, De) {
        var he = I.ref;
        return v = {
          $$typeof: pe,
          type: v,
          key: M,
          props: I,
          _owner: te
        }, (he !== void 0 ? he : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: lt
        }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(v, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(v, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: de
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: De
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Bt(v, M) {
        return M = Tl(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function Jt(v) {
        el(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === ja && (v._payload.status === "fulfilled" ? el(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function el(v) {
        return typeof v == "object" && v !== null && v.$$typeof === pe;
      }
      function ul(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function ze(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (He(v.key), ul("" + v.key)) : M.toString(36);
      }
      function Ve(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(ne, ne) : (v.status = "pending", v.then(
              function(M) {
                v.status === "pending" && (v.status = "fulfilled", v.value = M);
              },
              function(M) {
                v.status === "pending" && (v.status = "rejected", v.reason = M);
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
      function Dt(v, M, I, te, de) {
        var De = typeof v;
        (De === "undefined" || De === "boolean") && (v = null);
        var he = !1;
        if (v === null) he = !0;
        else
          switch (De) {
            case "bigint":
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case pe:
                case Ae:
                  he = !0;
                  break;
                case ja:
                  return he = v._init, Dt(
                    he(v._payload),
                    M,
                    I,
                    te,
                    de
                  );
              }
          }
        if (he) {
          he = v, de = de(he);
          var Pe = te === "" ? "." + ze(he, 0) : te;
          return vc(de) ? (I = "", Pe != null && (I = Pe.replace(Ir, "$&/") + "/"), Dt(de, M, I, "", function(ea) {
            return ea;
          })) : de != null && (el(de) && (de.key != null && (he && he.key === de.key || He(de.key)), I = Bt(
            de,
            I + (de.key == null || he && he.key === de.key ? "" : ("" + de.key).replace(
              Ir,
              "$&/"
            ) + "/") + Pe
          ), te !== "" && he != null && el(he) && he.key == null && he._store && !he._store.validated && (I._store.validated = 2), de = I), M.push(de)), 1;
        }
        if (he = 0, Pe = te === "" ? "." : te + ":", vc(v))
          for (var Ge = 0; Ge < v.length; Ge++)
            te = v[Ge], De = Pe + ze(te, Ge), he += Dt(
              te,
              M,
              I,
              De,
              de
            );
        else if (Ge = N(v), typeof Ge == "function")
          for (Ge === v.entries && (Mn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Mn = !0), v = Ge.call(v), Ge = 0; !(te = v.next()).done; )
            te = te.value, De = Pe + ze(te, Ge++), he += Dt(
              te,
              M,
              I,
              De,
              de
            );
        else if (De === "object") {
          if (typeof v.then == "function")
            return Dt(
              Ve(v),
              M,
              I,
              te,
              de
            );
          throw M = String(v), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return he;
      }
      function se(v, M, I) {
        if (v == null) return v;
        var te = [], de = 0;
        return Dt(v, te, "", "", function(De) {
          return M.call(I, De, de++);
        }), te;
      }
      function Yt(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var I = M();
          if (I.then(
            function(de) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = de;
                var De = v._ioInfo;
                De != null && (De.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = de);
              }
            },
            function(de) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = de;
                var De = v._ioInfo;
                De != null && (De.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = de);
              }
            }
          ), M = v._ioInfo, M != null) {
            M.value = I;
            var te = I.displayName;
            typeof te == "string" && (M.name = te);
          }
          v._status === -1 && (v._status = 0, v._result = I);
        }
        if (v._status === 1)
          return M = v._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw v._result;
      }
      function ye() {
        var v = re.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function qe() {
        re.asyncTransitions--;
      }
      function Qt(v) {
        if (Sc === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            Sc = ($ && $[M]).call(
              $,
              "timers"
            ).setImmediate;
          } catch {
            Sc = function(te) {
              rs === !1 && (rs = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var de = new MessageChannel();
              de.port1.onmessage = te, de.port2.postMessage(void 0);
            };
          }
        return Sc(v);
      }
      function qt(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function _(v, M) {
        M !== rn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), rn = M;
      }
      function L(v, M, I) {
        var te = re.actQueue;
        if (te !== null)
          if (te.length !== 0)
            try {
              P(te), Qt(function() {
                return L(v, M, I);
              });
              return;
            } catch (de) {
              re.thrownErrors.push(de);
            }
          else re.actQueue = null;
        0 < re.thrownErrors.length ? (te = qt(re.thrownErrors), re.thrownErrors.length = 0, I(te)) : M(v);
      }
      function P(v) {
        if (!Ga) {
          Ga = !0;
          var M = 0;
          try {
            for (; M < v.length; M++) {
              var I = v[M];
              do {
                re.didUsePromise = !1;
                var te = I(!1);
                if (te !== null) {
                  if (re.didUsePromise) {
                    v[M] = I, v.splice(0, M);
                    return;
                  }
                  I = te;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (de) {
            v.splice(0, M + 1), re.thrownErrors.push(de);
          } finally {
            Ga = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pe = Symbol.for("react.transitional.element"), Ae = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), ge = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), ja = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), Di = Symbol.iterator, _i = {}, xa = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Ce(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Ce(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Ce(v, "setState");
        }
      }, uu = Object.assign, mt = {};
      Object.freeze(mt), je.prototype.isReactComponent = {}, je.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, je.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var Pl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Mi in Pl)
        Pl.hasOwnProperty(Mi) && $e(Mi, Pl[Mi]);
      vt.prototype = je.prototype, Pl = ee.prototype = new vt(), Pl.constructor = ee, uu(Pl, je.prototype), Pl.isPureReactComponent = !0;
      var vc = Array.isArray, ss = Symbol.for("react.client.reference"), re = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ri = Object.prototype.hasOwnProperty, iu = console.createTask ? console.createTask : function() {
        return null;
      };
      Pl = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var gc, vl, Fr = {}, Mo = Pl.react_stack_bottom_frame.bind(
        Pl,
        Le
      )(), Co = iu(U(Le)), Mn = !1, Ir = /\/+/g, Uo = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, rs = !1, Sc = null, rn = 0, Al = !1, Ga = !1, Ul = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : Qt;
      Pl = Object.freeze({
        __proto__: null,
        c: function(v) {
          return ye().useMemoCache(v);
        }
      });
      var Mi = {
        map: se,
        forEach: function(v, M, I) {
          se(
            v,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(v) {
          var M = 0;
          return se(v, function() {
            M++;
          }), M;
        },
        toArray: function(v) {
          return se(v, function(M) {
            return M;
          }) || [];
        },
        only: function(v) {
          if (!el(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      ae.Activity = ce, ae.Children = Mi, ae.Component = je, ae.Fragment = S, ae.Profiler = F, ae.PureComponent = ee, ae.StrictMode = B, ae.Suspense = Ee, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, ae.__COMPILER_RUNTIME = Pl, ae.act = function(v) {
        var M = re.actQueue, I = rn;
        rn++;
        var te = re.actQueue = M !== null ? M : [], de = !1;
        try {
          var De = v();
        } catch (Ge) {
          re.thrownErrors.push(Ge);
        }
        if (0 < re.thrownErrors.length)
          throw _(M, I), v = qt(re.thrownErrors), re.thrownErrors.length = 0, v;
        if (De !== null && typeof De == "object" && typeof De.then == "function") {
          var he = De;
          return Ul(function() {
            de || Al || (Al = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ge, ea) {
              de = !0, he.then(
                function(dn) {
                  if (_(M, I), I === 0) {
                    try {
                      P(te), Qt(function() {
                        return L(
                          dn,
                          Ge,
                          ea
                        );
                      });
                    } catch (Ho) {
                      re.thrownErrors.push(Ho);
                    }
                    if (0 < re.thrownErrors.length) {
                      var Ci = qt(
                        re.thrownErrors
                      );
                      re.thrownErrors.length = 0, ea(Ci);
                    }
                  } else Ge(dn);
                },
                function(dn) {
                  _(M, I), 0 < re.thrownErrors.length && (dn = qt(
                    re.thrownErrors
                  ), re.thrownErrors.length = 0), ea(dn);
                }
              );
            }
          };
        }
        var Pe = De;
        if (_(M, I), I === 0 && (P(te), te.length !== 0 && Ul(function() {
          de || Al || (Al = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), re.actQueue = null), 0 < re.thrownErrors.length)
          throw v = qt(re.thrownErrors), re.thrownErrors.length = 0, v;
        return {
          then: function(Ge, ea) {
            de = !0, I === 0 ? (re.actQueue = te, Qt(function() {
              return L(
                Pe,
                Ge,
                ea
              );
            })) : Ge(Pe);
          }
        };
      }, ae.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, ae.cacheSignal = function() {
        return null;
      }, ae.captureOwnerStack = function() {
        var v = re.getCurrentStack;
        return v === null ? null : v();
      }, ae.cloneElement = function(v, M, I) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var te = uu({}, v.props), de = v.key, De = v._owner;
        if (M != null) {
          var he;
          e: {
            if (Ri.call(M, "ref") && (he = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && he.isReactWarning) {
              he = !1;
              break e;
            }
            he = M.ref !== void 0;
          }
          he && (De = ie()), _t(M) && (He(M.key), de = "" + M.key);
          for (Pe in M)
            !Ri.call(M, Pe) || Pe === "key" || Pe === "__self" || Pe === "__source" || Pe === "ref" && M.ref === void 0 || (te[Pe] = M[Pe]);
        }
        var Pe = arguments.length - 2;
        if (Pe === 1) te.children = I;
        else if (1 < Pe) {
          he = Array(Pe);
          for (var Ge = 0; Ge < Pe; Ge++)
            he[Ge] = arguments[Ge + 2];
          te.children = he;
        }
        for (te = Tl(
          v.type,
          de,
          te,
          De,
          v._debugStack,
          v._debugTask
        ), de = 2; de < arguments.length; de++)
          Jt(arguments[de]);
        return te;
      }, ae.createContext = function(v) {
        return v = {
          $$typeof: ge,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: W,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, ae.createElement = function(v, M, I) {
        for (var te = 2; te < arguments.length; te++)
          Jt(arguments[te]);
        te = {};
        var de = null;
        if (M != null)
          for (Ge in vl || !("__self" in M) || "key" in M || (vl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _t(M) && (He(M.key), de = "" + M.key), M)
            Ri.call(M, Ge) && Ge !== "key" && Ge !== "__self" && Ge !== "__source" && (te[Ge] = M[Ge]);
        var De = arguments.length - 2;
        if (De === 1) te.children = I;
        else if (1 < De) {
          for (var he = Array(De), Pe = 0; Pe < De; Pe++)
            he[Pe] = arguments[Pe + 2];
          Object.freeze && Object.freeze(he), te.children = he;
        }
        if (v && v.defaultProps)
          for (Ge in De = v.defaultProps, De)
            te[Ge] === void 0 && (te[Ge] = De[Ge]);
        de && ft(
          te,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Ge = 1e4 > re.recentlyCreatedOwnerStacks++;
        return Tl(
          v,
          de,
          te,
          ie(),
          Ge ? Error("react-stack-top-frame") : Mo,
          Ge ? iu(U(v)) : Co
        );
      }, ae.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, ae.forwardRef = function(v) {
        v != null && v.$$typeof === ht ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof v != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          v === null ? "null" : typeof v
        ) : v.length !== 0 && v.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), v != null && v.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: xe, render: v }, I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(te) {
            I = te, v.name || v.displayName || (Object.defineProperty(v, "name", { value: te }), v.displayName = te);
          }
        }), M;
      }, ae.isValidElement = el, ae.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: ja,
          _payload: v,
          _init: Yt
        }, I = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return v._ioInfo = I, M._debugInfo = [{ awaited: I }], M;
      }, ae.memo = function(v, M) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), M = {
          $$typeof: ht,
          type: v,
          compare: M === void 0 ? null : M
        };
        var I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(te) {
            I = te, v.name || v.displayName || (Object.defineProperty(v, "name", { value: te }), v.displayName = te);
          }
        }), M;
      }, ae.startTransition = function(v) {
        var M = re.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), re.T = I;
        try {
          var te = v(), de = re.S;
          de !== null && de(I, te), typeof te == "object" && te !== null && typeof te.then == "function" && (re.asyncTransitions++, te.then(qe, qe), te.then(ne, Uo));
        } catch (De) {
          Uo(De);
        } finally {
          M === null && I._updatedFibers && (v = I._updatedFibers.size, I._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), re.T = M;
        }
      }, ae.unstable_useCacheRefresh = function() {
        return ye().useCacheRefresh();
      }, ae.use = function(v) {
        return ye().use(v);
      }, ae.useActionState = function(v, M, I) {
        return ye().useActionState(
          v,
          M,
          I
        );
      }, ae.useCallback = function(v, M) {
        return ye().useCallback(v, M);
      }, ae.useContext = function(v) {
        var M = ye();
        return v.$$typeof === W && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(v);
      }, ae.useDebugValue = function(v, M) {
        return ye().useDebugValue(v, M);
      }, ae.useDeferredValue = function(v, M) {
        return ye().useDeferredValue(v, M);
      }, ae.useEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useEffect(v, M);
      }, ae.useEffectEvent = function(v) {
        return ye().useEffectEvent(v);
      }, ae.useId = function() {
        return ye().useId();
      }, ae.useImperativeHandle = function(v, M, I) {
        return ye().useImperativeHandle(v, M, I);
      }, ae.useInsertionEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useInsertionEffect(v, M);
      }, ae.useLayoutEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useLayoutEffect(v, M);
      }, ae.useMemo = function(v, M) {
        return ye().useMemo(v, M);
      }, ae.useOptimistic = function(v, M) {
        return ye().useOptimistic(v, M);
      }, ae.useReducer = function(v, M, I) {
        return ye().useReducer(v, M, I);
      }, ae.useRef = function(v) {
        return ye().useRef(v);
      }, ae.useState = function(v) {
        return ye().useState(v);
      }, ae.useSyncExternalStore = function(v, M, I) {
        return ye().useSyncExternalStore(
          v,
          M,
          I
        );
      }, ae.useTransition = function() {
        return ye().useTransition();
      }, ae.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(g0, g0.exports)), g0.exports;
}
var H2;
function gm() {
  return H2 || (H2 = 1, process.env.NODE_ENV === "production" ? Xg.exports = pT() : Xg.exports = vT()), Xg.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N2;
function gT() {
  return N2 || (N2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function $(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Yt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case ft:
          return "Fragment";
        case Tl:
          return "Profiler";
        case lt:
          return "StrictMode";
        case ul:
          return "Suspense";
        case ze:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case _t:
            return "Portal";
          case Jt:
            return S.displayName || "Context";
          case Bt:
            return (S._context.displayName || "Context") + ".Consumer";
          case el:
            var B = S.render;
            return S = S.displayName, S || (S = B.displayName || B.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Ve:
            return B = S.displayName || null, B !== null ? B : $(S.type) || "Memo";
          case Dt:
            B = S._payload, S = S._init;
            try {
              return $(S(B));
            } catch {
            }
        }
      return null;
    }
    function ae(S) {
      return "" + S;
    }
    function $e(S) {
      try {
        ae(S);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var F = B.error, W = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return F.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), ae(S);
      }
    }
    function N(S) {
      if (S === ft) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Dt)
        return "<...>";
      try {
        var B = $(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ce() {
      var S = ye.A;
      return S === null ? null : S.getOwner();
    }
    function je() {
      return Error("react-stack-top-frame");
    }
    function vt(S) {
      if (qe.call(S, "key")) {
        var B = Object.getOwnPropertyDescriptor(S, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function ee(S, B) {
      function F() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: F,
        configurable: !0
      });
    }
    function ne() {
      var S = $(this.type);
      return L[S] || (L[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function k(S, B, F, W, ge, xe) {
      var Ee = F.ref;
      return S = {
        $$typeof: Le,
        type: S,
        key: B,
        props: F,
        _owner: W
      }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: ne
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function He(S, B, F, W, ge, xe) {
      var Ee = B.children;
      if (Ee !== void 0)
        if (W)
          if (Qt(Ee)) {
            for (W = 0; W < Ee.length; W++)
              X(Ee[W]);
            Object.freeze && Object.freeze(Ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(Ee);
      if (qe.call(B, "key")) {
        Ee = $(S);
        var Lt = Object.keys(B).filter(function(ja) {
          return ja !== "key";
        });
        W = 0 < Lt.length ? "{key: someKey, " + Lt.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[Ee + W] || (Lt = 0 < Lt.length ? "{" + Lt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Ee,
          Lt,
          Ee
        ), Ae[Ee + W] = !0);
      }
      if (Ee = null, F !== void 0 && ($e(F), Ee = "" + F), vt(B) && ($e(B.key), Ee = "" + B.key), "key" in B) {
        F = {};
        for (var ht in B)
          ht !== "key" && (F[ht] = B[ht]);
      } else F = B;
      return Ee && ee(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), k(
        S,
        Ee,
        F,
        Ce(),
        ge,
        xe
      );
    }
    function X(S) {
      U(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Dt && (S._payload.status === "fulfilled" ? U(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function U(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Le;
    }
    var ie = gm(), Le = Symbol.for("react.transitional.element"), _t = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), lt = Symbol.for("react.strict_mode"), Tl = Symbol.for("react.profiler"), Bt = Symbol.for("react.consumer"), Jt = Symbol.for("react.context"), el = Symbol.for("react.forward_ref"), ul = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"), Ve = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), Yt = Symbol.for("react.client.reference"), ye = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qe = Object.prototype.hasOwnProperty, Qt = Array.isArray, qt = console.createTask ? console.createTask : function() {
      return null;
    };
    ie = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var _, L = {}, P = ie.react_stack_bottom_frame.bind(
      ie,
      je
    )(), pe = qt(N(je)), Ae = {};
    y0.Fragment = ft, y0.jsx = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return He(
        S,
        B,
        F,
        !1,
        W ? Error("react-stack-top-frame") : P,
        W ? qt(N(S)) : pe
      );
    }, y0.jsxs = function(S, B, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return He(
        S,
        B,
        F,
        !0,
        W ? Error("react-stack-top-frame") : P,
        W ? qt(N(S)) : pe
      );
    };
  })()), y0;
}
var B2;
function ST() {
  return B2 || (B2 = 1, process.env.NODE_ENV === "production" ? wg.exports = yT() : wg.exports = gT()), wg.exports;
}
var Zg = ST(), Qg = { exports: {} }, p0 = {}, Lg = { exports: {} }, v1 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y2;
function bT() {
  return Y2 || (Y2 = 1, (function($) {
    function ae(_, L) {
      var P = _.length;
      _.push(L);
      e: for (; 0 < P; ) {
        var pe = P - 1 >>> 1, Ae = _[pe];
        if (0 < Ce(Ae, L))
          _[pe] = L, _[P] = Ae, P = pe;
        else break e;
      }
    }
    function $e(_) {
      return _.length === 0 ? null : _[0];
    }
    function N(_) {
      if (_.length === 0) return null;
      var L = _[0], P = _.pop();
      if (P !== L) {
        _[0] = P;
        e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
          var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ge = _[W];
          if (0 > Ce(F, P))
            W < Ae && 0 > Ce(ge, F) ? (_[pe] = ge, _[W] = P, pe = W) : (_[pe] = F, _[B] = P, pe = B);
          else if (W < Ae && 0 > Ce(ge, P))
            _[pe] = ge, _[W] = P, pe = W;
          else break e;
        }
      }
      return L;
    }
    function Ce(_, L) {
      var P = _.sortIndex - L.sortIndex;
      return P !== 0 ? P : _.id - L.id;
    }
    if ($.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var je = performance;
      $.unstable_now = function() {
        return je.now();
      };
    } else {
      var vt = Date, ee = vt.now();
      $.unstable_now = function() {
        return vt.now() - ee;
      };
    }
    var ne = [], k = [], He = 1, X = null, U = 3, ie = !1, Le = !1, _t = !1, ft = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function Jt(_) {
      for (var L = $e(k); L !== null; ) {
        if (L.callback === null) N(k);
        else if (L.startTime <= _)
          N(k), L.sortIndex = L.expirationTime, ae(ne, L);
        else break;
        L = $e(k);
      }
    }
    function el(_) {
      if (_t = !1, Jt(_), !Le)
        if ($e(ne) !== null)
          Le = !0, ul || (ul = !0, ye());
        else {
          var L = $e(k);
          L !== null && qt(el, L.startTime - _);
        }
    }
    var ul = !1, ze = -1, Ve = 5, Dt = -1;
    function se() {
      return ft ? !0 : !($.unstable_now() - Dt < Ve);
    }
    function Yt() {
      if (ft = !1, ul) {
        var _ = $.unstable_now();
        Dt = _;
        var L = !0;
        try {
          e: {
            Le = !1, _t && (_t = !1, Tl(ze), ze = -1), ie = !0;
            var P = U;
            try {
              t: {
                for (Jt(_), X = $e(ne); X !== null && !(X.expirationTime > _ && se()); ) {
                  var pe = X.callback;
                  if (typeof pe == "function") {
                    X.callback = null, U = X.priorityLevel;
                    var Ae = pe(
                      X.expirationTime <= _
                    );
                    if (_ = $.unstable_now(), typeof Ae == "function") {
                      X.callback = Ae, Jt(_), L = !0;
                      break t;
                    }
                    X === $e(ne) && N(ne), Jt(_);
                  } else N(ne);
                  X = $e(ne);
                }
                if (X !== null) L = !0;
                else {
                  var S = $e(k);
                  S !== null && qt(
                    el,
                    S.startTime - _
                  ), L = !1;
                }
              }
              break e;
            } finally {
              X = null, U = P, ie = !1;
            }
            L = void 0;
          }
        } finally {
          L ? ye() : ul = !1;
        }
      }
    }
    var ye;
    if (typeof Bt == "function")
      ye = function() {
        Bt(Yt);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Qt = qe.port2;
      qe.port1.onmessage = Yt, ye = function() {
        Qt.postMessage(null);
      };
    } else
      ye = function() {
        lt(Yt, 0);
      };
    function qt(_, L) {
      ze = lt(function() {
        _($.unstable_now());
      }, L);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, $.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ve = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, $.unstable_next = function(_) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = U;
      }
      var P = U;
      U = L;
      try {
        return _();
      } finally {
        U = P;
      }
    }, $.unstable_requestPaint = function() {
      ft = !0;
    }, $.unstable_runWithPriority = function(_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = U;
      U = _;
      try {
        return L();
      } finally {
        U = P;
      }
    }, $.unstable_scheduleCallback = function(_, L, P) {
      var pe = $.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, _) {
        case 1:
          var Ae = -1;
          break;
        case 2:
          Ae = 250;
          break;
        case 5:
          Ae = 1073741823;
          break;
        case 4:
          Ae = 1e4;
          break;
        default:
          Ae = 5e3;
      }
      return Ae = P + Ae, _ = {
        id: He++,
        callback: L,
        priorityLevel: _,
        startTime: P,
        expirationTime: Ae,
        sortIndex: -1
      }, P > pe ? (_.sortIndex = P, ae(k, _), $e(ne) === null && _ === $e(k) && (_t ? (Tl(ze), ze = -1) : _t = !0, qt(el, P - pe))) : (_.sortIndex = Ae, ae(ne, _), Le || ie || (Le = !0, ul || (ul = !0, ye()))), _;
    }, $.unstable_shouldYield = se, $.unstable_wrapCallback = function(_) {
      var L = U;
      return function() {
        var P = U;
        U = L;
        try {
          return _.apply(this, arguments);
        } finally {
          U = P;
        }
      };
    };
  })(v1)), v1;
}
var g1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q2;
function ET() {
  return q2 || (q2 = 1, (function($) {
    process.env.NODE_ENV !== "production" && (function() {
      function ae() {
        if (el = !1, Dt) {
          var _ = $.unstable_now();
          ye = _;
          var L = !0;
          try {
            e: {
              Bt = !1, Jt && (Jt = !1, ze(se), se = -1), Tl = !0;
              var P = lt;
              try {
                t: {
                  for (vt(_), ft = N(ie); ft !== null && !(ft.expirationTime > _ && ne()); ) {
                    var pe = ft.callback;
                    if (typeof pe == "function") {
                      ft.callback = null, lt = ft.priorityLevel;
                      var Ae = pe(
                        ft.expirationTime <= _
                      );
                      if (_ = $.unstable_now(), typeof Ae == "function") {
                        ft.callback = Ae, vt(_), L = !0;
                        break t;
                      }
                      ft === N(ie) && Ce(ie), vt(_);
                    } else Ce(ie);
                    ft = N(ie);
                  }
                  if (ft !== null) L = !0;
                  else {
                    var S = N(Le);
                    S !== null && k(
                      ee,
                      S.startTime - _
                    ), L = !1;
                  }
                }
                break e;
              } finally {
                ft = null, lt = P, Tl = !1;
              }
              L = void 0;
            }
          } finally {
            L ? qe() : Dt = !1;
          }
        }
      }
      function $e(_, L) {
        var P = _.length;
        _.push(L);
        e: for (; 0 < P; ) {
          var pe = P - 1 >>> 1, Ae = _[pe];
          if (0 < je(Ae, L))
            _[pe] = L, _[P] = Ae, P = pe;
          else break e;
        }
      }
      function N(_) {
        return _.length === 0 ? null : _[0];
      }
      function Ce(_) {
        if (_.length === 0) return null;
        var L = _[0], P = _.pop();
        if (P !== L) {
          _[0] = P;
          e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
            var B = 2 * (pe + 1) - 1, F = _[B], W = B + 1, ge = _[W];
            if (0 > je(F, P))
              W < Ae && 0 > je(ge, F) ? (_[pe] = ge, _[W] = P, pe = W) : (_[pe] = F, _[B] = P, pe = B);
            else if (W < Ae && 0 > je(ge, P))
              _[pe] = ge, _[W] = P, pe = W;
            else break e;
          }
        }
        return L;
      }
      function je(_, L) {
        var P = _.sortIndex - L.sortIndex;
        return P !== 0 ? P : _.id - L.id;
      }
      function vt(_) {
        for (var L = N(Le); L !== null; ) {
          if (L.callback === null) Ce(Le);
          else if (L.startTime <= _)
            Ce(Le), L.sortIndex = L.expirationTime, $e(ie, L);
          else break;
          L = N(Le);
        }
      }
      function ee(_) {
        if (Jt = !1, vt(_), !Bt)
          if (N(ie) !== null)
            Bt = !0, Dt || (Dt = !0, qe());
          else {
            var L = N(Le);
            L !== null && k(
              ee,
              L.startTime - _
            );
          }
      }
      function ne() {
        return el ? !0 : !($.unstable_now() - ye < Yt);
      }
      function k(_, L) {
        se = ul(function() {
          _($.unstable_now());
        }, L);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), $.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var He = performance;
        $.unstable_now = function() {
          return He.now();
        };
      } else {
        var X = Date, U = X.now();
        $.unstable_now = function() {
          return X.now() - U;
        };
      }
      var ie = [], Le = [], _t = 1, ft = null, lt = 3, Tl = !1, Bt = !1, Jt = !1, el = !1, ul = typeof setTimeout == "function" ? setTimeout : null, ze = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null, Dt = !1, se = -1, Yt = 5, ye = -1;
      if (typeof Ve == "function")
        var qe = function() {
          Ve(ae);
        };
      else if (typeof MessageChannel < "u") {
        var Qt = new MessageChannel(), qt = Qt.port2;
        Qt.port1.onmessage = ae, qe = function() {
          qt.postMessage(null);
        };
      } else
        qe = function() {
          ul(ae, 0);
        };
      $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(_) {
        _.callback = null;
      }, $.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Yt = 0 < _ ? Math.floor(1e3 / _) : 5;
      }, $.unstable_getCurrentPriorityLevel = function() {
        return lt;
      }, $.unstable_next = function(_) {
        switch (lt) {
          case 1:
          case 2:
          case 3:
            var L = 3;
            break;
          default:
            L = lt;
        }
        var P = lt;
        lt = L;
        try {
          return _();
        } finally {
          lt = P;
        }
      }, $.unstable_requestPaint = function() {
        el = !0;
      }, $.unstable_runWithPriority = function(_, L) {
        switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            _ = 3;
        }
        var P = lt;
        lt = _;
        try {
          return L();
        } finally {
          lt = P;
        }
      }, $.unstable_scheduleCallback = function(_, L, P) {
        var pe = $.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, _) {
          case 1:
            var Ae = -1;
            break;
          case 2:
            Ae = 250;
            break;
          case 5:
            Ae = 1073741823;
            break;
          case 4:
            Ae = 1e4;
            break;
          default:
            Ae = 5e3;
        }
        return Ae = P + Ae, _ = {
          id: _t++,
          callback: L,
          priorityLevel: _,
          startTime: P,
          expirationTime: Ae,
          sortIndex: -1
        }, P > pe ? (_.sortIndex = P, $e(Le, _), N(ie) === null && _ === N(Le) && (Jt ? (ze(se), se = -1) : Jt = !0, k(ee, P - pe))) : (_.sortIndex = Ae, $e(ie, _), Bt || Tl || (Bt = !0, Dt || (Dt = !0, qe()))), _;
      }, $.unstable_shouldYield = ne, $.unstable_wrapCallback = function(_) {
        var L = lt;
        return function() {
          var P = lt;
          lt = L;
          try {
            return _.apply(this, arguments);
          } finally {
            lt = P;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(g1)), g1;
}
var j2;
function Z2() {
  return j2 || (j2 = 1, process.env.NODE_ENV === "production" ? Lg.exports = bT() : Lg.exports = ET()), Lg.exports;
}
var Vg = { exports: {} }, Ya = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x2;
function TT() {
  if (x2) return Ya;
  x2 = 1;
  var $ = gm();
  function ae(ne) {
    var k = "https://react.dev/errors/" + ne;
    if (1 < arguments.length) {
      k += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var He = 2; He < arguments.length; He++)
        k += "&args[]=" + encodeURIComponent(arguments[He]);
    }
    return "Minified React error #" + ne + "; visit " + k + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $e() {
  }
  var N = {
    d: {
      f: $e,
      r: function() {
        throw Error(ae(522));
      },
      D: $e,
      C: $e,
      L: $e,
      m: $e,
      X: $e,
      S: $e,
      M: $e
    },
    p: 0,
    findDOMNode: null
  }, Ce = Symbol.for("react.portal");
  function je(ne, k, He) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: X == null ? null : "" + X,
      children: ne,
      containerInfo: k,
      implementation: He
    };
  }
  var vt = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ee(ne, k) {
    if (ne === "font") return "";
    if (typeof k == "string")
      return k === "use-credentials" ? k : "";
  }
  return Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Ya.createPortal = function(ne, k) {
    var He = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!k || k.nodeType !== 1 && k.nodeType !== 9 && k.nodeType !== 11)
      throw Error(ae(299));
    return je(ne, k, null, He);
  }, Ya.flushSync = function(ne) {
    var k = vt.T, He = N.p;
    try {
      if (vt.T = null, N.p = 2, ne) return ne();
    } finally {
      vt.T = k, N.p = He, N.d.f();
    }
  }, Ya.preconnect = function(ne, k) {
    typeof ne == "string" && (k ? (k = k.crossOrigin, k = typeof k == "string" ? k === "use-credentials" ? k : "" : void 0) : k = null, N.d.C(ne, k));
  }, Ya.prefetchDNS = function(ne) {
    typeof ne == "string" && N.d.D(ne);
  }, Ya.preinit = function(ne, k) {
    if (typeof ne == "string" && k && typeof k.as == "string") {
      var He = k.as, X = ee(He, k.crossOrigin), U = typeof k.integrity == "string" ? k.integrity : void 0, ie = typeof k.fetchPriority == "string" ? k.fetchPriority : void 0;
      He === "style" ? N.d.S(
        ne,
        typeof k.precedence == "string" ? k.precedence : void 0,
        {
          crossOrigin: X,
          integrity: U,
          fetchPriority: ie
        }
      ) : He === "script" && N.d.X(ne, {
        crossOrigin: X,
        integrity: U,
        fetchPriority: ie,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0
      });
    }
  }, Ya.preinitModule = function(ne, k) {
    if (typeof ne == "string")
      if (typeof k == "object" && k !== null) {
        if (k.as == null || k.as === "script") {
          var He = ee(
            k.as,
            k.crossOrigin
          );
          N.d.M(ne, {
            crossOrigin: He,
            integrity: typeof k.integrity == "string" ? k.integrity : void 0,
            nonce: typeof k.nonce == "string" ? k.nonce : void 0
          });
        }
      } else k == null && N.d.M(ne);
  }, Ya.preload = function(ne, k) {
    if (typeof ne == "string" && typeof k == "object" && k !== null && typeof k.as == "string") {
      var He = k.as, X = ee(He, k.crossOrigin);
      N.d.L(ne, He, {
        crossOrigin: X,
        integrity: typeof k.integrity == "string" ? k.integrity : void 0,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0,
        type: typeof k.type == "string" ? k.type : void 0,
        fetchPriority: typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
        referrerPolicy: typeof k.referrerPolicy == "string" ? k.referrerPolicy : void 0,
        imageSrcSet: typeof k.imageSrcSet == "string" ? k.imageSrcSet : void 0,
        imageSizes: typeof k.imageSizes == "string" ? k.imageSizes : void 0,
        media: typeof k.media == "string" ? k.media : void 0
      });
    }
  }, Ya.preloadModule = function(ne, k) {
    if (typeof ne == "string")
      if (k) {
        var He = ee(k.as, k.crossOrigin);
        N.d.m(ne, {
          as: typeof k.as == "string" && k.as !== "script" ? k.as : void 0,
          crossOrigin: He,
          integrity: typeof k.integrity == "string" ? k.integrity : void 0
        });
      } else N.d.m(ne);
  }, Ya.requestFormReset = function(ne) {
    N.d.r(ne);
  }, Ya.unstable_batchedUpdates = function(ne, k) {
    return ne(k);
  }, Ya.useFormState = function(ne, k, He) {
    return vt.H.useFormState(ne, k, He);
  }, Ya.useFormStatus = function() {
    return vt.H.useHostTransitionStatus();
  }, Ya.version = "19.2.4", Ya;
}
var qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G2;
function AT() {
  return G2 || (G2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function $() {
    }
    function ae(X) {
      return "" + X;
    }
    function $e(X, U, ie) {
      var Le = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        ae(Le);
        var _t = !1;
      } catch {
        _t = !0;
      }
      return _t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Le[Symbol.toStringTag] || Le.constructor.name || "Object"
      ), ae(Le)), {
        $$typeof: k,
        key: Le == null ? null : "" + Le,
        children: X,
        containerInfo: U,
        implementation: ie
      };
    }
    function N(X, U) {
      if (X === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function Ce(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : 'something with type "' + typeof X + '"';
    }
    function je(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : typeof X == "string" ? JSON.stringify(X) : typeof X == "number" ? "`" + X + "`" : 'something with type "' + typeof X + '"';
    }
    function vt() {
      var X = He.H;
      return X === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), X;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var ee = gm(), ne = {
      d: {
        f: $,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: $,
        C: $,
        L: $,
        m: $,
        X: $,
        S: $,
        M: $
      },
      p: 0,
      findDOMNode: null
    }, k = Symbol.for("react.portal"), He = ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), qa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne, qa.createPortal = function(X, U) {
      var ie = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return $e(X, U, null, ie);
    }, qa.flushSync = function(X) {
      var U = He.T, ie = ne.p;
      try {
        if (He.T = null, ne.p = 2, X)
          return X();
      } finally {
        He.T = U, ne.p = ie, ne.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, qa.preconnect = function(X, U) {
      typeof X == "string" && X ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        je(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Ce(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ce(X)
      ), typeof X == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, ne.d.C(X, U));
    }, qa.prefetchDNS = function(X) {
      if (typeof X != "string" || !X)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Ce(X)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          je(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          je(U)
        );
      }
      typeof X == "string" && ne.d.D(X);
    }, qa.preinit = function(X, U) {
      if (typeof X == "string" && X ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        je(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        je(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ce(X)
      ), typeof X == "string" && U && typeof U.as == "string") {
        var ie = U.as, Le = N(ie, U.crossOrigin), _t = typeof U.integrity == "string" ? U.integrity : void 0, ft = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        ie === "style" ? ne.d.S(
          X,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Le,
            integrity: _t,
            fetchPriority: ft
          }
        ) : ie === "script" && ne.d.X(X, {
          crossOrigin: Le,
          integrity: _t,
          fetchPriority: ft,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, qa.preinitModule = function(X, U) {
      var ie = "";
      if (typeof X == "string" && X || (ie += " The `href` argument encountered was " + Ce(X) + "."), U !== void 0 && typeof U != "object" ? ie += " The `options` argument encountered was " + Ce(U) + "." : U && "as" in U && U.as !== "script" && (ie += " The `as` option encountered was " + je(U.as) + "."), ie)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ie
        );
      else
        switch (ie = U && typeof U.as == "string" ? U.as : "script", ie) {
          case "script":
            break;
          default:
            ie = je(ie), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ie,
              X
            );
        }
      typeof X == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (ie = N(
        U.as,
        U.crossOrigin
      ), ne.d.M(X, {
        crossOrigin: ie,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && ne.d.M(X));
    }, qa.preload = function(X, U) {
      var ie = "";
      if (typeof X == "string" && X || (ie += " The `href` argument encountered was " + Ce(X) + "."), U == null || typeof U != "object" ? ie += " The `options` argument encountered was " + Ce(U) + "." : typeof U.as == "string" && U.as || (ie += " The `as` option encountered was " + Ce(U.as) + "."), ie && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ie
      ), typeof X == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        ie = U.as;
        var Le = N(
          ie,
          U.crossOrigin
        );
        ne.d.L(X, ie, {
          crossOrigin: Le,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, qa.preloadModule = function(X, U) {
      var ie = "";
      typeof X == "string" && X || (ie += " The `href` argument encountered was " + Ce(X) + "."), U !== void 0 && typeof U != "object" ? ie += " The `options` argument encountered was " + Ce(U) + "." : U && "as" in U && typeof U.as != "string" && (ie += " The `as` option encountered was " + Ce(U.as) + "."), ie && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ie
      ), typeof X == "string" && (U ? (ie = N(
        U.as,
        U.crossOrigin
      ), ne.d.m(X, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: ie,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : ne.d.m(X));
    }, qa.requestFormReset = function(X) {
      ne.d.r(X);
    }, qa.unstable_batchedUpdates = function(X, U) {
      return X(U);
    }, qa.useFormState = function(X, U, ie) {
      return vt().useFormState(X, U, ie);
    }, qa.useFormStatus = function() {
      return vt().useHostTransitionStatus();
    }, qa.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), qa;
}
var w2;
function J2() {
  if (w2) return Vg.exports;
  w2 = 1;
  function $() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($);
      } catch (ae) {
        console.error(ae);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? ($(), Vg.exports = TT()) : Vg.exports = AT(), Vg.exports;
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
var X2;
function OT() {
  if (X2) return p0;
  X2 = 1;
  var $ = Z2(), ae = gm(), $e = J2();
  function N(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ce(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function je(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function vt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ee(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ne(l) {
    if (je(l) !== l)
      throw Error(N(188));
  }
  function k(l) {
    var n = l.alternate;
    if (!n) {
      if (n = je(l), n === null) throw Error(N(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ne(s), l;
          if (r === c) return ne(s), n;
          r = r.sibling;
        }
        throw Error(N(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, g = s.child; g; ) {
          if (g === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (g === c) {
            m = !0, c = s, u = r;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (g === c) {
              m = !0, c = r, u = s;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(N(189));
        }
      }
      if (u.alternate !== c) throw Error(N(190));
    }
    if (u.tag !== 3) throw Error(N(188));
    return u.stateNode.current === u ? l : n;
  }
  function He(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = He(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var X = Object.assign, U = Symbol.for("react.element"), ie = Symbol.for("react.transitional.element"), Le = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), ft = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), Tl = Symbol.for("react.consumer"), Bt = Symbol.for("react.context"), Jt = Symbol.for("react.forward_ref"), el = Symbol.for("react.suspense"), ul = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), se = Symbol.for("react.memo_cache_sentinel"), Yt = Symbol.iterator;
  function ye(l) {
    return l === null || typeof l != "object" ? null : (l = Yt && l[Yt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var qe = Symbol.for("react.client.reference");
  function Qt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === qe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _t:
        return "Fragment";
      case lt:
        return "Profiler";
      case ft:
        return "StrictMode";
      case el:
        return "Suspense";
      case ul:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Le:
          return "Portal";
        case Bt:
          return l.displayName || "Context";
        case Tl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Jt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ze:
          return n = l.displayName || null, n !== null ? n : Qt(l.type) || "Memo";
        case Ve:
          n = l._payload, l = l._init;
          try {
            return Qt(l(n));
          } catch {
          }
      }
    return null;
  }
  var qt = Array.isArray, _ = ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Ae = -1;
  function S(l) {
    return { current: l };
  }
  function B(l) {
    0 > Ae || (l.current = pe[Ae], pe[Ae] = null, Ae--);
  }
  function F(l, n) {
    Ae++, pe[Ae] = l.current, l.current = n;
  }
  var W = S(null), ge = S(null), xe = S(null), Ee = S(null);
  function Lt(l, n) {
    switch (F(xe, n), F(ge, l), F(W, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Uv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Uv(n), l = fp(n, l);
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
    B(W), F(W, l);
  }
  function ht() {
    B(W), B(ge), B(xe);
  }
  function ja(l) {
    l.memoizedState !== null && F(Ee, l);
    var n = W.current, u = fp(n, l.type);
    n !== u && (F(ge, l), F(W, u));
  }
  function ce(l) {
    ge.current === l && (B(W), B(ge)), Ee.current === l && (B(Ee), Or._currentValue = P);
  }
  var Di, _i;
  function xa(l) {
    if (Di === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Di = n && n[1] || "", _i = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Di + l + _i;
  }
  var uu = !1;
  function mt(l, n) {
    if (!l || uu) return "";
    uu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (w) {
                  var q = w;
                }
                Reflect.construct(l, [], J);
              } else {
                try {
                  J.call();
                } catch (w) {
                  q = w;
                }
                l.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                q = w;
              }
              (J = l()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (w) {
            if (w && q && typeof w.stack == "string")
              return [w.stack, q.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var A = m.split(`
`), Y = g.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < Y.length && !Y[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === Y.length)
          for (c = A.length - 1, s = Y.length - 1; 1 <= c && 0 <= s && A[c] !== Y[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== Y[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== Y[s]) {
                  var Q = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      uu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? xa(u) : "";
  }
  function Pl(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return xa(l.type);
      case 16:
        return xa("Lazy");
      case 13:
        return l.child !== n && n !== null ? xa("Suspense Fallback") : xa("Suspense");
      case 19:
        return xa("SuspenseList");
      case 0:
      case 15:
        return mt(l.type, !1);
      case 11:
        return mt(l.type.render, !1);
      case 1:
        return mt(l.type, !0);
      case 31:
        return xa("Activity");
      default:
        return "";
    }
  }
  function vc(l) {
    try {
      var n = "", u = null;
      do
        n += Pl(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var ss = Object.prototype.hasOwnProperty, re = $.unstable_scheduleCallback, Ri = $.unstable_cancelCallback, iu = $.unstable_shouldYield, gc = $.unstable_requestPaint, vl = $.unstable_now, Fr = $.unstable_getCurrentPriorityLevel, Mo = $.unstable_ImmediatePriority, Co = $.unstable_UserBlockingPriority, Mn = $.unstable_NormalPriority, Ir = $.unstable_LowPriority, Uo = $.unstable_IdlePriority, rs = $.log, Sc = $.unstable_setDisableYieldValue, rn = null, Al = null;
  function Ga(l) {
    if (typeof rs == "function" && Sc(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(rn, l);
      } catch {
      }
  }
  var Ul = Math.clz32 ? Math.clz32 : M, Mi = Math.log, v = Math.LN2;
  function M(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Mi(l) / v | 0) | 0;
  }
  var I = 256, te = 262144, de = 4194304;
  function De(l) {
    var n = l & 42;
    if (n !== 0) return n;
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
  function he(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = De(c) : (m &= g, m !== 0 ? s = De(m) : u || (u = g & ~l, u !== 0 && (s = De(u))))) : (g = c & ~r, g !== 0 ? s = De(g) : m !== 0 ? s = De(m) : u || (u = c & ~l, u !== 0 && (s = De(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Pe(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ge(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function ea() {
    var l = de;
    return de <<= 1, (de & 62914560) === 0 && (de = 4194304), l;
  }
  function dn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ci(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ho(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, A = l.expirationTimes, Y = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Q = 31 - Ul(u), J = 1 << Q;
      g[Q] = 0, A[Q] = -1;
      var q = Y[Q];
      if (q !== null)
        for (Y[Q] = null, Q = 0; Q < q.length; Q++) {
          var w = q[Q];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~J;
    }
    c !== 0 && ds(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function ds(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ul(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function cu(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ul(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function wa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Pr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Pr(l) {
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
  function Sm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ed() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : zr(l.type));
  }
  function bm(l, n) {
    var u = L.p;
    try {
      return L.p = l, n();
    } finally {
      L.p = u;
    }
  }
  var Cn = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Cn, fa = "__reactProps$" + Cn, Ui = "__reactContainer$" + Cn, td = "__reactEvents$" + Cn, Em = "__reactListeners$" + Cn, S0 = "__reactHandles$" + Cn, Tm = "__reactResources$" + Cn, ou = "__reactMarker$" + Cn;
  function ld(l) {
    delete l[Rt], delete l[fa], delete l[td], delete l[Em], delete l[S0];
  }
  function bc(l) {
    var n = l[Rt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ui] || u[Rt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Fn(l); l !== null; ) {
            if (u = l[Rt]) return u;
            l = Fn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ec(l) {
    if (l = l[Rt] || l[Ui]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function No(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(N(33));
  }
  function Tc(l) {
    var n = l[Tm];
    return n || (n = l[Tm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Et(l) {
    l[ou] = !0;
  }
  var Ac = /* @__PURE__ */ new Set(), Hi = {};
  function Ni(l, n) {
    fu(l, n), fu(l + "Capture", n);
  }
  function fu(l, n) {
    for (Hi[l] = n, l = 0; l < n.length; l++)
      Ac.add(n[l]);
  }
  var ad = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nd = {}, Bo = {};
  function Yo(l) {
    return ss.call(Bo, l) ? !0 : ss.call(nd, l) ? !1 : ad.test(l) ? Bo[l] = !0 : (nd[l] = !0, !1);
  }
  function qo(l, n, u) {
    if (Yo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function ud(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Fu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Xa(l) {
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
  function id(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Am(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function cd(l) {
    if (!l._valueTracker) {
      var n = id(l) ? "checked" : "value";
      l._valueTracker = Am(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Om(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = id(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function hs(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Jg = /[\n"\\]/g;
  function Qa(l) {
    return l.replace(
      Jg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ms(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Xa(n)) : l.value !== "" + Xa(n) && (l.value = "" + Xa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Oc(l, m, Xa(n)) : u != null ? Oc(l, m, Xa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + Xa(g) : l.removeAttribute("name");
  }
  function ys(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        cd(l);
        return;
      }
      u = u != null ? "" + Xa(u) : "", n = n != null ? "" + Xa(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), cd(l);
  }
  function Oc(l, n, u) {
    n === "number" && hs(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function jo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Xa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function zm(l, n, u) {
    if (n != null && (n = "" + Xa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Xa(u) : "";
  }
  function Dm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(N(92));
        if (qt(c)) {
          if (1 < c.length) throw Error(N(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Xa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), cd(l);
  }
  function su(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var b0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function E0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || b0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function T0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(N(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && E0(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && E0(l, r, n[r]);
  }
  function _m(l) {
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
  var Kg = /* @__PURE__ */ new Map([
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
  ]), ps = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hn(l) {
    return ps.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Un() {
  }
  var od = null;
  function fd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ru = null, zc = null;
  function vs(l) {
    var n = Ec(l);
    if (n && (l = n.stateNode)) {
      var u = l[fa] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ms(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Qa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[fa] || null;
                if (!s) throw Error(N(90));
                ms(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Om(c);
          }
          break e;
        case "textarea":
          zm(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && jo(l, !!u.multiple, n, !1);
      }
    }
  }
  var xo = !1;
  function Rm(l, n, u) {
    if (xo) return l(n, u);
    xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (xo = !1, (ru !== null || zc !== null) && (Ef(), ru && (n = ru, l = zc, zc = ru = null, vs(n), l)))
        for (n = 0; n < l.length; n++) vs(l[n]);
    }
  }
  function Hl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[fa] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        N(231, n, typeof u)
      );
    return u;
  }
  var Iu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gs = !1;
  if (Iu)
    try {
      var Go = {};
      Object.defineProperty(Go, "passive", {
        get: function() {
          gs = !0;
        }
      }), window.addEventListener("test", Go, Go), window.removeEventListener("test", Go, Go);
    } catch {
      gs = !1;
    }
  var Pu = null, Mm = null, sd = null;
  function Cm() {
    if (sd) return sd;
    var l, n = Mm, u = n.length, c, s = "value" in Pu ? Pu.value : Pu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return sd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function rd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ss() {
    return !0;
  }
  function A0() {
    return !1;
  }
  function Kl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ss : A0, this.isPropagationStopped = A0, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ss);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ss);
      },
      persist: function() {
      },
      isPersistent: Ss
    }), n;
  }
  var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bs = Kl(Bi), wo = X({}, Bi, { view: 0, detail: 0 }), $g = Kl(wo), Um, Hm, Es, dd = X({}, wo, {
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
    getModifierState: mn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Es && (Es && l.type === "mousemove" ? (Um = l.screenX - Es.screenX, Hm = l.screenY - Es.screenY) : Hm = Um = 0, Es = l), Um);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Hm;
    }
  }), Xo = Kl(dd), O0 = X({}, dd, { dataTransfer: 0 }), z0 = Kl(O0), D0 = X({}, wo, { relatedTarget: 0 }), hd = Kl(D0), Nm = X({}, Bi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _0 = Kl(Nm), Dc = X({}, Bi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), _c = Kl(Dc), Hn = X({}, Bi, { data: 0 }), R0 = Kl(Hn), Bm = {
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
  }, du = {
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
  }, M0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Nn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = M0[l]) ? !!n[l] : !1;
  }
  function mn() {
    return Nn;
  }
  var md = X({}, wo, {
    key: function(l) {
      if (l.key) {
        var n = Bm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = rd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? du[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mn,
    charCode: function(l) {
      return l.type === "keypress" ? rd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? rd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), yd = Kl(md), Ym = X({}, dd, {
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
  }), Bn = Kl(Ym), kg = X({}, wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mn
  }), C0 = Kl(kg), U0 = X({}, Bi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wg = Kl(U0), qm = X({}, dd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fg = Kl(qm), H0 = X({}, Bi, {
    newState: 0,
    oldState: 0
  }), jm = Kl(H0), pd = [9, 13, 27, 32], Qo = Iu && "CompositionEvent" in window, Rc = null;
  Iu && "documentMode" in document && (Rc = document.documentMode);
  var ta = Iu && "TextEvent" in window && !Rc, xm = Iu && (!Qo || Rc && 8 < Rc && 11 >= Rc), Ts = " ", Yi = !1;
  function vd(l, n) {
    switch (l) {
      case "keyup":
        return pd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Mc = !1;
  function N0(l, n) {
    switch (l) {
      case "compositionend":
        return Gm(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, Ts);
      case "textInput":
        return l = n.data, l === Ts && Yi ? null : l;
      default:
        return null;
    }
  }
  function Ig(l, n) {
    if (Mc)
      return l === "compositionend" || !Qo && vd(l, n) ? (l = Cm(), sd = Mm = Pu = null, Mc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return xm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var wm = {
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
  function hu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!wm[l.type] : n === "textarea";
  }
  function Xm(l, n, u, c) {
    ru ? zc ? zc.push(c) : zc = [c] : ru = c, n = gr(n, "onChange"), 0 < n.length && (u = new bs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Cc = null, qi = null;
  function Uc(l) {
    Rv(l, 0);
  }
  function Lo(l) {
    var n = No(l);
    if (Om(n)) return l;
  }
  function Qm(l, n) {
    if (l === "change") return n;
  }
  var gd = !1;
  if (Iu) {
    var sa;
    if (Iu) {
      var Yn = "oninput" in document;
      if (!Yn) {
        var Lm = document.createElement("div");
        Lm.setAttribute("oninput", "return;"), Yn = typeof Lm.oninput == "function";
      }
      sa = Yn;
    } else sa = !1;
    gd = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function Sd() {
    Cc && (Cc.detachEvent("onpropertychange", bd), qi = Cc = null);
  }
  function bd(l) {
    if (l.propertyName === "value" && Lo(qi)) {
      var n = [];
      Xm(
        n,
        qi,
        l,
        fd(l)
      ), Rm(Uc, n);
    }
  }
  function B0(l, n, u) {
    l === "focusin" ? (Sd(), Cc = n, qi = u, Cc.attachEvent("onpropertychange", bd)) : l === "focusout" && Sd();
  }
  function Y0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Lo(qi);
  }
  function ji(l, n) {
    if (l === "click") return Lo(n);
  }
  function Hc(l, n) {
    if (l === "input" || l === "change")
      return Lo(n);
  }
  function q0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var la = typeof Object.is == "function" ? Object.is : q0;
  function yn(l, n) {
    if (la(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!ss.call(n, s) || !la(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Vm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Zm(l, n) {
    var u = Vm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Vm(u);
    }
  }
  function Nc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Nc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function xi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = hs(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = hs(l.document);
    }
    return n;
  }
  function As(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Os = Iu && "documentMode" in document && 11 >= document.documentMode, Gi = null, Vo = null, pn = null, qn = !1;
  function Ed(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    qn || Gi == null || Gi !== hs(c) || (c = Gi, "selectionStart" in c && As(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), pn && yn(pn, c) || (pn = c, c = gr(Vo, "onSelect"), 0 < c.length && (n = new bs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Gi)));
  }
  function ei(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var jn = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionrun: ei("Transition", "TransitionRun"),
    transitionstart: ei("Transition", "TransitionStart"),
    transitioncancel: ei("Transition", "TransitionCancel"),
    transitionend: ei("Transition", "TransitionEnd")
  }, Zo = {}, wi = {};
  Iu && (wi = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
  function gt(l) {
    if (Zo[l]) return Zo[l];
    if (!jn[l]) return l;
    var n = jn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in wi)
        return Zo[l] = n[u];
    return l;
  }
  var zs = gt("animationend"), Jm = gt("animationiteration"), Td = gt("animationstart"), Bc = gt("transitionrun"), Ds = gt("transitionstart"), mu = gt("transitioncancel"), j0 = gt("transitionend"), yu = /* @__PURE__ */ new Map(), Jo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Jo.push("scrollEnd");
  function ra(l, n) {
    yu.set(l, n), Ni(n, [l]);
  }
  var Yc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Kt = [], Nl = 0, vn = 0;
  function La() {
    for (var l = Nl, n = vn = Nl = 0; n < l; ) {
      var u = Kt[n];
      Kt[n++] = null;
      var c = Kt[n];
      Kt[n++] = null;
      var s = Kt[n];
      Kt[n++] = null;
      var r = Kt[n];
      if (Kt[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Ad(u, s, r);
    }
  }
  function Va(l, n, u, c) {
    Kt[Nl++] = l, Kt[Nl++] = n, Kt[Nl++] = u, Kt[Nl++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function gn(l, n, u, c) {
    return Va(l, n, u, c), _s(l);
  }
  function ti(l, n) {
    return Va(l, null, null, n), _s(l);
  }
  function Ad(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ul(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function _s(l) {
    if (50 < bf)
      throw bf = 0, fr = null, Error(N(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = {};
  function x0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(l, n, u, c) {
    return new x0(l, n, u, c);
  }
  function qc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function li(l, n) {
    var u = l.alternate;
    return u === null ? (u = il(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Km(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Od(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") qc(l) && (m = 1);
    else if (typeof l == "string")
      m = pp(
        l,
        u,
        W.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Dt:
          return l = il(31, u, n, s), l.elementType = Dt, l.lanes = r, l;
        case _t:
          return ai(u.children, s, r, n);
        case ft:
          m = 8, s |= 24;
          break;
        case lt:
          return l = il(12, u, n, s | 2), l.elementType = lt, l.lanes = r, l;
        case el:
          return l = il(13, u, n, s), l.elementType = el, l.lanes = r, l;
        case ul:
          return l = il(19, u, n, s), l.elementType = ul, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Bt:
                m = 10;
                break e;
              case Tl:
                m = 9;
                break e;
              case Jt:
                m = 11;
                break e;
              case ze:
                m = 14;
                break e;
              case Ve:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            N(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = il(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ai(l, n, u, c) {
    return l = il(7, l, c, n), l.lanes = u, l;
  }
  function Ko(l, n, u) {
    return l = il(6, l, null, n), l.lanes = u, l;
  }
  function $m(l) {
    var n = il(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function zd(l, n, u) {
    return n = il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var km = /* @__PURE__ */ new WeakMap();
  function Za(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = km.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: vc(n)
      }, km.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: vc(n)
    };
  }
  var Ja = [], jc = 0, Rs = null, rl = 0, Da = [], ha = 0, xn = null, _a = 1, Gn = "";
  function Sn(l, n) {
    Ja[jc++] = rl, Ja[jc++] = Rs, Rs = l, rl = n;
  }
  function Wm(l, n, u) {
    Da[ha++] = _a, Da[ha++] = Gn, Da[ha++] = xn, xn = l;
    var c = _a;
    l = Gn;
    var s = 32 - Ul(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ul(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, _a = 1 << 32 - Ul(n) + s | u << s | c, Gn = r + l;
    } else
      _a = 1 << r | u << s | c, Gn = l;
  }
  function $o(l) {
    l.return !== null && (Sn(l, 1), Wm(l, 1, 0));
  }
  function Dd(l) {
    for (; l === Rs; )
      Rs = Ja[--jc], Ja[jc] = null, rl = Ja[--jc], Ja[jc] = null;
    for (; l === xn; )
      xn = Da[--ha], Da[ha] = null, Gn = Da[--ha], Da[ha] = null, _a = Da[--ha], Da[ha] = null;
  }
  function Ms(l, n) {
    Da[ha++] = _a, Da[ha++] = Gn, Da[ha++] = xn, _a = n.id, Gn = n.overflow, xn = l;
  }
  var Bl = null, jt = null, nt = !1, pu = null, Ol = !1, vu = Error(N(519));
  function bn(l) {
    var n = Error(
      N(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wo(Za(n, l)), vu;
  }
  function Cs(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Rt] = l, n[fa] = c, u) {
      case "dialog":
        at("cancel", n), at("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Df.length; u++)
          at(Df[u], n);
        break;
      case "source":
        at("error", n);
        break;
      case "img":
      case "image":
      case "link":
        at("error", n), at("load", n);
        break;
      case "details":
        at("toggle", n);
        break;
      case "input":
        at("invalid", n), ys(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        at("invalid", n);
        break;
      case "textarea":
        at("invalid", n), Dm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || up(n.textContent, u) ? (c.popover != null && (at("beforetoggle", n), at("toggle", n)), c.onScroll != null && at("scroll", n), c.onScrollEnd != null && at("scrollend", n), c.onClick != null && (n.onclick = Un), n = !0) : n = !1, n || bn(l, !0);
  }
  function ko(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Ol = !1;
          return;
        case 27:
        case 3:
          Ol = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function gu(l) {
    if (l !== Bl) return !1;
    if (!nt) return ko(l), nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Rf(l.type, l.memoizedProps)), u = !u), u && jt && bn(l), ko(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
      jt = Mh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
      jt = Mh(l);
    } else
      n === 27 ? (n = jt, Wn(l.type) ? (l = Er, Er = null, jt = l) : jt = n) : jt = Bl ? Aa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    jt = Bl = null, nt = !1;
  }
  function Fm() {
    var l = pu;
    return l !== null && (al === null ? al = l : al.push.apply(
      al,
      l
    ), pu = null), l;
  }
  function Wo(l) {
    pu === null ? pu = [l] : pu.push(l);
  }
  var _d = S(null), ni = null, wn = null;
  function ma(l, n, u) {
    F(_d, n._currentValue), n._currentValue = u;
  }
  function Xn(l) {
    l._currentValue = _d.current, B(_d);
  }
  function Rd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Su(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (g.context === n[A]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Rd(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(N(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Rd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Yl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(N(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          la(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === Ee.current) {
        if (m = s.alternate, m === null) throw Error(N(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Or) : l = [Or]);
      }
      s = s.return;
    }
    l !== null && Su(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function xc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!la(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ne(l) {
    ni = l, wn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function K(l) {
    return Us(ni, l);
  }
  function ui(l, n) {
    return ni === null && Ne(l), Us(l, n);
  }
  function Us(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, wn === null) {
      if (l === null) throw Error(N(308));
      wn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else wn = wn.next = n;
    return u;
  }
  var cl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Im = $.unstable_scheduleCallback, Pm = $.unstable_NormalPriority, dl = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hs() {
    return {
      controller: new cl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ns(l) {
    l.refCount--, l.refCount === 0 && Im(Pm, function() {
      l.controller.abort();
    });
  }
  var Gc = null, Bs = 0, Qi = 0, gl = null;
  function Tt(l, n) {
    if (Gc === null) {
      var u = Gc = [];
      Bs = 0, Qi = Eh(), gl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Bs++, n.then(Ys, Ys), n;
  }
  function Ys() {
    if (--Bs === 0 && Gc !== null) {
      gl !== null && (gl.status = "fulfilled");
      var l = Gc;
      Gc = null, Qi = 0, gl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qs(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var ii = _.S;
  _.S = function(l, n) {
    Jy = vl(), typeof n == "object" && n !== null && typeof n.then == "function" && Tt(l, n), ii !== null && ii(l, n);
  };
  var Ka = S(null);
  function $a() {
    var l = Ka.current;
    return l !== null ? l : Ct.pooledCache;
  }
  function Fo(l, n) {
    n === null ? F(Ka, Ka.current) : F(Ka, n.pool);
  }
  function wc() {
    var l = $a();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Li = Error(N(460)), Xc = Error(N(474)), Io = Error(N(542)), Qc = { then: function() {
  } };
  function ey(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ty(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Un, Un), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Md(l), l;
      default:
        if (typeof n.status == "string") n.then(Un, Un);
        else {
          if (l = Ct, l !== null && 100 < l.shellSuspendCounter)
            throw Error(N(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Md(l), l;
        }
        throw Zi = n, Li;
    }
  }
  function Vi(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Zi = u, Li) : u;
    }
  }
  var Zi = null;
  function ly() {
    if (Zi === null) throw Error(N(459));
    var l = Zi;
    return Zi = null, l;
  }
  function Md(l) {
    if (l === Li || l === Io)
      throw Error(N(483));
  }
  var Ji = null, Lc = 0;
  function js(l) {
    var n = Lc;
    return Lc += 1, Ji === null && (Ji = []), ty(Ji, l, n);
  }
  function Po(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function xs(l, n) {
    throw n.$$typeof === U ? Error(N(525)) : (l = Object.prototype.toString.call(n), Error(
      N(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function G0(l) {
    function n(C, D) {
      if (l) {
        var H = C.deletions;
        H === null ? (C.deletions = [D], C.flags |= 16) : H.push(D);
      }
    }
    function u(C, D) {
      if (!l) return null;
      for (; D !== null; )
        n(C, D), D = D.sibling;
      return null;
    }
    function c(C) {
      for (var D = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), C = C.sibling;
      return D;
    }
    function s(C, D) {
      return C = li(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, H) {
      return C.index = H, l ? (H = C.alternate, H !== null ? (H = H.index, H < D ? (C.flags |= 67108866, D) : H) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, D, H, Z) {
      return D === null || D.tag !== 6 ? (D = Ko(H, C.mode, Z), D.return = C, D) : (D = s(D, H), D.return = C, D);
    }
    function A(C, D, H, Z) {
      var Se = H.type;
      return Se === _t ? Q(
        C,
        D,
        H.props.children,
        Z,
        H.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Vi(Se) === D.type) ? (D = s(D, H.props), Po(D, H), D.return = C, D) : (D = Od(
        H.type,
        H.key,
        H.props,
        null,
        C.mode,
        Z
      ), Po(D, H), D.return = C, D);
    }
    function Y(C, D, H, Z) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== H.containerInfo || D.stateNode.implementation !== H.implementation ? (D = zd(H, C.mode, Z), D.return = C, D) : (D = s(D, H.children || []), D.return = C, D);
    }
    function Q(C, D, H, Z, Se) {
      return D === null || D.tag !== 7 ? (D = ai(
        H,
        C.mode,
        Z,
        Se
      ), D.return = C, D) : (D = s(D, H), D.return = C, D);
    }
    function J(C, D, H) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Ko(
          "" + D,
          C.mode,
          H
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ie:
            return H = Od(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              H
            ), Po(H, D), H.return = C, H;
          case Le:
            return D = zd(
              D,
              C.mode,
              H
            ), D.return = C, D;
          case Ve:
            return D = Vi(D), J(C, D, H);
        }
        if (qt(D) || ye(D))
          return D = ai(
            D,
            C.mode,
            H,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return J(C, js(D), H);
        if (D.$$typeof === Bt)
          return J(
            C,
            ui(C, D),
            H
          );
        xs(C, D);
      }
      return null;
    }
    function q(C, D, H, Z) {
      var Se = D !== null ? D.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return Se !== null ? null : g(C, D, "" + H, Z);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ie:
            return H.key === Se ? A(C, D, H, Z) : null;
          case Le:
            return H.key === Se ? Y(C, D, H, Z) : null;
          case Ve:
            return H = Vi(H), q(C, D, H, Z);
        }
        if (qt(H) || ye(H))
          return Se !== null ? null : Q(C, D, H, Z, null);
        if (typeof H.then == "function")
          return q(
            C,
            D,
            js(H),
            Z
          );
        if (H.$$typeof === Bt)
          return q(
            C,
            D,
            ui(C, H),
            Z
          );
        xs(C, H);
      }
      return null;
    }
    function w(C, D, H, Z, Se) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return C = C.get(H) || null, g(D, C, "" + Z, Se);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case ie:
            return C = C.get(
              Z.key === null ? H : Z.key
            ) || null, A(D, C, Z, Se);
          case Le:
            return C = C.get(
              Z.key === null ? H : Z.key
            ) || null, Y(D, C, Z, Se);
          case Ve:
            return Z = Vi(Z), w(
              C,
              D,
              H,
              Z,
              Se
            );
        }
        if (qt(Z) || ye(Z))
          return C = C.get(H) || null, Q(D, C, Z, Se, null);
        if (typeof Z.then == "function")
          return w(
            C,
            D,
            H,
            js(Z),
            Se
          );
        if (Z.$$typeof === Bt)
          return w(
            C,
            D,
            H,
            ui(D, Z),
            Se
          );
        xs(D, Z);
      }
      return null;
    }
    function fe(C, D, H, Z) {
      for (var Se = null, rt = null, me = D, we = D = 0, Je = null; me !== null && we < H.length; we++) {
        me.index > we ? (Je = me, me = null) : Je = me.sibling;
        var pt = q(
          C,
          me,
          H[we],
          Z
        );
        if (pt === null) {
          me === null && (me = Je);
          break;
        }
        l && me && pt.alternate === null && n(C, me), D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt, me = Je;
      }
      if (we === H.length)
        return u(C, me), nt && Sn(C, we), Se;
      if (me === null) {
        for (; we < H.length; we++)
          me = J(C, H[we], Z), me !== null && (D = r(
            me,
            D,
            we
          ), rt === null ? Se = me : rt.sibling = me, rt = me);
        return nt && Sn(C, we), Se;
      }
      for (me = c(me); we < H.length; we++)
        Je = w(
          me,
          C,
          we,
          H[we],
          Z
        ), Je !== null && (l && Je.alternate !== null && me.delete(
          Je.key === null ? we : Je.key
        ), D = r(
          Je,
          D,
          we
        ), rt === null ? Se = Je : rt.sibling = Je, rt = Je);
      return l && me.forEach(function(Pn) {
        return n(C, Pn);
      }), nt && Sn(C, we), Se;
    }
    function Oe(C, D, H, Z) {
      if (H == null) throw Error(N(151));
      for (var Se = null, rt = null, me = D, we = D = 0, Je = null, pt = H.next(); me !== null && !pt.done; we++, pt = H.next()) {
        me.index > we ? (Je = me, me = null) : Je = me.sibling;
        var Pn = q(C, me, pt.value, Z);
        if (Pn === null) {
          me === null && (me = Je);
          break;
        }
        l && me && Pn.alternate === null && n(C, me), D = r(Pn, D, we), rt === null ? Se = Pn : rt.sibling = Pn, rt = Pn, me = Je;
      }
      if (pt.done)
        return u(C, me), nt && Sn(C, we), Se;
      if (me === null) {
        for (; !pt.done; we++, pt = H.next())
          pt = J(C, pt.value, Z), pt !== null && (D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt);
        return nt && Sn(C, we), Se;
      }
      for (me = c(me); !pt.done; we++, pt = H.next())
        pt = w(me, C, we, pt.value, Z), pt !== null && (l && pt.alternate !== null && me.delete(pt.key === null ? we : pt.key), D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt);
      return l && me.forEach(function(Lv) {
        return n(C, Lv);
      }), nt && Sn(C, we), Se;
    }
    function Ht(C, D, H, Z) {
      if (typeof H == "object" && H !== null && H.type === _t && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ie:
            e: {
              for (var Se = H.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = H.type, Se === _t) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), Z = s(
                        D,
                        H.props.children
                      ), Z.return = C, C = Z;
                      break e;
                    }
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Vi(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), Z = s(D, H.props), Po(Z, H), Z.return = C, C = Z;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              H.type === _t ? (Z = ai(
                H.props.children,
                C.mode,
                Z,
                H.key
              ), Z.return = C, C = Z) : (Z = Od(
                H.type,
                H.key,
                H.props,
                null,
                C.mode,
                Z
              ), Po(Z, H), Z.return = C, C = Z);
            }
            return m(C);
          case Le:
            e: {
              for (Se = H.key; D !== null; ) {
                if (D.key === Se)
                  if (D.tag === 4 && D.stateNode.containerInfo === H.containerInfo && D.stateNode.implementation === H.implementation) {
                    u(
                      C,
                      D.sibling
                    ), Z = s(D, H.children || []), Z.return = C, C = Z;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              Z = zd(H, C.mode, Z), Z.return = C, C = Z;
            }
            return m(C);
          case Ve:
            return H = Vi(H), Ht(
              C,
              D,
              H,
              Z
            );
        }
        if (qt(H))
          return fe(
            C,
            D,
            H,
            Z
          );
        if (ye(H)) {
          if (Se = ye(H), typeof Se != "function") throw Error(N(150));
          return H = Se.call(H), Oe(
            C,
            D,
            H,
            Z
          );
        }
        if (typeof H.then == "function")
          return Ht(
            C,
            D,
            js(H),
            Z
          );
        if (H.$$typeof === Bt)
          return Ht(
            C,
            D,
            ui(C, H),
            Z
          );
        xs(C, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, D !== null && D.tag === 6 ? (u(C, D.sibling), Z = s(D, H), Z.return = C, C = Z) : (u(C, D), Z = Ko(H, C.mode, Z), Z.return = C, C = Z), m(C)) : u(C, D);
    }
    return function(C, D, H, Z) {
      try {
        Lc = 0;
        var Se = Ht(
          C,
          D,
          H,
          Z
        );
        return Ji = null, Se;
      } catch (me) {
        if (me === Li || me === Io) throw me;
        var rt = il(29, me, null, C.mode);
        return rt.lanes = Z, rt.return = C, rt;
      } finally {
      }
    };
  }
  var Ki = G0(!0), ay = G0(!1), ci = !1;
  function Gs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Cd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function oi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ka(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (yt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = _s(l), Ad(l, null, u), n;
    }
    return Va(l, c, n, u), _s(l);
  }
  function $i(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cu(l, u);
    }
  }
  function Ud(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var ny = !1;
  function ki() {
    if (ny) {
      var l = gl;
      if (l !== null) throw l;
    }
  }
  function bu(l, n, u, c) {
    ny = !1;
    var s = l.updateQueue;
    ci = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var A = g, Y = A.next;
      A.next = null, m === null ? r = Y : m.next = Y, m = A;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, g = Q.lastBaseUpdate, g !== m && (g === null ? Q.firstBaseUpdate = Y : g.next = Y, Q.lastBaseUpdate = A));
    }
    if (r !== null) {
      var J = s.baseState;
      m = 0, Q = Y = A = null, g = r;
      do {
        var q = g.lane & -536870913, w = q !== g.lane;
        if (w ? (et & q) === q : (c & q) === q) {
          q !== 0 && q === Qi && (ny = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = l, Oe = g;
            q = n;
            var Ht = u;
            switch (Oe.tag) {
              case 1:
                if (fe = Oe.payload, typeof fe == "function") {
                  J = fe.call(Ht, J, q);
                  break e;
                }
                J = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = Oe.payload, q = typeof fe == "function" ? fe.call(Ht, J, q) : fe, q == null) break e;
                J = X({}, J, q);
                break e;
              case 2:
                ci = !0;
            }
          }
          q = g.callback, q !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [q] : w.push(q));
        } else
          w = {
            lane: q,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, Q === null ? (Y = Q = w, A = J) : Q = Q.next = w, m |= q;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          w = g, g = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      Q === null && (A = J), s.baseState = A, s.firstBaseUpdate = Y, s.lastBaseUpdate = Q, r === null && (s.shared.lanes = 0), $n |= m, l.lanes = m, l.memoizedState = J;
    }
  }
  function Hd(l, n) {
    if (typeof l != "function")
      throw Error(N(191, l));
    l.call(n);
  }
  function Wi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Hd(u[l], n);
  }
  var zl = S(null), Vc = S(0);
  function w0(l, n) {
    l = Kn, F(Vc, l), F(zl, n), Kn = l | n.baseLanes;
  }
  function ws() {
    F(Vc, Kn), F(zl, zl.current);
  }
  function ef() {
    Kn = Vc.current, B(zl), B(Vc);
  }
  var ya = S(null), Wa = null;
  function Eu(l) {
    var n = l.alternate;
    F($t, $t.current & 1), F(ya, l), Wa === null && (n === null || zl.current !== null || n.memoizedState !== null) && (Wa = l);
  }
  function tf(l) {
    F($t, $t.current), F(ya, l), Wa === null && (Wa = l);
  }
  function Nd(l) {
    l.tag === 22 ? (F($t, $t.current), F(ya, l), Wa === null && (Wa = l)) : Qn();
  }
  function Qn() {
    F($t, $t.current), F(ya, ya.current);
  }
  function pa(l) {
    B(ya), Wa === l && (Wa = null), B($t);
  }
  var $t = S(0);
  function lf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || On(u) || oc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Tu = 0, Xe = null, At = null, hl = null, Zc = !1, Jc = !1, fi = !1, Xs = 0, af = 0, Fi = null, X0 = 0;
  function tl() {
    throw Error(N(321));
  }
  function si(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!la(l[u], n[u])) return !1;
    return !0;
  }
  function Qs(l, n, u, c, s, r) {
    return Tu = r, Xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = l === null || l.memoizedState === null ? k0 : Wd, fi = !1, r = u(c, s), fi = !1, Jc && (r = Q0(
      n,
      u,
      c,
      s
    )), Bd(l), r;
  }
  function Bd(l) {
    _.H = Fs;
    var n = At !== null && At.next !== null;
    if (Tu = 0, hl = At = Xe = null, Zc = !1, af = 0, Fi = null, n) throw Error(N(300));
    l === null || ml || (l = l.dependencies, l !== null && xc(l) && (ml = !0));
  }
  function Q0(l, n, u, c) {
    Xe = l;
    var s = 0;
    do {
      if (Jc && (Fi = null), af = 0, Jc = !1, 25 <= s) throw Error(N(301));
      if (s += 1, hl = At = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      _.H = W0, r = n(u, c);
    } while (Jc);
    return r;
  }
  function Pg() {
    var l = _.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? $c(n) : n, l = l.useState()[0], (At !== null ? At.memoizedState : null) !== l && (Xe.flags |= 1024), n;
  }
  function Yd() {
    var l = Xs !== 0;
    return Xs = 0, l;
  }
  function Kc(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ls(l) {
    if (Zc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zc = !1;
    }
    Tu = 0, hl = At = Xe = null, Jc = !1, af = Xs = 0, Fi = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return hl === null ? Xe.memoizedState = hl = l : hl = hl.next = l, hl;
  }
  function ol() {
    if (At === null) {
      var l = Xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = At.next;
    var n = hl === null ? Xe.memoizedState : hl.next;
    if (n !== null)
      hl = n, At = l;
    else {
      if (l === null)
        throw Xe.alternate === null ? Error(N(467)) : Error(N(310));
      At = l, l = {
        memoizedState: At.memoizedState,
        baseState: At.baseState,
        baseQueue: At.baseQueue,
        queue: At.queue,
        next: null
      }, hl === null ? Xe.memoizedState = hl = l : hl = hl.next = l;
    }
    return hl;
  }
  function Vs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $c(l) {
    var n = af;
    return af += 1, Fi === null && (Fi = []), l = ty(Fi, l, n), n = Xe, (hl === null ? n.memoizedState : hl.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? k0 : Wd), l;
  }
  function nf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $c(l);
      if (l.$$typeof === Bt) return K(l);
    }
    throw Error(N(438, String(l)));
  }
  function qd(l) {
    var n = null, u = Xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Xe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Vs(), Xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = se;
    return n.index++, u;
  }
  function Au(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Ou(l) {
    var n = ol();
    return jd(n, At, l);
  }
  function jd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(N(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, A = null, Y = n, Q = !1;
      do {
        var J = Y.lane & -536870913;
        if (J !== Y.lane ? (et & J) === J : (Tu & J) === J) {
          var q = Y.revertLane;
          if (q === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), J === Qi && (Q = !0);
          else if ((Tu & q) === q) {
            Y = Y.next, q === Qi && (Q = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, A === null ? (g = A = J, m = r) : A = A.next = J, Xe.lanes |= q, $n |= q;
          J = Y.action, fi && u(r, J), r = Y.hasEagerState ? Y.eagerState : u(r, J);
        } else
          q = {
            lane: J,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, A === null ? (g = A = q, m = r) : A = A.next = q, Xe.lanes |= J, $n |= J;
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if (A === null ? m = r : A.next = g, !la(r, l.memoizedState) && (ml = !0, Q && (u = gl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function xd(l) {
    var n = ol(), u = n.queue;
    if (u === null) throw Error(N(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      la(r, n.memoizedState) || (ml = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function uy(l, n, u) {
    var c = Xe, s = ol(), r = nt;
    if (r) {
      if (u === void 0) throw Error(N(407));
      u = u();
    } else u = n();
    var m = !la(
      (At || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ml = !0), s = s.queue, Ld(Gd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || hl !== null && hl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Wc(
        9,
        { destroy: void 0 },
        iy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ct === null) throw Error(N(349));
      r || (Tu & 127) !== 0 || Zs(c, n, u);
    }
    return u;
  }
  function Zs(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Xe.updateQueue, n === null ? (n = Vs(), Xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function iy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, wd(n) && Xd(l);
  }
  function Gd(l, n, u) {
    return u(function() {
      wd(n) && Xd(l);
    });
  }
  function wd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !la(l, u);
    } catch {
      return !0;
    }
  }
  function Xd(l) {
    var n = ti(l, 2);
    n !== null && Ta(n, l, 2);
  }
  function cy(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), fi) {
        Ga(!0);
        try {
          u();
        } finally {
          Ga(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Au,
      lastRenderedState: l
    }, n;
  }
  function jl(l, n, u, c) {
    return l.baseState = u, jd(
      l,
      At,
      typeof c == "function" ? c : Au
    );
  }
  function L0(l, n, u, c, s) {
    if (Ws(l)) throw Error(N(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      _.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, oy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function oy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = _.T, m = {};
      _.T = m;
      try {
        var g = u(s, c), A = _.S;
        A !== null && A(m, g), fy(l, n, g);
      } catch (Y) {
        kc(l, n, Y);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), _.T = r;
      }
    } else
      try {
        r = u(s, c), fy(l, n, r);
      } catch (Y) {
        kc(l, n, Y);
      }
  }
  function fy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        sy(l, n, c);
      },
      function(c) {
        return kc(l, n, c);
      }
    ) : sy(l, n, u);
  }
  function sy(l, n, u) {
    n.status = "fulfilled", n.value = u, ry(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, oy(l, u)));
  }
  function kc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ry(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ry(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Js(l, n) {
    return n;
  }
  function dy(l, n) {
    if (nt) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var c = Xe;
          if (nt) {
            if (jt) {
              t: {
                for (var s = jt, r = Ol; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Aa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                jt = Aa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            bn(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ql(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: n
    }, u.queue = c, u = $d.bind(
      null,
      Xe,
      c
    ), c.dispatch = u, c = cy(!1), r = Ii.bind(
      null,
      Xe,
      !1,
      c.queue
    ), c = ql(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = L0.bind(
      null,
      Xe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function V0(l) {
    var n = ol();
    return Ks(n, At, l);
  }
  function Ks(l, n, u) {
    if (n = jd(
      l,
      n,
      Js
    )[0], l = Ou(Au)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = $c(n);
      } catch (m) {
        throw m === Li ? Io : m;
      }
    else c = n;
    n = ol();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Xe.flags |= 2048, Wc(
      9,
      { destroy: void 0 },
      hy.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function hy(l, n) {
    l.action = n;
  }
  function my(l) {
    var n = ol(), u = At;
    if (u !== null)
      return Ks(n, u, l);
    ol(), n = n.memoizedState, u = ol();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Wc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Xe.updateQueue, n === null && (n = Vs(), Xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function yy() {
    return ol().memoizedState;
  }
  function uf(l, n, u, c) {
    var s = ql();
    Xe.flags |= l, s.memoizedState = Wc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function cf(l, n, u, c) {
    var s = ol();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    At !== null && c !== null && si(c, At.memoizedState.deps) ? s.memoizedState = Wc(n, r, u, c) : (Xe.flags |= l, s.memoizedState = Wc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Qd(l, n) {
    uf(8390656, 8, l, n);
  }
  function Ld(l, n) {
    cf(2048, 8, l, n);
  }
  function py(l) {
    Xe.flags |= 4;
    var n = Xe.updateQueue;
    if (n === null)
      n = Vs(), Xe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function $s(l) {
    var n = ol().memoizedState;
    return py({ ref: n, nextImpl: l }), function() {
      if ((yt & 2) !== 0) throw Error(N(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Vd(l, n) {
    return cf(4, 2, l, n);
  }
  function vy(l, n) {
    return cf(4, 4, l, n);
  }
  function Zd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function gy(l, n, u) {
    u = u != null ? u.concat([l]) : null, cf(4, 4, Zd.bind(null, n, l), u);
  }
  function Ln() {
  }
  function Jd(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && si(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Z0(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && si(n, c[1]))
      return c[0];
    if (c = l(), fi) {
      Ga(!0);
      try {
        l();
      } finally {
        Ga(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function ks(l, n, u) {
    return u === void 0 || (Tu & 1073741824) !== 0 && (et & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = iv(), Xe.lanes |= l, $n |= l, u);
  }
  function zu(l, n, u, c) {
    return la(u, n) ? u : zl.current !== null ? (l = ks(l, u, c), la(l, n) || (ml = !0), l) : (Tu & 42) === 0 || (Tu & 1073741824) !== 0 && (et & 261930) === 0 ? (ml = !0, l.memoizedState = u) : (l = iv(), Xe.lanes |= l, $n |= l, n);
  }
  function Kd(l, n, u, c, s) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var m = _.T, g = {};
    _.T = g, Ii(l, !1, n, u);
    try {
      var A = s(), Y = _.S;
      if (Y !== null && Y(g, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var Q = qs(
          A,
          c
        );
        ri(
          l,
          n,
          Q,
          Ua(l)
        );
      } else
        ri(
          l,
          n,
          c,
          Ua(l)
        );
    } catch (J) {
      ri(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: J },
        Ua()
      );
    } finally {
      L.p = r, m !== null && g.types !== null && (m.types = g.types), _.T = m;
    }
  }
  function J0() {
  }
  function of(l, n, u, c) {
    if (l.tag !== 5) throw Error(N(476));
    var s = ff(l).queue;
    Kd(
      l,
      s,
      n,
      P,
      u === null ? J0 : function() {
        return Mt(l), u(c);
      }
    );
  }
  function ff(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Au,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Au,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Mt(l) {
    var n = ff(l);
    n.next === null && (n = l.alternate.memoizedState), ri(
      l,
      n.next.queue,
      {},
      Ua()
    );
  }
  function Sy() {
    return K(Or);
  }
  function K0() {
    return ol().memoizedState;
  }
  function by() {
    return ol().memoizedState;
  }
  function Du(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ua();
          l = oi(u);
          var c = ka(n, l, u);
          c !== null && (Ta(c, n, u), $i(c, n, u)), n = { cache: Hs() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function $0(l, n, u) {
    var c = Ua();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ws(l) ? kd(n, u) : (u = gn(l, n, u, c), u !== null && (Ta(u, l, c), Ey(u, n, c)));
  }
  function $d(l, n, u) {
    var c = Ua();
    ri(l, n, u, c);
  }
  function ri(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ws(l)) kd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, la(g, m))
            return Va(l, n, s, 0), Ct === null && La(), !1;
        } catch {
        } finally {
        }
      if (u = gn(l, n, s, c), u !== null)
        return Ta(u, l, c), Ey(u, n, c), !0;
    }
    return !1;
  }
  function Ii(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Eh(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ws(l)) {
      if (n) throw Error(N(479));
    } else
      n = gn(
        l,
        u,
        c,
        2
      ), n !== null && Ta(n, l, 2);
  }
  function Ws(l) {
    var n = l.alternate;
    return l === Xe || n !== null && n === Xe;
  }
  function kd(l, n) {
    Jc = Zc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ey(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cu(l, u);
    }
  }
  var Fs = {
    readContext: K,
    use: nf,
    useCallback: tl,
    useContext: tl,
    useEffect: tl,
    useImperativeHandle: tl,
    useLayoutEffect: tl,
    useInsertionEffect: tl,
    useMemo: tl,
    useReducer: tl,
    useRef: tl,
    useState: tl,
    useDebugValue: tl,
    useDeferredValue: tl,
    useTransition: tl,
    useSyncExternalStore: tl,
    useId: tl,
    useHostTransitionStatus: tl,
    useFormState: tl,
    useActionState: tl,
    useOptimistic: tl,
    useMemoCache: tl,
    useCacheRefresh: tl
  };
  Fs.useEffectEvent = tl;
  var k0 = {
    readContext: K,
    use: nf,
    useCallback: function(l, n) {
      return ql().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: K,
    useEffect: Qd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, uf(
        4194308,
        4,
        Zd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return uf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      uf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ql();
      n = n === void 0 ? null : n;
      var c = l();
      if (fi) {
        Ga(!0);
        try {
          l();
        } finally {
          Ga(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ql();
      if (u !== void 0) {
        var s = u(n);
        if (fi) {
          Ga(!0);
          try {
            u(n);
          } finally {
            Ga(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = $0.bind(
        null,
        Xe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ql();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = cy(l);
      var n = l.queue, u = $d.bind(null, Xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ql();
      return ks(u, l, n);
    },
    useTransition: function() {
      var l = cy(!1);
      return l = Kd.bind(
        null,
        Xe,
        l.queue,
        !0,
        !1
      ), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Xe, s = ql();
      if (nt) {
        if (u === void 0)
          throw Error(N(407));
        u = u();
      } else {
        if (u = n(), Ct === null)
          throw Error(N(349));
        (et & 127) !== 0 || Zs(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Qd(Gd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Wc(
        9,
        { destroy: void 0 },
        iy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = ql(), n = Ct.identifierPrefix;
      if (nt) {
        var u = Gn, c = _a;
        u = (c & ~(1 << 32 - Ul(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Xs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = X0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Sy,
    useFormState: dy,
    useActionState: dy,
    useOptimistic: function(l) {
      var n = ql();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Ii.bind(
        null,
        Xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: qd,
    useCacheRefresh: function() {
      return ql().memoizedState = Du.bind(
        null,
        Xe
      );
    },
    useEffectEvent: function(l) {
      var n = ql(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((yt & 2) !== 0)
          throw Error(N(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Wd = {
    readContext: K,
    use: nf,
    useCallback: Jd,
    useContext: K,
    useEffect: Ld,
    useImperativeHandle: gy,
    useInsertionEffect: Vd,
    useLayoutEffect: vy,
    useMemo: Z0,
    useReducer: Ou,
    useRef: yy,
    useState: function() {
      return Ou(Au);
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ol();
      return zu(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Ou(Au)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : $c(l),
        n
      ];
    },
    useSyncExternalStore: uy,
    useId: K0,
    useHostTransitionStatus: Sy,
    useFormState: V0,
    useActionState: V0,
    useOptimistic: function(l, n) {
      var u = ol();
      return jl(u, At, l, n);
    },
    useMemoCache: qd,
    useCacheRefresh: by
  };
  Wd.useEffectEvent = $s;
  var W0 = {
    readContext: K,
    use: nf,
    useCallback: Jd,
    useContext: K,
    useEffect: Ld,
    useImperativeHandle: gy,
    useInsertionEffect: Vd,
    useLayoutEffect: vy,
    useMemo: Z0,
    useReducer: xd,
    useRef: yy,
    useState: function() {
      return xd(Au);
    },
    useDebugValue: Ln,
    useDeferredValue: function(l, n) {
      var u = ol();
      return At === null ? ks(u, l, n) : zu(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = xd(Au)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : $c(l),
        n
      ];
    },
    useSyncExternalStore: uy,
    useId: K0,
    useHostTransitionStatus: Sy,
    useFormState: my,
    useActionState: my,
    useOptimistic: function(l, n) {
      var u = ol();
      return At !== null ? jl(u, At, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: qd,
    useCacheRefresh: by
  };
  W0.useEffectEvent = $s;
  function Fc(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : X({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var En = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), s = oi(c);
      s.payload = n, u != null && (s.callback = u), n = ka(l, s, c), n !== null && (Ta(n, l, c), $i(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), s = oi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = ka(l, s, c), n !== null && (Ta(n, l, c), $i(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ua(), c = oi(u);
      c.tag = 2, n != null && (c.callback = n), n = ka(l, c, u), n !== null && (Ta(n, l, u), $i(n, l, u));
    }
  };
  function Ty(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !yn(u, c) || !yn(s, r) : !0;
  }
  function F0(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && En.enqueueReplaceState(n, n.state, null);
  }
  function Pi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = X({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Fd(l) {
    Yc(l);
  }
  function Ay(l) {
    console.error(l);
  }
  function Id(l) {
    Yc(l);
  }
  function sf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Is(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Oy(l, n, u) {
    return u = oi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      sf(l, n);
    }, u;
  }
  function zy(l) {
    return l = oi(l), l.tag = 3, l;
  }
  function Dy(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Is(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Is(n, u, c), typeof s != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function eS(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Yl(
        n,
        u,
        s,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Wa === null ? vh() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Qc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), dr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Qc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), dr(l, c, s)), !1;
        }
        throw Error(N(435, u.tag));
      }
      return dr(l, c, s), vh(), !1;
    }
    if (nt)
      return n = ya.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== vu && (l = Error(N(422), { cause: c }), Wo(Za(l, u)))) : (c !== vu && (n = Error(N(423), {
        cause: c
      }), Wo(
        Za(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Za(c, u), s = Oy(
        l.stateNode,
        c,
        s
      ), Ud(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(N(520), { cause: c });
    if (r = Za(r, u), or === null ? or = [r] : or.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    c = Za(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Oy(u.stateNode, c, l), Ud(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = zy(s), Dy(
              s,
              l,
              u,
              c
            ), Ud(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Pd = Error(N(461)), ml = !1;
  function Vt(l, n, u, c) {
    n.child = l === null ? ay(n, null, u, c) : Ki(
      n,
      l.child,
      u,
      c
    );
  }
  function _y(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return Ne(n), c = Qs(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = Yd(), l !== null && !ml ? (Kc(l, n, s), Pa(l, n, s)) : (nt && g && $o(n), n.flags |= 1, Vt(l, n, c, s), n.child);
  }
  function Ry(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !qc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, My(
        l,
        n,
        r,
        c,
        s
      )) : (l = Od(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !lh(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : yn, u(m, c) && l.ref === n.ref)
        return Pa(l, n, s);
    }
    return n.flags |= 1, l = li(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function My(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (yn(r, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = r, lh(l, s))
          (l.flags & 131072) !== 0 && (ml = !0);
        else
          return n.lanes = l.lanes, Pa(l, n, s);
    }
    return eh(
      l,
      n,
      u,
      c,
      s
    );
  }
  function I0(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return va(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Fo(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? w0(n, r) : ws(), Nd(n);
      else
        return c = n.lanes = 536870912, va(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Fo(n, r.cachePool), w0(n, r), Qn(), n.memoizedState = null) : (l !== null && Fo(n, null), ws(), Qn());
    return Vt(l, n, s, u), n.child;
  }
  function ec(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function va(l, n, u, c, s) {
    var r = $a();
    return r = r === null ? null : { parent: dl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Fo(n, null), ws(), Nd(n), l !== null && Yl(l, n, c, !0), n.childLanes = s, null;
  }
  function Ps(l, n) {
    return n = lr(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function ga(l, n, u) {
    return Ki(n, l.child, null, u), l = Ps(n, n.pendingProps), l.flags |= 2, pa(n), n.memoizedState = null, l;
  }
  function P0(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (nt) {
        if (c.mode === "hidden")
          return l = Ps(n, c), n.lanes = 536870912, ec(null, l);
        if (tf(n), (l = jt) ? (l = Bv(
          l,
          Ol
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: xn !== null ? { id: _a, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = $m(l), u.return = n, n.child = u, Bl = n, jt = null)) : l = null, l === null) throw bn(n);
        return n.lanes = 536870912, null;
      }
      return Ps(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (tf(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = ga(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(N(558));
      else if (ml || Yl(l, n, u, !1), s = (u & l.childLanes) !== 0, ml || s) {
        if (c = Ct, c !== null && (m = wa(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ti(l, m), Ta(c, l, m), Pd;
        vh(), n = ga(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, jt = Aa(m.nextSibling), Bl = n, nt = !0, pu = null, Ol = !1, l !== null && Ms(n, l), n = Ps(n, c), n.flags |= 4096;
      return n;
    }
    return l = li(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Fa(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(N(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function eh(l, n, u, c, s) {
    return Ne(n), u = Qs(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Yd(), l !== null && !ml ? (Kc(l, n, s), Pa(l, n, s)) : (nt && c && $o(n), n.flags |= 1, Vt(l, n, u, s), n.child);
  }
  function tc(l, n, u, c, s, r) {
    return Ne(n), n.updateQueue = null, u = Q0(
      n,
      c,
      u,
      s
    ), Bd(l), c = Yd(), l !== null && !ml ? (Kc(l, n, r), Pa(l, n, r)) : (nt && c && $o(n), n.flags |= 1, Vt(l, n, u, r), n.child);
  }
  function Cy(l, n, u, c, s) {
    if (Ne(n), n.stateNode === null) {
      var r = da, m = u.contextType;
      typeof m == "object" && m !== null && (r = K(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = En, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Gs(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? K(m) : da, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Fc(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && En.enqueueReplaceState(r, r.state, null), bu(n, c, r, s), ki(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, A = Pi(u, g);
      r.props = A;
      var Y = r.context, Q = u.contextType;
      m = da, typeof Q == "object" && Q !== null && (m = K(Q));
      var J = u.getDerivedStateFromProps;
      Q = typeof J == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || Y !== m) && F0(
        n,
        r,
        c,
        m
      ), ci = !1;
      var q = n.memoizedState;
      r.state = q, bu(n, c, r, s), ki(), Y = n.memoizedState, g || q !== Y || ci ? (typeof J == "function" && (Fc(
        n,
        u,
        J,
        c
      ), Y = n.memoizedState), (A = ci || Ty(
        n,
        u,
        A,
        c,
        q,
        Y,
        m
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = Y), r.props = c, r.state = Y, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Cd(l, n), m = n.memoizedProps, Q = Pi(u, m), r.props = Q, J = n.pendingProps, q = r.context, Y = u.contextType, A = da, typeof Y == "object" && Y !== null && (A = K(Y)), g = u.getDerivedStateFromProps, (Y = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== J || q !== A) && F0(
        n,
        r,
        c,
        A
      ), ci = !1, q = n.memoizedState, r.state = q, bu(n, c, r, s), ki();
      var w = n.memoizedState;
      m !== J || q !== w || ci || l !== null && l.dependencies !== null && xc(l.dependencies) ? (typeof g == "function" && (Fc(
        n,
        u,
        g,
        c
      ), w = n.memoizedState), (Q = ci || Ty(
        n,
        u,
        Q,
        c,
        q,
        w,
        A
      ) || l !== null && l.dependencies !== null && xc(l.dependencies)) ? (Y || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, w, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        w,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && q === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && q === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), r.props = c, r.state = w, r.context = A, c = Q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && q === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && q === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Fa(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Ki(
      n,
      l.child,
      null,
      s
    ), n.child = Ki(
      n,
      null,
      u,
      s
    )) : Vt(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Pa(
      l,
      n,
      s
    ), l;
  }
  function Vn(l, n, u, c) {
    return Xi(), n.flags |= 256, Vt(l, n, u, c), n.child;
  }
  var er = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tr(l) {
    return { baseLanes: l, cachePool: wc() };
  }
  function Ia(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ea), l;
  }
  function Uy(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : ($t.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (nt) {
        if (s ? Eu(n) : Qn(), (l = jt) ? (l = Bv(
          l,
          Ol
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: xn !== null ? { id: _a, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = $m(l), u.return = n, n.child = u, Bl = n, jt = null)) : l = null, l === null) throw bn(n);
        return oc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (Qn(), s = n.mode, g = lr(
        { mode: "hidden", children: g },
        s
      ), c = ai(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = tr(u), c.childLanes = Ia(
        l,
        m,
        u
      ), n.memoizedState = er, ec(null, c)) : (Eu(n), lc(n, g));
    }
    var A = l.memoizedState;
    if (A !== null && (g = A.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (Eu(n), n.flags &= -257, n = Ic(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Qn(), n.child = l.child, n.flags |= 128, n = null) : (Qn(), g = c.fallback, s = n.mode, c = lr(
          { mode: "visible", children: c.children },
          s
        ), g = ai(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, Ki(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = tr(u), c.childLanes = Ia(
          l,
          m,
          u
        ), n.memoizedState = er, n = ec(null, c));
      else if (Eu(n), oc(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var Y = m.dgst;
        m = Y, c = Error(N(419)), c.stack = "", c.digest = m, Wo({ value: c, source: null, stack: null }), n = Ic(
          l,
          n,
          u
        );
      } else if (ml || Yl(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Ct, m !== null && (c = wa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, ti(l, c), Ta(m, l, c), Pd;
        On(g) || vh(), n = Ic(
          l,
          n,
          u
        );
      } else
        On(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, jt = Aa(
          g.nextSibling
        ), Bl = n, nt = !0, pu = null, Ol = !1, l !== null && Ms(n, l), n = lc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Qn(), g = c.fallback, s = n.mode, A = l.child, Y = A.sibling, c = li(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, Y !== null ? g = li(
      Y,
      g
    ) : (g = ai(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, ec(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = tr(u) : (s = g.cachePool, s !== null ? (A = dl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = wc(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = Ia(
      l,
      m,
      u
    ), n.memoizedState = er, ec(l.child, c)) : (Eu(n), u = l.child, l = u.sibling, u = li(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function lc(l, n) {
    return n = lr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function lr(l, n) {
    return l = il(22, l, null, n), l.lanes = 0, l;
  }
  function Ic(l, n, u) {
    return Ki(n, l.child, null, u), l = lc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Pc(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Rd(l.return, n, u);
  }
  function th(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Hy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = $t.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, F($t, m), Vt(l, n, c, u), c = nt ? rl : 0, !g && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Pc(l, u, n);
        else if (l.tag === 19)
          Pc(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && lf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), th(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && lf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        th(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        th(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Pa(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), $n |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Yl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(N(153));
    if (n.child !== null) {
      for (l = n.child, u = li(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = li(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function lh(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && xc(l)));
  }
  function ah(l, n, u) {
    switch (n.tag) {
      case 3:
        Lt(n, n.stateNode.containerInfo), ma(n, dl, l.memoizedState.cache), Xi();
        break;
      case 27:
      case 5:
        ja(n);
        break;
      case 4:
        Lt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ma(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, tf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Eu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Uy(l, n, u) : (Eu(n), l = Pa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Eu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Yl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Hy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F($t, $t.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, I0(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ma(n, dl, l.memoizedState.cache);
    }
    return Pa(l, n, u);
  }
  function Ny(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!lh(l, u) && (n.flags & 128) === 0)
          return ml = !1, ah(
            l,
            n,
            u
          );
        ml = (l.flags & 131072) !== 0;
      }
    else
      ml = !1, nt && (n.flags & 1048576) !== 0 && Wm(n, rl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = Vi(n.elementType), n.type = l, typeof l == "function")
            qc(l) ? (c = Pi(l, c), n.tag = 1, n = Cy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = eh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Jt) {
                n.tag = 11, n = _y(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === ze) {
                n.tag = 14, n = Ry(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Qt(l) || l, Error(N(306, n, ""));
          }
        }
        return n;
      case 0:
        return eh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = Pi(
          c,
          n.pendingProps
        ), Cy(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Lt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(N(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Cd(l, n), bu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ma(n, dl, c), c !== r.cache && Su(
            n,
            [dl],
            u,
            !0
          ), ki(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Vn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Za(
                Error(N(424)),
                n
              ), Wo(s), n = Vn(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (jt = Aa(l.firstChild), Bl = n, nt = !0, pu = null, Ol = !0, u = ay(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Xi(), c === s) {
              n = Pa(
                l,
                n,
                u
              );
              break e;
            }
            Vt(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Fa(l, n), l === null ? (u = Hf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : nt || (u = n.type, l = n.pendingProps, c = cc(
          xe.current
        ).createElement(u), c[Rt] = n, c[fa] = l, $l(c, u, l), Et(c), n.stateNode = c) : n.memoizedState = Hf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ja(n), l === null && nt && (c = n.stateNode = Cf(
          n.type,
          n.pendingProps,
          xe.current
        ), Bl = n, Ol = !0, s = jt, Wn(n.type) ? (Er = s, jt = Aa(c.firstChild)) : jt = s), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), Fa(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && nt && ((s = c = jt) && (c = aS(
          c,
          n.type,
          n.pendingProps,
          Ol
        ), c !== null ? (n.stateNode = c, Bl = n, jt = Aa(c.firstChild), Ol = !1, s = !0) : s = !1), s || bn(n)), ja(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Rf(s, r) ? c = null : m !== null && Rf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Qs(
          l,
          n,
          Pg,
          null,
          null,
          u
        ), Or._currentValue = s), Fa(l, n), Vt(l, n, c, u), n.child;
      case 6:
        return l === null && nt && ((l = u = jt) && (u = ke(
          u,
          n.pendingProps,
          Ol
        ), u !== null ? (n.stateNode = u, Bl = n, jt = null, l = !0) : l = !1), l || bn(n)), null;
      case 13:
        return Uy(l, n, u);
      case 4:
        return Lt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Ki(
          n,
          null,
          c,
          u
        ) : Vt(l, n, c, u), n.child;
      case 11:
        return _y(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Vt(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ma(n, n.type, c.value), Vt(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ne(n), s = K(s), c = c(s), n.flags |= 1, Vt(l, n, c, u), n.child;
      case 14:
        return Ry(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return My(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Hy(l, n, u);
      case 31:
        return P0(l, n, u);
      case 22:
        return I0(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Ne(n), c = K(dl), l === null ? (s = $a(), s === null && (s = Ct, r = Hs(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, Gs(n), ma(n, dl, s)) : ((l.lanes & u) !== 0 && (Cd(l, n), bu(n, null, null, u), ki()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ma(n, dl, c)) : (c = r.cache, ma(n, dl, c), c !== s.cache && Su(
          n,
          [dl],
          u,
          !0
        ))), Vt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(N(156, n.tag));
  }
  function _u(l) {
    l.flags |= 4;
  }
  function By(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (fv()) l.flags |= 8192;
        else
          throw Zi = Qc, Xc;
    } else l.flags &= -16777217;
  }
  function Yy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Na(n))
      if (fv()) l.flags |= 8192;
      else
        throw Zi = Qc, Xc;
  }
  function aa(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ea() : 536870912, l.lanes |= n, ll |= n);
  }
  function rf(l, n) {
    if (!nt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ue(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function ev(l, n, u) {
    var c = n.pendingProps;
    switch (Dd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(n), null;
      case 1:
        return Ue(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Xn(dl), ht(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (gu(n) ? _u(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Fm())), Ue(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (_u(n), r !== null ? (Ue(n), Yy(n, r)) : (Ue(n), By(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (_u(n), Ue(n), Yy(n, r)) : (Ue(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && _u(n), Ue(n), By(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (ce(n), u = xe.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && _u(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(N(166));
            return Ue(n), null;
          }
          l = W.current, gu(n) ? Cs(n) : (l = Cf(s, c, u), n.stateNode = l, _u(n));
        }
        return Ue(n), null;
      case 5:
        if (ce(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && _u(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(N(166));
            return Ue(n), null;
          }
          if (r = W.current, gu(n))
            Cs(n);
          else {
            var m = cc(
              xe.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Rt] = n, r[fa] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch ($l(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && _u(n);
          }
        }
        return Ue(n), By(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && _u(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(N(166));
          if (l = xe.current, gu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Bl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Rt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || up(l.nodeValue, u)), l || bn(n, !0);
          } else
            l = cc(l).createTextNode(
              c
            ), l[Rt] = n, n.stateNode = l;
        }
        return Ue(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = gu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(N(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(557));
              l[Rt] = n;
            } else
              Xi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), l = !1;
          } else
            u = Fm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(N(558));
        }
        return Ue(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = gu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(N(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
              s[Rt] = n;
            } else
              Xi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), s = !1;
          } else
            s = Fm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
        }
        return pa(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), aa(n, n.updateQueue), Ue(n), null);
      case 4:
        return ht(), l === null && _f(n.stateNode.containerInfo), Ue(n), null;
      case 10:
        return Xn(n.type), Ue(n), null;
      case 19:
        if (B($t), c = n.memoizedState, c === null) return Ue(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) rf(c, !1);
          else {
            if (Gt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = lf(l), r !== null) {
                  for (n.flags |= 128, rf(c, !1), l = r.updateQueue, n.updateQueue = l, aa(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Km(u, l), u = u.sibling;
                  return F(
                    $t,
                    $t.current & 1 | 2
                  ), nt && Sn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && vl() > St && (n.flags |= 128, s = !0, rf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = lf(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, aa(n, l), rf(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !nt)
                return Ue(n), null;
            } else
              2 * vl() - c.renderingStartTime > St && u !== 536870912 && (n.flags |= 128, s = !0, rf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = vl(), l.sibling = null, u = $t.current, F(
          $t,
          s ? u & 1 | 2 : u & 1
        ), nt && Sn(n, c.treeForkCount), l) : (Ue(n), null);
      case 22:
      case 23:
        return pa(n), ef(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ue(n), u = n.updateQueue, u !== null && aa(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && B(Ka), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Xn(dl), Ue(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(N(156, n.tag));
  }
  function tv(l, n) {
    switch (Dd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Xn(dl), ht(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ce(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (pa(n), n.alternate === null)
            throw Error(N(340));
          Xi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (pa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(N(340));
          Xi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B($t), null;
      case 4:
        return ht(), null;
      case 10:
        return Xn(n.type), null;
      case 22:
      case 23:
        return pa(n), ef(), l !== null && B(Ka), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Xn(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lv(l, n) {
    switch (Dd(n), n.tag) {
      case 3:
        Xn(dl), ht();
        break;
      case 26:
      case 27:
      case 5:
        ce(n);
        break;
      case 4:
        ht();
        break;
      case 31:
        n.memoizedState !== null && pa(n);
        break;
      case 13:
        pa(n);
        break;
      case 19:
        B($t);
        break;
      case 10:
        Xn(n.type);
        break;
      case 22:
      case 23:
        pa(n), ef(), l !== null && B(Ka);
        break;
      case 24:
        Xn(dl);
    }
  }
  function Tn(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      zt(n, n.return, g);
    }
  }
  function en(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, Y = g;
              try {
                Y();
              } catch (Q) {
                zt(
                  s,
                  A,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (Q) {
      zt(n, n.return, Q);
    }
  }
  function nh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Wi(n, u);
      } catch (c) {
        zt(l, l.return, c);
      }
    }
  }
  function ac(l, n, u) {
    u.props = Pi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      zt(l, n, c);
    }
  }
  function Ru(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      zt(l, n, s);
    }
  }
  function Zn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          zt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          zt(l, n, s);
        }
      else u.current = null;
  }
  function qy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function uh(l, n, u) {
    try {
      var c = l.stateNode;
      cp(c, l.type, u, n), c[fa] = n;
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function jy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Wn(l.type) || l.tag === 4;
  }
  function df(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || jy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Wn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Un));
    else if (c !== 4 && (c === 27 && Wn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (hf(l, n, u), l = l.sibling; l !== null; )
        hf(l, n, u), l = l.sibling;
  }
  function mf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Wn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (mf(l, n, u), l = l.sibling; l !== null; )
        mf(l, n, u), l = l.sibling;
  }
  function xy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, c, u), n[Rt] = l, n[fa] = u;
    } catch (r) {
      zt(l, l.return, r);
    }
  }
  var di = !1, Sl = !1, ih = !1, Gy = typeof WeakSet == "function" ? WeakSet : Set, xl = null;
  function yf(l, n) {
    if (l = l.containerInfo, Dh = _l, l = xi(l), As(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, g = -1, A = -1, Y = 0, Q = 0, J = l, q = null;
            t: for (; ; ) {
              for (var w; J !== u || s !== 0 && J.nodeType !== 3 || (g = m + s), J !== r || c !== 0 && J.nodeType !== 3 || (A = m + c), J.nodeType === 3 && (m += J.nodeValue.length), (w = J.firstChild) !== null; )
                q = J, J = w;
              for (; ; ) {
                if (J === l) break t;
                if (q === u && ++Y === s && (g = m), q === r && ++Q === c && (A = m), (w = J.nextSibling) !== null) break;
                J = q, q = J.parentNode;
              }
              J = w;
            }
            u = g === -1 || A === -1 ? null : { start: g, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (_h = { focusedElem: l, selectionRange: u }, _l = !1, xl = n; xl !== null; )
      if (n = xl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, xl = l;
      else
        for (; xl !== null; ) {
          switch (n = xl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var fe = Pi(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    fe,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Oe) {
                  zt(
                    u,
                    u.return,
                    Oe
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  br(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      br(l);
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
              if ((l & 1024) !== 0) throw Error(N(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, xl = l;
            break;
          }
          xl = n.return;
        }
  }
  function ar(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        hi(l, u), c & 4 && Tn(5, u);
        break;
      case 1:
        if (hi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              zt(u, u.return, m);
            }
          else {
            var s = Pi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              zt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && nh(u), c & 512 && Ru(u, u.return);
        break;
      case 3:
        if (hi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Wi(l, n);
          } catch (m) {
            zt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && xy(u);
      case 26:
      case 5:
        hi(l, u), n === null && c & 4 && qy(u), c & 512 && Ru(u, u.return);
        break;
      case 12:
        hi(l, u);
        break;
      case 31:
        hi(l, u), c & 4 && av(l, u);
        break;
      case 13:
        hi(l, u), c & 4 && Qy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = tn.bind(
          null,
          u
        ), Mf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || di, !c) {
          n = n !== null && n.memoizedState !== null || Sl, s = di;
          var r = Sl;
          di = c, (Sl = n) && !r ? Jn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : hi(l, u), di = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        hi(l, u);
    }
  }
  function wy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, wy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ld(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var xt = null, Sa = !1;
  function Mu(l, n, u) {
    for (u = u.child; u !== null; )
      Xy(l, n, u), u = u.sibling;
  }
  function Xy(l, n, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(rn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Zn(u, n), Mu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Zn(u, n);
        var c = xt, s = Sa;
        Wn(u.type) && (xt = u.stateNode, Sa = !1), Mu(
          l,
          n,
          u
        ), co(u.stateNode), xt = c, Sa = s;
        break;
      case 5:
        Sl || Zn(u, n);
      case 6:
        if (c = xt, s = Sa, xt = null, Mu(
          l,
          n,
          u
        ), xt = c, Sa = s, xt !== null)
          if (Sa)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
          else
            try {
              xt.removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        xt !== null && (Sa ? (l = xt, rp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), wf(l)) : rp(xt, u.stateNode));
        break;
      case 4:
        c = xt, s = Sa, xt = u.stateNode.containerInfo, Sa = !0, Mu(
          l,
          n,
          u
        ), xt = c, Sa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        en(2, u, n), Sl || en(4, u, n), Mu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Zn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && ac(
          u,
          n,
          c
        )), Mu(
          l,
          n,
          u
        );
        break;
      case 21:
        Mu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, Mu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        Mu(
          l,
          n,
          u
        );
    }
  }
  function av(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        wf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
    }
  }
  function Qy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        wf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
  }
  function nr(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Gy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Gy()), n;
      default:
        throw Error(N(435, l.tag));
    }
  }
  function ur(l, n) {
    var u = nr(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Ov.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Wn(g.type)) {
                xt = g.stateNode, Sa = !1;
                break e;
              }
              break;
            case 5:
              xt = g.stateNode, Sa = !1;
              break e;
            case 3:
            case 4:
              xt = g.stateNode.containerInfo, Sa = !0;
              break e;
          }
          g = g.return;
        }
        if (xt === null) throw Error(N(160));
        Xy(r, m, s), xt = null, Sa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        ch(n, l), n = n.sibling;
  }
  var Ze = null;
  function ch(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), Ra(l), c & 4 && (en(3, l, l.return), Tn(3, l), en(5, l, l.return));
        break;
      case 1:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), c & 64 && di && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Ze;
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ou] || r[Rt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), $l(r, c, u), r[Rt] = l, Et(r), c = r;
                      break e;
                    case "link":
                      var m = yp(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = yp(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(N(468, c));
                  }
                  r[Rt] = l, Et(r), c = r;
                }
                l.stateNode = c;
              } else
                Hh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = mp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Hh(
              s,
              l.type,
              l.stateNode
            ) : mp(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && uh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), u !== null && c & 4 && uh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Zn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            su(s, "");
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, uh(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ih = !0);
        break;
      case 6:
        if (ba(n, l), Ra(l), c & 4) {
          if (l.stateNode === null)
            throw Error(N(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        break;
      case 3:
        if (Yf = null, s = Ze, Ze = na(n.containerInfo), ba(n, l), Ze = s, Ra(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            wf(n.containerInfo);
          } catch (fe) {
            zt(l, l.return, fe);
          }
        ih && (ih = !1, Ly(l));
        break;
      case 4:
        c = Ze, Ze = na(
          l.stateNode.containerInfo
        ), ba(n, l), Ra(l), Ze = c;
        break;
      case 12:
        ba(n, l), Ra(l);
        break;
      case 31:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ur(l, c)));
        break;
      case 13:
        ba(n, l), Ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (kn = vl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ur(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, Y = di, Q = Sl;
        if (di = Y || s, Sl = Q || A, ba(n, l), Sl = Q, di = Y, Ra(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || di || Sl || eo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = A.stateNode;
                    var J = A.memoizedProps.style, q = J != null && J.hasOwnProperty("display") ? J.display : null;
                    g.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var w = A.stateNode;
                  s ? yl(w, !0) : yl(A.stateNode, !1);
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ur(l, u))));
        break;
      case 19:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ur(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ba(n, l), Ra(l);
    }
  }
  function Ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (jy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(N(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = df(l);
            mf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (su(m, ""), u.flags &= -33);
            var g = df(l);
            mf(l, g, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, Y = df(l);
            hf(
              l,
              Y,
              A
            );
            break;
          default:
            throw Error(N(161));
        }
      } catch (Q) {
        zt(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Ly(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Ly(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function hi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        ar(l, n.alternate, n), n = n.sibling;
  }
  function eo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          en(4, n, n.return), eo(n);
          break;
        case 1:
          Zn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ac(
            n,
            n.return,
            u
          ), eo(n);
          break;
        case 27:
          co(n.stateNode);
        case 26:
        case 5:
          Zn(n, n.return), eo(n);
          break;
        case 22:
          n.memoizedState === null && eo(n);
          break;
        case 30:
          eo(n);
          break;
        default:
          eo(n);
      }
      l = l.sibling;
    }
  }
  function Jn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            s,
            r,
            u
          ), Tn(4, r);
          break;
        case 1:
          if (Jn(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (Y) {
              zt(c, c.return, Y);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Hd(A[s], g);
            } catch (Y) {
              zt(c, c.return, Y);
            }
          }
          u && m & 64 && nh(r), Ru(r, r.return);
          break;
        case 27:
          xy(r);
        case 26:
        case 5:
          Jn(
            s,
            r,
            u
          ), u && c === null && m & 4 && qy(r), Ru(r, r.return);
          break;
        case 12:
          Jn(
            s,
            r,
            u
          );
          break;
        case 31:
          Jn(
            s,
            r,
            u
          ), u && m & 4 && av(s, r);
          break;
        case 13:
          Jn(
            s,
            r,
            u
          ), u && m & 4 && Qy(s, r);
          break;
        case 22:
          r.memoizedState === null && Jn(
            s,
            r,
            u
          ), Ru(r, r.return);
          break;
        case 30:
          break;
        default:
          Jn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function oh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ns(u));
  }
  function fh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Ns(l));
  }
  function An(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        pf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function pf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && Tn(9, n);
        break;
      case 1:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Ns(l)));
        break;
      case 12:
        if (s & 2048) {
          An(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            zt(n, n.return, A);
          }
        } else
          An(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        An(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? An(
          l,
          n,
          u,
          c
        ) : ir(l, n) : r._visibility & 2 ? An(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, vf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && oh(m, n);
        break;
      case 24:
        An(
          l,
          n,
          u,
          c
        ), s & 2048 && fh(n.alternate, n);
        break;
      default:
        An(
          l,
          n,
          u,
          c
        );
    }
  }
  function vf(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, A = c, Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          vf(
            r,
            m,
            g,
            A,
            s
          ), Tn(8, m);
          break;
        case 23:
          break;
        case 22:
          var Q = m.stateNode;
          m.memoizedState !== null ? Q._visibility & 2 ? vf(
            r,
            m,
            g,
            A,
            s
          ) : ir(
            r,
            m
          ) : (Q._visibility |= 2, vf(
            r,
            m,
            g,
            A,
            s
          )), s && Y & 2048 && oh(
            m.alternate,
            m
          );
          break;
        case 24:
          vf(
            r,
            m,
            g,
            A,
            s
          ), s && Y & 2048 && fh(m.alternate, m);
          break;
        default:
          vf(
            r,
            m,
            g,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function ir(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            ir(u, c), s & 2048 && oh(
              c.alternate,
              c
            );
            break;
          case 24:
            ir(u, c), s & 2048 && fh(c.alternate, c);
            break;
          default:
            ir(u, c);
        }
        n = n.sibling;
      }
  }
  var Ma = 8192;
  function Cu(l, n, u) {
    if (l.subtreeFlags & Ma)
      for (l = l.child; l !== null; )
        nv(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function nv(l, n, u) {
    switch (l.tag) {
      case 26:
        Cu(
          l,
          n,
          u
        ), l.flags & Ma && l.memoizedState !== null && Yu(
          u,
          Ze,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Cu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Ze;
        Ze = na(l.stateNode.containerInfo), Cu(
          l,
          n,
          u
        ), Ze = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ma, Ma = 16777216, Cu(
          l,
          n,
          u
        ), Ma = c) : Cu(
          l,
          n,
          u
        ));
        break;
      default:
        Cu(
          l,
          n,
          u
        );
    }
  }
  function sh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function gf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          xl = c, rh(
            c,
            l
          );
        }
      sh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Vy(l), l = l.sibling;
  }
  function Vy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        gf(l), l.flags & 2048 && en(9, l, l.return);
        break;
      case 3:
        gf(l);
        break;
      case 12:
        gf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, cr(l)) : gf(l);
        break;
      default:
        gf(l);
    }
  }
  function cr(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          xl = c, rh(
            c,
            l
          );
        }
      sh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          en(8, n, n.return), cr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, cr(n));
          break;
        default:
          cr(n);
      }
      l = l.sibling;
    }
  }
  function rh(l, n) {
    for (; xl !== null; ) {
      var u = xl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          en(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Ns(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, xl = c;
      else
        e: for (u = l; xl !== null; ) {
          c = xl;
          var s = c.sibling, r = c.return;
          if (wy(c), c === u) {
            xl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, xl = s;
            break e;
          }
          xl = r;
        }
    }
  }
  var uv = {
    getCacheForType: function(l) {
      var n = K(dl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return K(dl).controller.signal;
    }
  }, Zy = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, Ct = null, ut = null, et = 0, Ot = 0, Re = null, Uu = !1, nc = !1, dh = !1, Kn = 0, Gt = 0, $n = 0, to = 0, hh = 0, Ea = 0, ll = 0, or = null, al = null, mh = !1, kn = 0, Jy = 0, St = 1 / 0, Sf = null, kt = null, Dl = 0, mi = null, uc = null, Hu = 0, Ca = 0, yh = null, ph = null, bf = 0, fr = null;
  function Ua() {
    return (yt & 2) !== 0 && et !== 0 ? et & -et : _.T !== null ? Eh() : ed();
  }
  function iv() {
    if (Ea === 0)
      if ((et & 536870912) === 0 || nt) {
        var l = te;
        te <<= 1, (te & 3932160) === 0 && (te = 262144), Ea = l;
      } else Ea = 536870912;
    return l = ya.current, l !== null && (l.flags |= 32), Ea;
  }
  function Ta(l, n, u) {
    (l === Ct && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null) && (Nu(l, 0), yi(
      l,
      et,
      Ea,
      !1
    )), Ci(l, u), ((yt & 2) === 0 || l !== Ct) && (l === Ct && ((yt & 2) === 0 && (to |= u), Gt === 4 && yi(
      l,
      et,
      Ea,
      !1
    )), Bu(l));
  }
  function cv(l, n, u) {
    if ((yt & 6) !== 0) throw Error(N(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Pe(l, n), s = c ? dv(l, n) : gh(l, n, !0), r = c;
    do {
      if (s === 0) {
        nc && !c && yi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !ov(u)) {
          s = gh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var g = l;
              s = or;
              var A = g.current.memoizedState.isDehydrated;
              if (A && (Nu(g, m).flags |= 256), m = gh(
                g,
                m,
                !1
              ), m !== 2) {
                if (dh && !A) {
                  g.errorRecoveryDisabledLanes |= r, to |= r, s = 4;
                  break e;
                }
                r = al, al = s, r !== null && (al === null ? al = r : al.push.apply(
                  al,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Nu(l, 0), yi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(N(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              yi(
                c,
                n,
                Ea,
                !Uu
              );
              break e;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(N(329));
          }
          if ((n & 62914560) === n && (s = kn + 300 - vl(), 10 < s)) {
            if (yi(
              c,
              n,
              Ea,
              !Uu
            ), he(c, 0, !0) !== 0) break e;
            Hu = n, c.timeoutHandle = Sr(
              sr.bind(
                null,
                c,
                u,
                al,
                Sf,
                mh,
                n,
                Ea,
                to,
                ll,
                Uu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          sr(
            c,
            u,
            al,
            Sf,
            mh,
            n,
            Ea,
            to,
            ll,
            Uu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bu(l);
  }
  function sr(l, n, u, c, s, r, m, g, A, Y, Q, J, q, w) {
    if (l.timeoutHandle = -1, J = n.subtreeFlags, J & 8192 || (J & 16785408) === 16785408) {
      J = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Un
      }, nv(
        n,
        r,
        J
      );
      var fe = (r & 62914560) === r ? kn - vl() : (r & 4194048) === r ? Jy - vl() : 0;
      if (fe = vp(
        J,
        fe
      ), fe !== null) {
        Hu = r, l.cancelPendingCommit = fe(
          pv.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            g,
            A,
            Q,
            J,
            null,
            q,
            w
          )
        ), yi(l, r, m, !Y);
        return;
      }
    }
    pv(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      g,
      A
    );
  }
  function ov(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!la(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function yi(l, n, u, c) {
    n &= ~hh, n &= ~to, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ul(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && ds(l, u, n);
  }
  function Ef() {
    return (yt & 6) === 0 ? (vi(0), !1) : !0;
  }
  function Ky() {
    if (ut !== null) {
      if (Ot === 0)
        var l = ut.return;
      else
        l = ut, wn = ni = null, Ls(l), Ji = null, Lc = 0, l = ut;
      for (; l !== null; )
        lv(l.alternate, l), l = l.return;
      ut = null;
    }
  }
  function Nu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Hv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Hu = 0, Ky(), Ct = l, ut = u = li(l.current, null), et = n, Ot = 0, Re = null, Uu = !1, nc = Pe(l, n), dh = !1, ll = Ea = hh = to = $n = Gt = 0, al = or = null, mh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ul(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Kn = n, La(), u;
  }
  function Tf(l, n) {
    Xe = null, _.H = Fs, n === Li || n === Io ? (n = ly(), Ot = 3) : n === Xc ? (n = ly(), Ot = 4) : Ot = n === Pd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Re = n, ut === null && (Gt = 1, sf(
      l,
      Za(n, l.current)
    ));
  }
  function fv() {
    var l = ya.current;
    return l === null ? !0 : (et & 4194048) === et ? Wa === null : (et & 62914560) === et || (et & 536870912) !== 0 ? l === Wa : !1;
  }
  function sv() {
    var l = _.H;
    return _.H = Fs, l === null ? Fs : l;
  }
  function rv() {
    var l = _.A;
    return _.A = uv, l;
  }
  function vh() {
    Gt = 4, Uu || (et & 4194048) !== et && ya.current !== null || (nc = !0), ($n & 134217727) === 0 && (to & 134217727) === 0 || Ct === null || yi(
      Ct,
      et,
      Ea,
      !1
    );
  }
  function gh(l, n, u) {
    var c = yt;
    yt |= 2;
    var s = sv(), r = rv();
    (Ct !== l || et !== n) && (Sf = null, Nu(l, n)), n = !1;
    var m = Gt;
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          var g = ut, A = Re;
          switch (Ot) {
            case 8:
              Ky(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (n = !0);
              var Y = Ot;
              if (Ot = 0, Re = null, lo(l, g, A, Y), u && nc) {
                m = 0;
                break e;
              }
              break;
            default:
              Y = Ot, Ot = 0, Re = null, lo(l, g, A, Y);
          }
        }
        tS(), m = Gt;
        break;
      } catch (Q) {
        Tf(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, wn = ni = null, yt = c, _.H = s, _.A = r, ut === null && (Ct = null, et = 0, La()), m;
  }
  function tS() {
    for (; ut !== null; ) hv(ut);
  }
  function dv(l, n) {
    var u = yt;
    yt |= 2;
    var c = sv(), s = rv();
    Ct !== l || et !== n ? (Sf = null, St = vl() + 500, Nu(l, n)) : nc = Pe(
      l,
      n
    );
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          n = ut;
          var r = Re;
          t: switch (Ot) {
            case 1:
              Ot = 0, Re = null, lo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ey(r)) {
                Ot = 0, Re = null, mv(n);
                break;
              }
              n = function() {
                Ot !== 2 && Ot !== 9 || Ct !== l || (Ot = 7), Bu(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ot = 7;
              break e;
            case 4:
              Ot = 5;
              break e;
            case 7:
              ey(r) ? (Ot = 0, Re = null, mv(n)) : (Ot = 0, Re = null, lo(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ut.tag) {
                case 26:
                  m = ut.memoizedState;
                case 5:
                case 27:
                  var g = ut;
                  if (m ? Na(m) : g.stateNode.complete) {
                    Ot = 0, Re = null;
                    var A = g.sibling;
                    if (A !== null) ut = A;
                    else {
                      var Y = g.return;
                      Y !== null ? (ut = Y, rr(Y)) : ut = null;
                    }
                    break t;
                  }
              }
              Ot = 0, Re = null, lo(l, n, r, 5);
              break;
            case 6:
              Ot = 0, Re = null, lo(l, n, r, 6);
              break;
            case 8:
              Ky(), Gt = 6;
              break e;
            default:
              throw Error(N(462));
          }
        }
        ic();
        break;
      } catch (Q) {
        Tf(l, Q);
      }
    while (!0);
    return wn = ni = null, _.H = c, _.A = s, yt = u, ut !== null ? 0 : (Ct = null, et = 0, La(), Gt);
  }
  function ic() {
    for (; ut !== null && !iu(); )
      hv(ut);
  }
  function hv(l) {
    var n = Ny(l.alternate, l, Kn);
    l.memoizedProps = l.pendingProps, n === null ? rr(l) : ut = n;
  }
  function mv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = tc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = tc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        Ls(n);
      default:
        lv(u, n), n = ut = Km(n, Kn), n = Ny(u, n, Kn);
    }
    l.memoizedProps = l.pendingProps, n === null ? rr(l) : ut = n;
  }
  function lo(l, n, u, c) {
    wn = ni = null, Ls(n), Ji = null, Lc = 0;
    var s = n.return;
    try {
      if (eS(
        l,
        s,
        n,
        u,
        et
      )) {
        Gt = 1, sf(
          l,
          Za(u, l.current)
        ), ut = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ut = s, r;
      Gt = 1, sf(
        l,
        Za(u, l.current)
      ), ut = null;
      return;
    }
    n.flags & 32768 ? (nt || c === 1 ? l = !0 : nc || (et & 536870912) !== 0 ? l = !1 : (Uu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ya.current, c !== null && c.tag === 13 && (c.flags |= 16384))), yv(n, l)) : rr(n);
  }
  function rr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        yv(
          n,
          Uu
        );
        return;
      }
      l = n.return;
      var u = ev(
        n.alternate,
        n,
        Kn
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ut = n;
        return;
      }
      ut = n = l;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function yv(l, n) {
    do {
      var u = tv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ut = l;
        return;
      }
      ut = l = u;
    } while (l !== null);
    Gt = 6, ut = null;
  }
  function pv(l, n, u, c, s, r, m, g, A) {
    l.cancelPendingCommit = null;
    do
      Af();
    while (Dl !== 0);
    if ((yt & 6) !== 0) throw Error(N(327));
    if (n !== null) {
      if (n === l.current) throw Error(N(177));
      if (r = n.lanes | n.childLanes, r |= vn, Ho(
        l,
        u,
        r,
        m,
        g,
        A
      ), l === Ct && (ut = Ct = null, et = 0), uc = n, mi = l, Hu = u, Ca = r, yh = s, ph = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, zv(Mn, function() {
        return Ev(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = _.T, _.T = null, s = L.p, L.p = 2, m = yt, yt |= 4;
        try {
          yf(l, n, u);
        } finally {
          yt = m, L.p = s, _.T = c;
        }
      }
      Dl = 1, vv(), gv(), Sv();
    }
  }
  function vv() {
    if (Dl === 1) {
      Dl = 0;
      var l = mi, n = uc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null;
        var c = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          ch(n, l);
          var r = _h, m = xi(l.containerInfo), g = r.focusedElem, A = r.selectionRange;
          if (m !== g && g && g.ownerDocument && Nc(
            g.ownerDocument.documentElement,
            g
          )) {
            if (A !== null && As(g)) {
              var Y = A.start, Q = A.end;
              if (Q === void 0 && (Q = Y), "selectionStart" in g)
                g.selectionStart = Y, g.selectionEnd = Math.min(
                  Q,
                  g.value.length
                );
              else {
                var J = g.ownerDocument || document, q = J && J.defaultView || window;
                if (q.getSelection) {
                  var w = q.getSelection(), fe = g.textContent.length, Oe = Math.min(A.start, fe), Ht = A.end === void 0 ? Oe : Math.min(A.end, fe);
                  !w.extend && Oe > Ht && (m = Ht, Ht = Oe, Oe = m);
                  var C = Zm(
                    g,
                    Oe
                  ), D = Zm(
                    g,
                    Ht
                  );
                  if (C && D && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== D.node || w.focusOffset !== D.offset)) {
                    var H = J.createRange();
                    H.setStart(C.node, C.offset), w.removeAllRanges(), Oe > Ht ? (w.addRange(H), w.extend(D.node, D.offset)) : (H.setEnd(D.node, D.offset), w.addRange(H));
                  }
                }
              }
            }
            for (J = [], w = g; w = w.parentNode; )
              w.nodeType === 1 && J.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < J.length; g++) {
              var Z = J[g];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          _l = !!Dh, _h = Dh = null;
        } finally {
          yt = s, L.p = c, _.T = u;
        }
      }
      l.current = n, Dl = 2;
    }
  }
  function gv() {
    if (Dl === 2) {
      Dl = 0;
      var l = mi, n = uc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var c = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          ar(l, n.alternate, n);
        } finally {
          yt = s, L.p = c, _.T = u;
        }
      }
      Dl = 3;
    }
  }
  function Sv() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, gc();
      var l = mi, n = uc, u = Hu, c = ph;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dl = 5 : (Dl = 0, uc = mi = null, bv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (kt = null), Sm(u), n = n.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            rn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = _.T, s = L.p, L.p = 2, _.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          _.T = n, L.p = s;
        }
      }
      (Hu & 3) !== 0 && Af(), Bu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === fr ? bf++ : (bf = 0, fr = l) : bf = 0, vi(0);
    }
  }
  function bv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Ns(n)));
  }
  function Af() {
    return vv(), gv(), Sv(), Ev();
  }
  function Ev() {
    if (Dl !== 5) return !1;
    var l = mi, n = Ca;
    Ca = 0;
    var u = Sm(Hu), c = _.T, s = L.p;
    try {
      L.p = 32 > u ? 32 : u, _.T = null, u = yh, yh = null;
      var r = mi, m = Hu;
      if (Dl = 0, uc = mi = null, Hu = 0, (yt & 6) !== 0) throw Error(N(331));
      var g = yt;
      if (yt |= 4, Vy(r.current), pf(
        r,
        r.current,
        m,
        u
      ), yt = g, vi(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(rn, r);
        } catch {
        }
      return !0;
    } finally {
      L.p = s, _.T = c, bv(l, n);
    }
  }
  function Tv(l, n, u) {
    n = Za(u, n), n = Oy(l.stateNode, n, 2), l = ka(l, n, 2), l !== null && (Ci(l, 2), Bu(l));
  }
  function zt(l, n, u) {
    if (l.tag === 3)
      Tv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Tv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (kt === null || !kt.has(c))) {
            l = Za(u, l), u = zy(2), c = ka(n, u, 2), c !== null && (Dy(
              u,
              c,
              n,
              l
            ), Ci(c, 2), Bu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function dr(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Zy();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (dh = !0, s.add(u), l = $y.bind(null, l, n, u), n.then(l, l));
  }
  function $y(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ct === l && (et & u) === u && (Gt === 4 || Gt === 3 && (et & 62914560) === et && 300 > vl() - kn ? (yt & 2) === 0 && Nu(l, 0) : hh |= u, ll === et && (ll = 0)), Bu(l);
  }
  function Av(l, n) {
    n === 0 && (n = ea()), l = ti(l, n), l !== null && (Ci(l, n), Bu(l));
  }
  function tn(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Av(l, u);
  }
  function Ov(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(N(314));
    }
    c !== null && c.delete(n), Av(l, u);
  }
  function zv(l, n) {
    return re(l, n);
  }
  var Of = null, ao = null, ky = !1, Sh = !1, Wy = !1, pi = 0;
  function Bu(l) {
    l !== ao && l.next === null && (ao === null ? Of = ao = l : ao = ao.next = l), Sh = !0, ky || (ky = !0, mr());
  }
  function vi(l, n) {
    if (!Wy && Sh) {
      Wy = !0;
      do
        for (var u = !1, c = Of; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Ul(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, no(c, r));
          } else
            r = et, r = he(
              c,
              c === Ct ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || Pe(c, r) || (u = !0, no(c, r));
          c = c.next;
        }
      while (u);
      Wy = !1;
    }
  }
  function bh() {
    Fy();
  }
  function Fy() {
    Sh = ky = !1;
    var l = 0;
    pi !== 0 && lS() && (l = pi);
    for (var n = vl(), u = null, c = Of; c !== null; ) {
      var s = c.next, r = Iy(c, n);
      r === 0 ? (c.next = null, u === null ? Of = s : u.next = s, s === null && (ao = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Sh = !0)), c = s;
    }
    Dl !== 0 && Dl !== 5 || vi(l), pi !== 0 && (pi = 0);
  }
  function Iy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ul(r), g = 1 << m, A = s[m];
      A === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = Ge(g, n)) : A <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Ct, u = et, u = he(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ri(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Pe(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ri(c), Sm(u)) {
        case 2:
        case 8:
          u = Co;
          break;
        case 32:
          u = Mn;
          break;
        case 268435456:
          u = Uo;
          break;
        default:
          u = Mn;
      }
      return c = hr.bind(null, l), u = re(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ri(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function hr(l, n) {
    if (Dl !== 0 && Dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Af() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = he(
      l,
      l === Ct ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (cv(l, c, n), Iy(l, vl()), l.callbackNode != null && l.callbackNode === u ? hr.bind(null, l) : null);
  }
  function no(l, n) {
    if (Af()) return null;
    cv(l, n, !0);
  }
  function mr() {
    Nv(function() {
      (yt & 6) !== 0 ? re(
        Mo,
        bh
      ) : Fy();
    });
  }
  function Eh() {
    if (pi === 0) {
      var l = Qi;
      l === 0 && (l = I, I <<= 1, (I & 261888) === 0 && (I = 256)), pi = l;
    }
    return pi;
  }
  function Dv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : hn("" + l);
  }
  function uo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function yr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Dv(
        (s[fa] || null).action
      ), m = c.submitter;
      m && (n = (n = m[fa] || null) ? Dv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new bs(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (pi !== 0) {
                  var A = m ? uo(s, m) : new FormData(s);
                  of(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), A = m ? uo(s, m) : new FormData(s), of(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Th = 0; Th < Jo.length; Th++) {
    var zf = Jo[Th], Py = zf.toLowerCase(), ep = zf[0].toUpperCase() + zf.slice(1);
    ra(
      Py,
      "on" + ep
    );
  }
  ra(zs, "onAnimationEnd"), ra(Jm, "onAnimationIteration"), ra(Td, "onAnimationStart"), ra("dblclick", "onDoubleClick"), ra("focusin", "onFocus"), ra("focusout", "onBlur"), ra(Bc, "onTransitionRun"), ra(Ds, "onTransitionStart"), ra(mu, "onTransitionCancel"), ra(j0, "onTransitionEnd"), fu("onMouseEnter", ["mouseout", "mouseover"]), fu("onMouseLeave", ["mouseout", "mouseover"]), fu("onPointerEnter", ["pointerout", "pointerover"]), fu("onPointerLeave", ["pointerout", "pointerover"]), Ni(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ni(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ni("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ni(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ni(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ni(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Df = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), _v = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Df)
  );
  function Rv(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], A = g.instance, Y = g.currentTarget;
            if (g = g.listener, A !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = Y;
            try {
              r(s);
            } catch (Q) {
              Yc(Q);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], A = g.instance, Y = g.currentTarget, g = g.listener, A !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = Y;
            try {
              r(s);
            } catch (Q) {
              Yc(Q);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function at(l, n) {
    var u = n[td];
    u === void 0 && (u = n[td] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (pr(n, l, 2, !1), u.add(c));
  }
  function tp(l, n, u) {
    var c = 0;
    n && (c |= 4), pr(
      u,
      l,
      c,
      n
    );
  }
  var Ah = "_reactListening" + Math.random().toString(36).slice(2);
  function _f(l) {
    if (!l[Ah]) {
      l[Ah] = !0, Ac.forEach(function(u) {
        u !== "selectionchange" && (_v.has(u) || tp(u, !1, l), tp(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ah] || (n[Ah] = !0, tp("selectionchange", !1, n));
    }
  }
  function pr(l, n, u, c) {
    switch (zr(n)) {
      case 2:
        var s = qu;
        break;
      case 8:
        s = ju;
        break;
      default:
        s = kl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !gs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function lp(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = bc(g), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    Rm(function() {
      var Y = r, Q = fd(u), J = [];
      e: {
        var q = yu.get(l);
        if (q !== void 0) {
          var w = bs, fe = l;
          switch (l) {
            case "keypress":
              if (rd(u) === 0) break e;
            case "keydown":
            case "keyup":
              w = yd;
              break;
            case "focusin":
              fe = "focus", w = hd;
              break;
            case "focusout":
              fe = "blur", w = hd;
              break;
            case "beforeblur":
            case "afterblur":
              w = hd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Xo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = z0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = C0;
              break;
            case zs:
            case Jm:
            case Td:
              w = _0;
              break;
            case j0:
              w = Wg;
              break;
            case "scroll":
            case "scrollend":
              w = $g;
              break;
            case "wheel":
              w = Fg;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Bn;
              break;
            case "toggle":
            case "beforetoggle":
              w = jm;
          }
          var Oe = (n & 4) !== 0, Ht = !Oe && (l === "scroll" || l === "scrollend"), C = Oe ? q !== null ? q + "Capture" : null : q;
          Oe = [];
          for (var D = Y, H; D !== null; ) {
            var Z = D;
            if (H = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || H === null || C === null || (Z = Hl(D, C), Z != null && Oe.push(
              vr(D, Z, H)
            )), Ht) break;
            D = D.return;
          }
          0 < Oe.length && (q = new w(
            q,
            fe,
            null,
            u,
            Q
          ), J.push({ event: q, listeners: Oe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (q = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", q && u !== od && (fe = u.relatedTarget || u.fromElement) && (bc(fe) || fe[Ui]))
            break e;
          if ((w || q) && (q = Q.window === Q ? Q : (q = Q.ownerDocument) ? q.defaultView || q.parentWindow : window, w ? (fe = u.relatedTarget || u.toElement, w = Y, fe = fe ? bc(fe) : null, fe !== null && (Ht = je(fe), Oe = fe.tag, fe !== Ht || Oe !== 5 && Oe !== 27 && Oe !== 6) && (fe = null)) : (w = null, fe = Y), w !== fe)) {
            if (Oe = Xo, Z = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (Oe = Bn, Z = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = w == null ? q : No(w), H = fe == null ? q : No(fe), q = new Oe(
              Z,
              D + "leave",
              w,
              u,
              Q
            ), q.target = Ht, q.relatedTarget = H, Z = null, bc(Q) === Y && (Oe = new Oe(
              C,
              D + "enter",
              fe,
              u,
              Q
            ), Oe.target = H, Oe.relatedTarget = Ht, Z = Oe), Ht = Z, w && fe)
              t: {
                for (Oe = Mv, C = w, D = fe, H = 0, Z = C; Z; Z = Oe(Z))
                  H++;
                Z = 0;
                for (var Se = D; Se; Se = Oe(Se))
                  Z++;
                for (; 0 < H - Z; )
                  C = Oe(C), H--;
                for (; 0 < Z - H; )
                  D = Oe(D), Z--;
                for (; H--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    Oe = C;
                    break t;
                  }
                  C = Oe(C), D = Oe(D);
                }
                Oe = null;
              }
            else Oe = null;
            w !== null && Oh(
              J,
              q,
              w,
              Oe,
              !1
            ), fe !== null && Ht !== null && Oh(
              J,
              Ht,
              fe,
              Oe,
              !0
            );
          }
        }
        e: {
          if (q = Y ? No(Y) : window, w = q.nodeName && q.nodeName.toLowerCase(), w === "select" || w === "input" && q.type === "file")
            var rt = Qm;
          else if (hu(q))
            if (gd)
              rt = Hc;
            else {
              rt = Y0;
              var me = B0;
            }
          else
            w = q.nodeName, !w || w.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? Y && _m(Y.elementType) && (rt = Qm) : rt = ji;
          if (rt && (rt = rt(l, Y))) {
            Xm(
              J,
              rt,
              u,
              Q
            );
            break e;
          }
          me && me(l, q, Y), l === "focusout" && Y && q.type === "number" && Y.memoizedProps.value != null && Oc(q, "number", q.value);
        }
        switch (me = Y ? No(Y) : window, l) {
          case "focusin":
            (hu(me) || me.contentEditable === "true") && (Gi = me, Vo = Y, pn = null);
            break;
          case "focusout":
            pn = Vo = Gi = null;
            break;
          case "mousedown":
            qn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qn = !1, Ed(J, u, Q);
            break;
          case "selectionchange":
            if (Os) break;
          case "keydown":
          case "keyup":
            Ed(J, u, Q);
        }
        var we;
        if (Qo)
          e: {
            switch (l) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          Mc ? vd(l, u) && (Je = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Je = "onCompositionStart");
        Je && (xm && u.locale !== "ko" && (Mc || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Mc && (we = Cm()) : (Pu = Q, Mm = "value" in Pu ? Pu.value : Pu.textContent, Mc = !0)), me = gr(Y, Je), 0 < me.length && (Je = new R0(
          Je,
          l,
          null,
          u,
          Q
        ), J.push({ event: Je, listeners: me }), we ? Je.data = we : (we = Gm(u), we !== null && (Je.data = we)))), (we = ta ? N0(l, u) : Ig(l, u)) && (Je = gr(Y, "onBeforeInput"), 0 < Je.length && (me = new R0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), J.push({
          event: me,
          listeners: Je
        }), me.data = we)), yr(
          J,
          l,
          Y,
          u,
          Q
        );
      }
      Rv(J, n);
    });
  }
  function vr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function gr(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Hl(l, u), s != null && c.unshift(
        vr(l, s, r)
      ), s = Hl(l, n), s != null && c.push(
        vr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Mv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Oh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, A = g.alternate, Y = g.stateNode;
      if (g = g.tag, A !== null && A === c) break;
      g !== 5 && g !== 26 && g !== 27 || Y === null || (A = Y, s ? (Y = Hl(u, r), Y != null && m.unshift(
        vr(u, Y, A)
      )) : s || (Y = Hl(u, r), Y != null && m.push(
        vr(u, Y, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Cv = /\r\n?/g, ap = /\u0000|\uFFFD/g;
  function np(l) {
    return (typeof l == "string" ? l : "" + l).replace(Cv, `
`).replace(ap, "");
  }
  function up(l, n) {
    return n = np(n), np(l) === n;
  }
  function Ut(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || su(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && su(l, "" + c);
        break;
      case "className":
        ud(l, "class", c);
        break;
      case "tabIndex":
        ud(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ud(l, u, c);
        break;
      case "style":
        T0(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          ud(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = hn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ut(l, n, "name", s.name, s, null), Ut(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(l, n, "encType", s.encType, s, null), Ut(l, n, "method", s.method, s, null), Ut(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = hn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Un);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(N(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(N(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = hn("" + c), l.setAttributeNS(
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        at("beforetoggle", l), at("toggle", l), qo(l, "popover", c);
        break;
      case "xlinkActuate":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Fu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Fu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        qo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Kg.get(u) || u, qo(l, u, c));
    }
  }
  function ip(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        T0(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(N(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(N(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? su(l, c) : (typeof c == "number" || typeof c == "bigint") && su(l, "" + c);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Un);
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
        if (!Hi.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[fa] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : qo(l, u, c);
          }
    }
  }
  function $l(l, n, u) {
    switch (n) {
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
        at("error", l), at("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(N(137, n));
                default:
                  Ut(l, n, r, m, u, null);
              }
          }
        s && Ut(l, n, "srcSet", u.srcSet, u, null), c && Ut(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var g = r = m = s = null, A = null, Y = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  s = Q;
                  break;
                case "type":
                  m = Q;
                  break;
                case "checked":
                  A = Q;
                  break;
                case "defaultChecked":
                  Y = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  g = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(N(137, n));
                  break;
                default:
                  Ut(l, n, c, Q, u, null);
              }
          }
        ys(
          l,
          r,
          g,
          A,
          Y,
          m,
          s,
          !1
        );
        return;
      case "select":
        at("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                Ut(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? jo(l, !!c, n, !1) : u != null && jo(l, !!c, u, !0);
        return;
      case "textarea":
        at("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(N(91));
                break;
              default:
                Ut(l, n, m, g, u, null);
            }
        Dm(l, c, s, r);
        return;
      case "option":
        for (A in u)
          if (u.hasOwnProperty(A) && (c = u[A], c != null))
            switch (A) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ut(l, n, A, c, u, null);
            }
        return;
      case "dialog":
        at("beforetoggle", l), at("toggle", l), at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Df.length; c++)
          at(Df[c], l);
        break;
      case "image":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", l), at("load", l);
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
        for (Y in u)
          if (u.hasOwnProperty(Y) && (c = u[Y], c != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(N(137, n));
              default:
                Ut(l, n, Y, c, u, null);
            }
        return;
      default:
        if (_m(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && ip(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && Ut(l, n, g, c, u, null));
  }
  function cp(l, n, u, c) {
    switch (n) {
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
        var s = null, r = null, m = null, g = null, A = null, Y = null, Q = null;
        for (w in u) {
          var J = u[w];
          if (u.hasOwnProperty(w) && J != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = J;
              default:
                c.hasOwnProperty(w) || Ut(l, n, w, null, c, J);
            }
        }
        for (var q in c) {
          var w = c[q];
          if (J = u[q], c.hasOwnProperty(q) && (w != null || J != null))
            switch (q) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                Y = w;
                break;
              case "defaultChecked":
                Q = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                g = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(N(137, n));
                break;
              default:
                w !== J && Ut(
                  l,
                  n,
                  q,
                  w,
                  c,
                  J
                );
            }
        }
        ms(
          l,
          m,
          g,
          A,
          Y,
          Q,
          r,
          s
        );
        return;
      case "select":
        w = m = g = q = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                w = A;
              default:
                c.hasOwnProperty(r) || Ut(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                q = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Ut(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = g, u = m, c = w, q != null ? jo(l, !!u, q, !1) : !!c != !!u && (n != null ? jo(l, !!u, n, !0) : jo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = q = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                q = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(N(91));
                break;
              default:
                s !== r && Ut(l, n, m, s, c, r);
            }
        zm(l, q, w);
        return;
      case "option":
        for (var fe in u)
          if (q = u[fe], u.hasOwnProperty(fe) && q != null && !c.hasOwnProperty(fe))
            switch (fe) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ut(
                  l,
                  n,
                  fe,
                  null,
                  c,
                  q
                );
            }
        for (A in c)
          if (q = c[A], w = u[A], c.hasOwnProperty(A) && q !== w && (q != null || w != null))
            switch (A) {
              case "selected":
                l.selected = q && typeof q != "function" && typeof q != "symbol";
                break;
              default:
                Ut(
                  l,
                  n,
                  A,
                  q,
                  c,
                  w
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
        for (var Oe in u)
          q = u[Oe], u.hasOwnProperty(Oe) && q != null && !c.hasOwnProperty(Oe) && Ut(l, n, Oe, null, c, q);
        for (Y in c)
          if (q = c[Y], w = u[Y], c.hasOwnProperty(Y) && q !== w && (q != null || w != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(N(137, n));
                break;
              default:
                Ut(
                  l,
                  n,
                  Y,
                  q,
                  c,
                  w
                );
            }
        return;
      default:
        if (_m(n)) {
          for (var Ht in u)
            q = u[Ht], u.hasOwnProperty(Ht) && q !== void 0 && !c.hasOwnProperty(Ht) && ip(
              l,
              n,
              Ht,
              void 0,
              c,
              q
            );
          for (Q in c)
            q = c[Q], w = u[Q], !c.hasOwnProperty(Q) || q === w || q === void 0 && w === void 0 || ip(
              l,
              n,
              Q,
              q,
              c,
              w
            );
          return;
        }
    }
    for (var C in u)
      q = u[C], u.hasOwnProperty(C) && q != null && !c.hasOwnProperty(C) && Ut(l, n, C, null, c, q);
    for (J in c)
      q = c[J], w = u[J], !c.hasOwnProperty(J) || q === w || q == null && w == null || Ut(l, n, J, q, c, w);
  }
  function zh(l) {
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
  function op() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && zh(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], Y = A.startTime;
            if (Y > g) break;
            var Q = A.transferSize, J = A.initiatorType;
            Q && zh(J) && (A = A.responseEnd, m += Q * (A < g ? 1 : (g - Y) / (A - Y)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Dh = null, _h = null;
  function cc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Uv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fp(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Rf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Rh = null;
  function lS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Rh ? !1 : (Rh = l, !0) : (Rh = null, !1);
  }
  var Sr = typeof setTimeout == "function" ? setTimeout : void 0, Hv = typeof clearTimeout == "function" ? clearTimeout : void 0, io = typeof Promise == "function" ? Promise : void 0, Nv = typeof queueMicrotask == "function" ? queueMicrotask : typeof io < "u" ? function(l) {
    return io.resolve(null).then(l).catch(sp);
  } : Sr;
  function sp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Wn(l) {
    return l === "head";
  }
  function rp(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), wf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          co(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, co(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[ou] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && co(l.ownerDocument.body);
      u = s;
    } while (u);
    wf(n);
  }
  function yl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function br(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          br(u), ld(u);
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
  function aS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ou])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Aa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function ke(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Bv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function On(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function oc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Mf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Aa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Er = null;
  function Mh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Aa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Fn(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Cf(l, n, u) {
    switch (n = cc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(N(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(N(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(N(454));
        return l;
      default:
        throw Error(N(451));
    }
  }
  function co(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ld(l);
  }
  var Ha = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Set();
  function na(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var In = L.d;
  L.d = {
    f: nS,
    r: Yv,
    D: G,
    C: bt,
    L: uS,
    m: dp,
    X: gi,
    S: hp,
    M: fc
  };
  function nS() {
    var l = In.f(), n = Ef();
    return l || n;
  }
  function Yv(l) {
    var n = Ec(l);
    n !== null && n.tag === 5 && n.type === "form" ? Mt(n) : In.r(l);
  }
  var Uf = typeof document > "u" ? null : document;
  function bl(l, n, u) {
    var c = Uf;
    if (c && typeof n == "string" && n) {
      var s = Qa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Tr.has(s) || (Tr.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), $l(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function G(l) {
    In.D(l), bl("dns-prefetch", l, null);
  }
  function bt(l, n) {
    In.C(l, n), bl("preconnect", l, n);
  }
  function uS(l, n, u) {
    In.L(l, n, u);
    var c = Uf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Qa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Qa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Qa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Qa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = ln(l);
          break;
        case "script":
          r = oo(l);
      }
      Ha.has(r) || (l = X(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ha.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(sc(r)) || n === "script" && c.querySelector(Bf(r)) || (n = c.createElement("link"), $l(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function dp(l, n) {
    In.m(l, n);
    var u = Uf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Qa(c) + '"][href="' + Qa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = oo(l);
      }
      if (!Ha.has(r) && (l = X({ rel: "modulepreload", href: l }, n), Ha.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Bf(r)))
              return;
        }
        c = u.createElement("link"), $l(c, "link", l), Et(c), u.head.appendChild(c);
      }
    }
  }
  function hp(l, n, u) {
    In.S(l, n, u);
    var c = Uf;
    if (c && l) {
      var s = Tc(c).hoistableStyles, r = ln(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          sc(r)
        ))
          g.loading = 5;
        else {
          l = X(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ha.get(r)) && Ch(l, u);
          var A = m = c.createElement("link");
          Et(A), $l(A, "link", l), A._p = new Promise(function(Y, Q) {
            A.onload = Y, A.onerror = Q;
          }), A.addEventListener("load", function() {
            g.loading |= 1;
          }), A.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Ar(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function gi(l, n) {
    In.X(l, n);
    var u = Uf;
    if (u && l) {
      var c = Tc(u).hoistableScripts, s = oo(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = X({ src: l, async: !0 }, n), (n = Ha.get(s)) && Uh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function fc(l, n) {
    In.M(l, n);
    var u = Uf;
    if (u && l) {
      var c = Tc(u).hoistableScripts, s = oo(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = X({ src: l, async: !0, type: "module" }, n), (n = Ha.get(s)) && Uh(l, n), r = u.createElement("script"), Et(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Hf(l, n, u, c) {
    var s = (s = xe.current) ? na(s) : null;
    if (!s) throw Error(N(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = ln(u.href), u = Tc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ln(u.href);
          var r = Tc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            sc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Ha.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ha.set(l, u), r || qv(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(N(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(N(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = oo(u), u = Tc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(N(444, l));
    }
  }
  function ln(l) {
    return 'href="' + Qa(l) + '"';
  }
  function sc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Nf(l) {
    return X({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function qv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Et(n), l.head.appendChild(n));
  }
  function oo(l) {
    return '[src="' + Qa(l) + '"]';
  }
  function Bf(l) {
    return "script[async]" + l;
  }
  function mp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Qa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Et(c), c;
          var s = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Et(c), $l(c, "style", s), Ar(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = ln(u.href);
          var r = l.querySelector(
            sc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Et(r), r;
          c = Nf(u), (s = Ha.get(s)) && Ch(c, s), r = (l.ownerDocument || l).createElement("link"), Et(r);
          var m = r;
          return m._p = new Promise(function(g, A) {
            m.onload = g, m.onerror = A;
          }), $l(r, "link", c), n.state.loading |= 4, Ar(r, u.precedence, l), n.instance = r;
        case "script":
          return r = oo(u.src), (s = l.querySelector(
            Bf(r)
          )) ? (n.instance = s, Et(s), s) : (c = u, (s = Ha.get(r)) && (c = X({}, u), Uh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Et(s), $l(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(N(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Ar(c, u.precedence, l));
    return n.instance;
  }
  function Ar(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Ch(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Uh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Yf = null;
  function yp(l, n, u) {
    if (Yf === null) {
      var c = /* @__PURE__ */ new Map(), s = Yf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Yf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ou] || r[Rt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Hh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function pp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Na(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = ln(c.href), r = n.querySelector(
          sc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Nh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Et(r);
          return;
        }
        r = n.ownerDocument || n, c = Nf(c), (s = Ha.get(s)) && Ch(c, s), r = r.createElement("link"), Et(r);
        var m = r;
        m._p = new Promise(function(g, A) {
          m.onload = g, m.onerror = A;
        }), $l(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Nh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var an = 0;
  function vp(l, n) {
    return l.stylesheets && l.count === 0 && Yh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Yh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && an === 0 && (an = 62500 * op());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Yh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > an ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Nh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Yh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Bh = null;
  function Yh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Bh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), Bh = null, Nh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Bh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Bh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Nh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Or = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function gp(l, n, u, c, s, r, m, g, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dn(0), this.hiddenUpdates = dn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qh(l, n, u, c, s, r, m, g, A, Y, Q, J) {
    return l = new gp(
      l,
      n,
      u,
      m,
      A,
      Y,
      Q,
      J,
      g
    ), n = 1, r === !0 && (n |= 24), r = il(3, null, null, n), l.current = r, r.stateNode = l, n = Hs(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Gs(r), l;
  }
  function fo(l) {
    return l ? (l = da, l) : da;
  }
  function jv(l, n, u, c, s, r) {
    s = fo(s), c.context === null ? c.context = s : c.pendingContext = s, c = oi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = ka(l, c, n), u !== null && (Ta(u, l, n), $i(u, l, n));
  }
  function jh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Sp(l, n) {
    jh(l, n), (l = l.alternate) && jh(l, n);
  }
  function xv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ti(l, 67108864);
      n !== null && Ta(n, l, 67108864), Sp(l, 67108864);
    }
  }
  function so(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ua();
      n = Pr(n);
      var u = ti(l, n);
      u !== null && Ta(u, l, n), Sp(l, n);
    }
  }
  var _l = !0;
  function qu(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = L.p;
    try {
      L.p = 2, kl(l, n, u, c);
    } finally {
      L.p = r, _.T = s;
    }
  }
  function ju(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = L.p;
    try {
      L.p = 8, kl(l, n, u, c);
    } finally {
      L.p = r, _.T = s;
    }
  }
  function kl(l, n, u, c) {
    if (_l) {
      var s = bp(c);
      if (s === null)
        lp(
          l,
          n,
          c,
          xh,
          u
        ), Si(l, c);
      else if (iS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Si(l, c), n & 4 && -1 < Oa.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ec(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = De(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Ul(m);
                      g.entanglements[1] |= A, m &= ~A;
                    }
                    Bu(r), (yt & 6) === 0 && (St = vl() + 500, vi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ti(r, 2), g !== null && Ta(g, r, 2), Ef(), Sp(r, 2);
            }
          if (r = bp(c), r === null && lp(
            l,
            n,
            c,
            xh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        lp(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function bp(l) {
    return l = fd(l), qf(l);
  }
  var xh = null;
  function qf(l) {
    if (xh = null, l = bc(l), l !== null) {
      var n = je(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = vt(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = ee(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return xh = l, null;
  }
  function zr(l) {
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
        switch (Fr()) {
          case Mo:
            return 2;
          case Co:
            return 8;
          case Mn:
          case Ir:
            return 32;
          case Uo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jf = !1, Rl = null, Wl = null, ua = null, rc = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), Wt = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Si(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        rc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId);
    }
  }
  function ro(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ec(n), n !== null && xv(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function iS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Rl = ro(
          Rl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Wl = ro(
          Wl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ua = ro(
          ua,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return rc.set(
          r,
          ro(
            rc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, zn.set(
          r,
          ro(
            zn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Gv(l) {
    var n = bc(l.target);
    if (n !== null) {
      var u = je(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = vt(u), n !== null) {
            l.blockedOn = n, bm(l.priority, function() {
              so(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = ee(u), n !== null) {
            l.blockedOn = n, bm(l.priority, function() {
              so(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Dr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = bp(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        od = c, u.target.dispatchEvent(c), od = null;
      } else
        return n = Ec(u), n !== null && xv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function xf(l, n, u) {
    Dr(l) && u.delete(n);
  }
  function wv() {
    jf = !1, Rl !== null && Dr(Rl) && (Rl = null), Wl !== null && Dr(Wl) && (Wl = null), ua !== null && Dr(ua) && (ua = null), rc.forEach(xf), zn.forEach(xf);
  }
  function xu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, jf || (jf = !0, $.unstable_scheduleCallback(
      $.unstable_NormalPriority,
      wv
    )));
  }
  var Gf = null;
  function Xv(l) {
    Gf !== l && (Gf = l, $.unstable_scheduleCallback(
      $.unstable_NormalPriority,
      function() {
        Gf === l && (Gf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (qf(c || u) === null)
              continue;
            break;
          }
          var r = Ec(u);
          r !== null && (l.splice(n, 3), n -= 3, of(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function wf(l) {
    function n(A) {
      return xu(A, l);
    }
    Rl !== null && xu(Rl, l), Wl !== null && xu(Wl, l), ua !== null && xu(ua, l), rc.forEach(n), zn.forEach(n);
    for (var u = 0; u < Wt.length; u++) {
      var c = Wt[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Wt.length && (u = Wt[0], u.blockedOn === null); )
      Gv(u), u.blockedOn === null && Wt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[fa] || null;
        if (typeof r == "function")
          m || Xv(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[fa] || null)
              g = m.formAction;
            else if (qf(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Xv(u);
        }
      }
  }
  function Ep() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Gh(l) {
    this._internalRoot = l;
  }
  wh.prototype.render = Gh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(N(409));
    var u = n.current, c = Ua();
    jv(u, c, l, n, null, null);
  }, wh.prototype.unmount = Gh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      jv(l.current, 2, null, l, null, null), Ef(), n[Ui] = null;
    }
  };
  function wh(l) {
    this._internalRoot = l;
  }
  wh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = ed();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Wt.length && n !== 0 && n < Wt[u].priority; u++) ;
      Wt.splice(u, 0, l), u === 0 && Gv(l);
    }
  };
  var Tp = ae.version;
  if (Tp !== "19.2.4")
    throw Error(
      N(
        527,
        Tp,
        "19.2.4"
      )
    );
  L.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(N(188)) : (l = Object.keys(l).join(","), Error(N(268, l)));
    return l = k(n), l = l !== null ? He(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Qv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_r.isDisabled && _r.supportsFiber)
      try {
        rn = _r.inject(
          Qv
        ), Al = _r;
      } catch {
      }
  }
  return p0.createRoot = function(l, n) {
    if (!Ce(l)) throw Error(N(299));
    var u = !1, c = "", s = Fd, r = Ay, m = Id;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = qh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      Ep
    ), l[Ui] = n.current, _f(l), new Gh(n);
  }, p0.hydrateRoot = function(l, n, u) {
    if (!Ce(l)) throw Error(N(299));
    var c = !1, s = "", r = Fd, m = Ay, g = Id, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = qh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      A,
      r,
      m,
      g,
      Ep
    ), n.context = fo(null), u = n.current, c = Ua(), c = Pr(c), s = oi(c), s.callback = null, ka(u, s, c), u = c, n.current.lanes = u, Ci(n, u), Bu(n), l[Ui] = n.current, _f(l), new wh(n);
  }, p0.version = "19.2.4", p0;
}
var v0 = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q2;
function zT() {
  return Q2 || (Q2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function $(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ae(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = bl(e) ? e.slice() : ke({}, e);
      return f[o] = ae(e[o], t, a + 1, i), f;
    }
    function $e(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return N(e, t, a, 0);
      }
    }
    function N(e, t, a, i) {
      var o = t[i], f = bl(e) ? e.slice() : ke({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], bl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = N(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Ce(e, t, a) {
      var i = t[a], o = bl(e) ? e.slice() : ke({}, e);
      return a + 1 === t.length ? (bl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Ce(e[i], t, a + 1), o);
    }
    function je() {
      return !1;
    }
    function vt() {
      return null;
    }
    function ee() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function ne() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function k() {
    }
    function He() {
    }
    function X(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function U(e, t, a, i) {
      return new Ig(e, t, a, i);
    }
    function ie(e, t) {
      e.context === Vf && (Oh(e.current, 2, t, e, null, null), en());
    }
    function Le(e, t) {
      if (Xu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, nr(), N0(
          e.current,
          t,
          a
        ), en();
      }
    }
    function _t(e) {
      Xu = e;
    }
    function ft(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function lt(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Tl(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Bt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Jt(e) {
      if (lt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function el(e) {
      var t = e.alternate;
      if (!t) {
        if (t = lt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Jt(o), e;
            if (f === i) return Jt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ul(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ul(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ze(e) {
      return e === null || typeof e != "object" ? null : (e = Yv && e[Yv] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ve(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Uf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Mf:
          return "Fragment";
        case Er:
          return "Profiler";
        case Aa:
          return "StrictMode";
        case co:
          return "Suspense";
        case Ha:
          return "SuspenseList";
        case In:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case oc:
            return "Portal";
          case Fn:
            return e.displayName || "Context";
          case Mh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Cf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Tr:
            return t = e.displayName || null, t !== null ? t : Ve(e.type) || "Memo";
          case na:
            t = e._payload, e = e._init;
            try {
              return Ve(e(t));
            } catch {
            }
        }
      return null;
    }
    function Dt(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ve(t);
        case 8:
          return t === Aa ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return se(e.return);
      }
      return null;
    }
    function Yt(e) {
      return { current: e };
    }
    function ye(e, t) {
      0 > gi ? console.error("Unexpected pop.") : (t !== hp[gi] && console.error("Unexpected Fiber popped."), e.current = dp[gi], dp[gi] = null, hp[gi] = null, gi--);
    }
    function qe(e, t, a) {
      gi++, dp[gi] = e.current, hp[gi] = a, e.current = t;
    }
    function Qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function qt(e, t) {
      qe(ln, t, e), qe(Hf, e, e), qe(fc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ov(t) : Do;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = ov(t), t = yi(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = pm;
                break;
              case "math":
                t = Ng;
                break;
              default:
                t = Do;
            }
      }
      a = a.toLowerCase(), a = Om(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ye(fc, e), qe(fc, a, e);
    }
    function _(e) {
      ye(fc, e), ye(Hf, e), ye(ln, e);
    }
    function L() {
      return Qt(fc.current);
    }
    function P(e) {
      e.memoizedState !== null && qe(sc, e, e);
      var t = Qt(fc.current), a = e.type, i = yi(t.context, a);
      a = Om(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (qe(Hf, e, e), qe(fc, i, e));
    }
    function pe(e) {
      Hf.current === e && (ye(fc, e), ye(Hf, e)), sc.current === e && (ye(sc, e), r0._currentValue = Wr);
    }
    function Ae() {
    }
    function S() {
      if (Nf === 0) {
        qv = console.log, oo = console.info, Bf = console.warn, mp = console.error, Ar = console.group, Ch = console.groupCollapsed, Uh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ae,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Nf++;
    }
    function B() {
      if (Nf--, Nf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ke({}, e, { value: qv }),
          info: ke({}, e, { value: oo }),
          warn: ke({}, e, { value: Bf }),
          error: ke({}, e, { value: mp }),
          group: ke({}, e, { value: Ar }),
          groupCollapsed: ke({}, e, { value: Ch }),
          groupEnd: ke({}, e, { value: Uh })
        });
      }
      0 > Nf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function F(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function W(e) {
      if (Yf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Yf = t && t[1] || "", yp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Yf + e + yp;
    }
    function ge(e, t) {
      if (!e || Hh) return "";
      var a = pp.get(e);
      if (a !== void 0) return a;
      Hh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (le) {
                    var j = le;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (le) {
                    j = le;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (le) {
                  j = le;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (le) {
              if (le && j && typeof le.stack == "string")
                return [le.stack, j.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), z = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < z.length && !z[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === z.length)
            for (f = p.length - 1, d = z.length - 1; 1 <= f && 0 <= d && p[f] !== z[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== z[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== z[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && pp.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Hh = !1, G.H = i, B(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? W(p) : "", typeof e == "function" && pp.set(e, p), p;
    }
    function xe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return e.child !== t && t !== null ? W("Suspense Fallback") : W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 15:
          return ge(e.type, !1);
        case 11:
          return ge(e.type.render, !1);
        case 1:
          return ge(e.type, !0);
        case 31:
          return W("Activity");
        default:
          return "";
      }
    }
    function Ee(e) {
      try {
        var t = "", a = null;
        do {
          t += xe(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = F(p), R = z.lastIndexOf(`
`), E = R === -1 ? z : z.slice(R + 1);
                    if (E.indexOf(h) !== -1) {
                      var j = `
` + E;
                      break e;
                    }
                  }
                  j = W(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + j;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (le) {
        return `
Error generating stack: ` + le.message + `
` + le.stack;
      }
    }
    function Lt(e) {
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function ht() {
      if (Na === null) return null;
      var e = Na._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function ja() {
      if (Na === null) return "";
      var e = Na;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += W(e.type);
            break;
          case 13:
            t += W("Suspense");
            break;
          case 19:
            t += W("SuspenseList");
            break;
          case 31:
            t += W("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Lt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Lt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = F(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + F(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ce(e, t, a, i, o, f, d) {
      var h = Na;
      Di(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Di(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Di(e) {
      G.getCurrentStack = e === null ? null : ja, Yu = !1, Na = e;
    }
    function _i(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function xa(e) {
      try {
        return uu(e), !1;
      } catch {
        return !0;
      }
    }
    function uu(e) {
      return "" + e;
    }
    function mt(e, t) {
      if (xa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          _i(e)
        ), uu(e);
    }
    function Pl(e, t) {
      if (xa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          _i(e)
        ), uu(e);
    }
    function vc(e) {
      if (xa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          _i(e)
        ), uu(e);
    }
    function ss(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        so = t.inject(e), _l = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function re(e) {
      if (typeof Sp == "function" && xv(e), _l && typeof _l.setStrictMode == "function")
        try {
          _l.setStrictMode(so, e);
        } catch (t) {
          qu || (qu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Ri(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (bp(e) / xh | 0) | 0;
    }
    function iu(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function gc(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = iu(i) : (d &= h, d !== 0 ? o = iu(d) : a || (a = h & ~e, a !== 0 && (o = iu(a))))) : (h = i & ~f, h !== 0 ? o = iu(h) : d !== 0 ? o = iu(d) : a || (a = i & ~e, a !== 0 && (o = iu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function vl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Fr(e, t) {
      switch (e) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Mo() {
      var e = jf;
      return jf <<= 1, (jf & 62914560) === 0 && (jf = 4194304), e;
    }
    function Co(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Mn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ir(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var z = 31 - kl(a), R = 1 << z;
        h[z] = 0, y[z] = -1;
        var E = p[z];
        if (E !== null)
          for (p[z] = null, z = 0; z < E.length; z++) {
            var j = E[z];
            j !== null && (j.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && Uo(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Uo(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - kl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function rs(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Sc(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : rn(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function rn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Al(e, t, a) {
      if (ju)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - kl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Ga(e, t) {
      if (ju)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - kl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Ul(e) {
      return e &= -e, Rl < e ? Wl < e ? (e & 134217727) !== 0 ? ua : rc : Wl : Rl;
    }
    function Mi() {
      var e = bt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ua : Dh(e.type));
    }
    function v(e, t) {
      var a = bt.p;
      try {
        return bt.p = e, t();
      } finally {
        bt.p = a;
      }
    }
    function M(e) {
      delete e[Wt], delete e[Oa], delete e[ro], delete e[iS], delete e[Gv];
    }
    function I(e) {
      var t = e[Wt];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Si] || a[Wt]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = ao(e); e !== null; ) {
              if (a = e[Wt])
                return a;
              e = ao(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function te(e) {
      if (e = e[Wt] || e[Si]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function de(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function De(e) {
      var t = e[Dr];
      return t || (t = e[Dr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function he(e) {
      e[xf] = !0;
    }
    function Pe(e, t) {
      Ge(e, t), Ge(e + "Capture", t);
    }
    function Ge(e, t) {
      xu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), xu[e] = t;
      var a = e.toLowerCase();
      for (Gf[a] = e, e === "onDoubleClick" && (Gf.ondblclick = e), e = 0; e < t.length; e++)
        wv.add(t[e]);
    }
    function ea(e, t) {
      Xv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function dn(e) {
      return an.call(Gh, e) ? !0 : an.call(Ep, e) ? !1 : wf.test(e) ? Gh[e] = !0 : (Ep[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ci(e, t, a) {
      if (dn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (mt(a, t), e === "" + a ? a : e);
      }
    }
    function Ho(e, t, a) {
      if (dn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          mt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ds(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        mt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function cu(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        mt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function wa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return vc(e), e;
        default:
          return "";
      }
    }
    function Pr(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sm(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            vc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            vc(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function ed(e) {
      if (!e._valueTracker) {
        var t = Pr(e) ? "checked" : "value";
        e._valueTracker = Sm(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function bm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Pr(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Cn(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Rt(e) {
      return e.replace(
        wh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function fa(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Qv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component",
        t.type
      ), Qv = !0), t.value === void 0 || t.defaultValue === void 0 || Tp || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component",
        t.type
      ), Tp = !0);
    }
    function Ui(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (mt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wa(t)) : e.value !== "" + wa(t) && (e.value = "" + wa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Em(e, d, wa(t)) : a != null ? Em(e, d, wa(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (mt(h, "name"), e.name = "" + wa(h)) : e.removeAttribute("name");
    }
    function td(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (mt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          ed(e);
          return;
        }
        a = a != null ? "" + wa(a) : "", t = t != null ? "" + wa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (mt(d, "name"), e.name = d), ed(e);
    }
    function Em(e, t, a) {
      t === "number" && Cn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function S0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? br.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || _r || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), _r = !0);
    }
    function Tm() {
      var e = ht();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function ou(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + wa(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ld(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = bl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Tm()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Tm()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function bc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ec(e, t, a) {
      if (t != null && (t = "" + wa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + wa(a) : "";
    }
    function No(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (bl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = wa(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), ed(e);
    }
    function Tc(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Tc(e.children[0], t) : e;
    }
    function Et(e) {
      return "  " + "  ".repeat(e);
    }
    function Ac(e) {
      return "+ " + "  ".repeat(e);
    }
    function Hi(e) {
      return "- " + "  ".repeat(e);
    }
    function Ni(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function fu(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function ad(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Ac(a) + fu(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Ac(a) + fu(e, i) + `
` + Hi(a) + fu(t, i) + `
`;
      }
      return Et(a) + fu(e, i) + `
`;
    }
    function nd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Bo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (bl(e)) return "[...]";
          if (e.$$typeof === On)
            return (t = Ve(e.type)) ? "<" + t + ">" : "<...>";
          var a = nd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Bo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Yo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + Bo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Yo(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function ud(e, t, a) {
      var i = "", o = ke({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Bo(e[f], d);
          t.hasOwnProperty(f) ? (d = Bo(t[f], d), i += Ac(a) + f + ": " + h + `
`, i += Hi(a) + f + ": " + d + `
`) : i += Ac(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Bo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Hi(a) + y + ": " + e + `
`);
      return i;
    }
    function Fu(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += qo(
          e,
          t,
          Et(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var z = Yo(
                p,
                h
              );
              h = Yo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && nd(p) === "Object" && nd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Et(i + 1) + d + `={{
` + ud(
                p,
                y,
                i + 2
              ) + Et(i + 1) + `}}
` : (o += Ac(i + 1) + d + "=" + z + `
`, o += Hi(i + 1) + d + "=" + h + `
`);
            } else
              o += Et(i + 1) + d + "=" + Yo(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var E = 120 - 2 * (i + 1) - R.length - 1;
            o += Hi(i + 1) + R + "=" + Yo(a[R], E) + `
`;
          }
        }), o = o === "" ? Et(i) + "<" + e + `>
` : Et(i) + "<" + e + `
` + o + Et(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += ad(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + ad("" + t, null, i + 1) : o + ad("" + t, void 0, i + 1)), o;
    }
    function Xa(e, t) {
      var a = Ni(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Xa(e, t), e = e.sibling;
        return a;
      }
      return Et(t) + "<" + a + `>
`;
    }
    function id(e, t) {
      var a = Tc(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Et(t) + `...
` + id(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Et(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = ad(o, e.serverProps, t), t++;
      else if (f = Ni(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = Yo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Et(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = qo(
            f,
            o,
            Ac(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Fu(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += id(d, t), f++) : p += Xa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Et(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Hi(t) + fu(f, 120 - 2 * t) + `
`) : p + qo(
          f.type,
          f.props,
          Hi(t)
        );
      return a + i + p;
    }
    function Am(e) {
      try {
        return `

` + id(e, 0);
      } catch {
        return "";
      }
    }
    function cd(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Am(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Om(e, t) {
      var a = ke({}, e || Q), i = { tag: t };
      return g.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function hs(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Y.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Jg(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Qa(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ms(e, t) {
      t = t || Q;
      var a = t.current;
      if (t = (a = hs(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Jg(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, J[t]) return !1;
      J[t] = !0;
      var o = (t = Na) ? Qa(t.return, i) : null, f = t !== null && o !== null ? cd(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ce(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function ys(e, t, a) {
      if (a || hs("#text", t, !1))
        return !0;
      if (a = "#text|" + t, J[a]) return !1;
      J[a] = !0;
      var i = (a = Na) ? Qa(a, t) : null;
      return a = a !== null && i !== null ? cd(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Oc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function jo(e) {
      return e.replace(C, function(t, a) {
        return a.toUpperCase();
      });
    }
    function zm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? H.hasOwnProperty(t) && H[t] || (H[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        jo(t.replace(Ht, "ms-"))
      )) : Oe.test(t) ? H.hasOwnProperty(t) && H[t] || (H[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !D.test(a) || Z.hasOwnProperty(a) && Z[a] || (Z[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(D, "")
      )), typeof a == "number" && (isNaN(a) ? Se || (Se = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || rt || (rt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || me.has(t) ? t === "float" ? e.cssFloat = a : (Pl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Dm(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = q[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = q[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = q[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var z = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                z == null || typeof z == "boolean" || z === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var E in t)
          p = t[E], t.hasOwnProperty(E) && a[E] !== p && zm(e, E, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && zm(e, i, t[i]);
    }
    function su(e) {
      if (e.indexOf("-") === -1) return !1;
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
    function b0(e) {
      return pt.get(e) || e;
    }
    function E0(e, t) {
      if (an.call(Xh, t) && Xh[t])
        return !0;
      if ($2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Lv.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Xh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Xh[t] = !0;
      }
      if (K2.test(t)) {
        if (e = t.toLowerCase(), e = Lv.hasOwnProperty(e) ? e : null, e == null) return Xh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Xh[t] = !0);
      }
      return !0;
    }
    function T0(e, t) {
      var a = [], i;
      for (i in t)
        E0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function _m(e, t, a, i) {
      if (an.call(nn, t) && nn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), nn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), nn[t] = !0;
        if (b1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), nn[t] = !0;
      } else if (b1.test(t))
        return k2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), nn[t] = !0;
      if (W2.test(t) || F2.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), nn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), nn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), nn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), nn[t] = !0;
      if (Pn.hasOwnProperty(o)) {
        if (o = Pn[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), nn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), nn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), nn[t] = !0);
          }
        case "function":
        case "symbol":
          return nn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), nn[t] = !0;
          }
      }
      return !0;
    }
    function Kg(e, t, a) {
      var i = [], o;
      for (o in t)
        _m(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function ps(e) {
      return I2.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function hn() {
    }
    function Un(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function od(e) {
      var t = te(e);
      if (t && (e = t.stateNode)) {
        var a = e[Oa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ui(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (mt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Rt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Oa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ui(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && bm(i);
            }
            break e;
          case "textarea":
            Ec(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && ou(e, !!a.multiple, t, !1);
        }
      }
    }
    function fd(e, t, a) {
      if (cS) return e(t, a);
      cS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (cS = !1, (Qh !== null || Lh !== null) && (en(), Qh && (t = Qh, e = Lh, Lh = Qh = null, od(t), e)))
          for (t = 0; t < e.length; t++) od(e[t]);
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Oa] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function zc() {
      if (Vv) return Vv;
      var e, t = fS, a = t.length, i, o = "value" in Xf ? Xf.value : Xf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Vv = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function vs(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function xo() {
      return !0;
    }
    function Rm() {
      return !1;
    }
    function Hl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? xo : Rm, this.isPropagationStopped = Rm, this;
      }
      return ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        persist: function() {
        },
        isPersistent: xo
      }), t;
    }
    function Iu(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = rE[e]) ? !!t[e] : !1;
    }
    function gs() {
      return Iu;
    }
    function Go(e, t) {
      switch (e) {
        case "keyup":
          return AE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== O1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Mm(e, t) {
      switch (e) {
        case "compositionend":
          return Pu(t);
        case "keypress":
          return t.which !== D1 ? null : (R1 = !0, _1);
        case "textInput":
          return e = t.data, e === _1 && R1 ? null : e;
        default:
          return null;
      }
    }
    function sd(e, t) {
      if (Vh)
        return e === "compositionend" || !hS && Go(e, t) ? (e = zc(), Vv = fS = Xf = null, Vh = !1, e) : null;
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
          return z1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Cm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!zE[e.type] : t === "textarea";
    }
    function rd(e) {
      if (!dc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Ss(e, t, a, i) {
      Qh ? Lh ? Lh.push(i) : Lh = [i] : Qh = i, t = $n(t, "onChange"), 0 < t.length && (a = new Zv(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function A0(e) {
      Ot(e, 0);
    }
    function Kl(e) {
      var t = de(e);
      if (bm(t)) return e;
    }
    function Bi(e, t) {
      if (e === "change") return t;
    }
    function bs() {
      Rp && (Rp.detachEvent("onpropertychange", wo), Mp = Rp = null);
    }
    function wo(e) {
      if (e.propertyName === "value" && Kl(Mp)) {
        var t = [];
        Ss(
          t,
          Mp,
          e,
          Un(e)
        ), fd(A0, t);
      }
    }
    function $g(e, t, a) {
      e === "focusin" ? (bs(), Rp = t, Mp = a, Rp.attachEvent("onpropertychange", wo)) : e === "focusout" && bs();
    }
    function Um(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(Mp);
    }
    function Hm(e, t) {
      if (e === "click") return Kl(t);
    }
    function Es(e, t) {
      if (e === "input" || e === "change")
        return Kl(t);
    }
    function dd(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Xo(e, t) {
      if (un(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!an.call(t, o) || !un(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function O0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function z0(e, t) {
      var a = O0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = O0(a);
      }
    }
    function D0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? D0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function hd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Cn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Cn(e.document);
      }
      return t;
    }
    function Nm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function _0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      yS || Zh == null || Zh !== Cn(i) || (i = Zh, "selectionStart" in i && Nm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Cp && Xo(Cp, i) || (Cp = i, i = $n(mS, "onSelect"), 0 < i.length && (t = new Zv(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Zh)));
    }
    function Dc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function _c(e) {
      if (pS[e]) return pS[e];
      if (!Jh[e]) return e;
      var t = Jh[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in C1)
          return pS[e] = t[a];
      return e;
    }
    function Hn(e, t) {
      Y1.set(e, t), Pe(t, [e]);
    }
    function R0(e) {
      for (var t = Kv, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (bl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Kv && t !== ES)
              return SS;
            t = ES;
          } else return SS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Kv && t !== bS)
            return SS;
          t = bS;
        }
      }
      return t;
    }
    function Bm(e, t, a, i) {
      for (var o in e)
        an.call(e, o) && o[0] !== "_" && du(o, e[o], t, a, i);
    }
    function du(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === On) {
              var f = Ve(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && du(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!bl(t.children) || 0 < t.children.length) && (e = !0) : an.call(t, p) && p[0] !== "_" && du(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = R0(t), p === bS || p === Kv) {
                t = JSON.stringify(t);
                break;
              } else if (p === ES) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], du(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, du(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, du(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Bm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === HE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function M0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          $v + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [$v + o, "…"],
                [kv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === On) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Ve(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [$v + o, d],
                        [kv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        x1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, M0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    x1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              du(f, d, a, i, $v), du(f, h, a, i, kv);
            }
            o = !1;
          }
        } else
          a.push([
            kv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Nn(e) {
      st = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function mn(e, t, a, i) {
      Ft && (Lf.start = t, Lf.end = a, ho.color = "warning", ho.tooltipText = i, ho.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Lf
        )
      ) : performance.measure(i, Lf));
    }
    function md(e, t, a) {
      mn(e, t, a, "Reconnect");
    }
    function yd(e, t, a, i, o) {
      var f = se(e);
      if (f !== null && Ft) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [NE], p = M0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Qf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Qf = !0, y[0] = BE, ho.color = "warning", ho.tooltipText = G1) : (ho.color = i, ho.tooltipText = f), ho.properties = y, Lf.start = t, Lf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Lf
          )
        ) : performance.measure(
          "​" + f,
          Lf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Gu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Gu,
          void 0,
          i
        );
      }
    }
    function Ym(e, t, a, i) {
      if (Ft) {
        var o = se(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && du("key", e.key, d, 0, ""), e.memoizedProps !== null && Bm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Gu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function Bn(e, t, a, i, o) {
      if (o !== null) {
        if (Ft) {
          var f = se(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && du("key", e.key, i, 0, ""), e.memoizedProps !== null && Bm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Gu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = se(e), f !== null && Ft && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Gu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Gu,
          void 0,
          o
        ));
    }
    function kg(e, t, a, i) {
      if (Ft && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            st,
            ct,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          st,
          ct,
          o
        );
      }
    }
    function C0(e, t, a, i) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          st,
          ct,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        st,
        ct,
        a
      ));
    }
    function U0(e, t, a, i) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          st,
          ct,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        st,
        ct,
        a
      ));
    }
    function Wg(e, t, a, i, o, f) {
      if (Ft && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: st,
              trackGroup: ct,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function qm(e, t, a, i) {
      !Ft || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          st,
          ct,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        st,
        ct,
        "error"
      ));
    }
    function Fg(e, t, a, i) {
      !Ft || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          st,
          ct,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        st,
        ct,
        "secondary-light"
      ));
    }
    function H0(e, t, a, i, o) {
      if (Ft && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: st,
              trackGroup: ct,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function jm(e, t, a) {
      !Ft || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        st,
        ct,
        "secondary-dark"
      );
    }
    function pd() {
      for (var e = Kh, t = TS = Kh = 0; t < e; ) {
        var a = wu[t];
        wu[t++] = null;
        var i = wu[t];
        wu[t++] = null;
        var o = wu[t];
        wu[t++] = null;
        var f = wu[t];
        if (wu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && xm(a, o, f);
      }
    }
    function Qo(e, t, a, i) {
      wu[Kh++] = e, wu[Kh++] = t, wu[Kh++] = a, wu[Kh++] = i, TS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Rc(e, t, a, i) {
      return Qo(e, t, a, i), Ts(e);
    }
    function ta(e, t) {
      return Qo(e, null, null, t), Ts(e);
    }
    function xm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Up || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - kl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Ts(e) {
      if (n0 > WE)
        throw Vr = n0 = 0, u0 = t1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Vr > FE && (Vr = 0, u0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && An(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && An(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Yi(e) {
      if (Xu === null) return e;
      var t = Xu(e);
      return t === void 0 ? e : t.current;
    }
    function vd(e) {
      if (Xu === null) return e;
      var t = Xu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Yi(e.render), e.render !== t) ? (t = { $$typeof: Cf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Gm(e, t) {
      if (Xu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === na) && (i = !0);
          break;
        case 11:
          (o === Cf || o === na) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Tr || o === na) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Xu(a), e !== void 0 && e === Xu(t)));
    }
    function Mc(e) {
      Xu !== null && typeof WeakSet == "function" && ($h === null && ($h = /* @__PURE__ */ new WeakSet()), $h.add(e));
    }
    function N0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Xu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Xu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), $h !== null && ($h.has(e) || o !== null && $h.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = ta(e, 2), o !== null && Ue(o, e, 2)), f === null || i || N0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Ig(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, w1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function wm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function hu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = U(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Yi(e.type);
          break;
        case 1:
          a.type = Yi(e.type);
          break;
        case 11:
          a.type = vd(e.type);
      }
      return a;
    }
    function Xm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Cc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        wm(e) && (d = 1), h = Yi(h);
      else if (typeof e == "string")
        d = L(), d = Rv(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case In:
            return t = U(31, a, t, o), t.elementType = In, t.lanes = f, t;
          case Mf:
            return Uc(
              a.children,
              o,
              f,
              t
            );
          case Aa:
            d = 8, o |= Ba, o |= bi;
            break;
          case Er:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | We), t.elementType = Er, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case co:
            return t = U(13, a, t, o), t.elementType = co, t.lanes = f, t;
          case Ha:
            return t = U(19, a, t, o), t.elementType = Ha, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Fn:
                  d = 10;
                  break e;
                case Mh:
                  d = 9;
                  break e;
                case Cf:
                  d = 11, h = vd(h);
                  break e;
                case Tr:
                  d = 14;
                  break e;
                case na:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : bl(e) ? a = "array" : e !== void 0 && e.$$typeof === On ? (a = "<" + (Ve(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Dt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = U(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function qi(e, t, a) {
      return t = Cc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Uc(e, t, a, i) {
      return e = U(7, e, i, t), e.lanes = a, e;
    }
    function Lo(e, t, a) {
      return e = U(6, e, null, t), e.lanes = a, e;
    }
    function Qm(e) {
      var t = U(18, null, null, Me);
      return t.stateNode = e, t;
    }
    function gd(e, t, a) {
      return t = U(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function sa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = AS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ee(t)
        }, AS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ee(t)
      };
    }
    function Yn(e, t) {
      ji(), kh[Wh++] = Hp, kh[Wh++] = Wv, Wv = e, Hp = t;
    }
    function Lm(e, t, a) {
      ji(), Qu[Lu++] = yo, Qu[Lu++] = po, Qu[Lu++] = Mr, Mr = e;
      var i = yo;
      e = po;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, yo = 1 << 32 - kl(t) + o | a << o | i, po = f + e;
      } else
        yo = 1 << f | a << o | i, po = e;
    }
    function Sd(e) {
      ji(), e.return !== null && (Yn(e, 1), Lm(e, 1, 0));
    }
    function bd(e) {
      for (; e === Wv; )
        Wv = kh[--Wh], kh[Wh] = null, Hp = kh[--Wh], kh[Wh] = null;
      for (; e === Mr; )
        Mr = Qu[--Lu], Qu[Lu] = null, po = Qu[--Lu], Qu[Lu] = null, yo = Qu[--Lu], Qu[Lu] = null;
    }
    function B0() {
      return ji(), Mr !== null ? { id: yo, overflow: po } : null;
    }
    function Y0(e, t) {
      ji(), Qu[Lu++] = yo, Qu[Lu++] = po, Qu[Lu++] = Mr, yo = t.id, po = t.overflow, Mr = e;
    }
    function ji() {
      it || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Hc(e, t) {
      if (e.return === null) {
        if (eu === null)
          eu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (eu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          eu.distanceFromLeaf > t && (eu.distanceFromLeaf = t);
        }
        return eu;
      }
      var a = Hc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function q0() {
      it && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function la(e, t) {
      hc || (e = Hc(e, 0), e.serverProps = null, t !== null && (t = Ov(t), e.serverTail.push(t)));
    }
    function yn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = eu;
      throw i !== null && (eu = null, a = Am(i)), Os(
        sa(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), OS;
    }
    function Vm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Wt] = e, t[Oa] = i, Ea(a, i), a) {
        case "dialog":
          Re("cancel", t), Re("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Re("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < i0.length; a++)
            Re(i0[a], t);
          break;
        case "source":
          Re("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Re("error", t), Re("load", t);
          break;
        case "details":
          Re("toggle", t);
          break;
        case "input":
          ea("input", i), Re("invalid", t), fa(t, i), td(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          S0(t, i);
          break;
        case "select":
          ea("select", i), Re("invalid", t), ld(t, i);
          break;
        case "textarea":
          ea("textarea", i), Re("invalid", t), bc(t, i), No(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Jy(t.textContent, a) ? (i.popover != null && (Re("beforetoggle", t), Re("toggle", t)), i.onScroll != null && Re("scroll", t), i.onScrollEnd != null && Re("scrollend", t), i.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || yn(e, !0);
    }
    function Zm(e) {
      for (za = e.return; za; )
        switch (za.tag) {
          case 5:
          case 31:
          case 13:
            Vu = !1;
            return;
          case 27:
          case 3:
            Vu = !0;
            return;
          default:
            za = za.return;
        }
    }
    function Nc(e) {
      if (e !== za) return !1;
      if (!it)
        return Zm(e), it = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ef(e.type, e.memoizedProps)), a = !a), a && It) {
        for (a = It; a; ) {
          var i = Hc(e, 0), o = Ov(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Of(a) : tn(a.nextSibling);
        }
        yn(e);
      }
      if (Zm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = Of(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = Of(e);
      } else
        t === 27 ? (t = It, ic(e.type) ? (e = h1, h1 = null, It = e) : It = t) : It = za ? tn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function xi() {
      It = za = null, hc = it = !1;
    }
    function As() {
      var e = Zf;
      return e !== null && (sn === null ? sn = e : sn.push.apply(
        sn,
        e
      ), Zf = null), e;
    }
    function Os(e) {
      Zf === null ? Zf = [e] : Zf.push(e);
    }
    function Gi() {
      var e = eu;
      if (e !== null) {
        eu = null;
        for (var t = Am(e); 0 < e.children.length; )
          e = e.children[0];
        ce(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Vo() {
      Fh = Fv = null, Ih = !1;
    }
    function pn(e, t, a) {
      qe(zS, t._currentValue, e), t._currentValue = a, qe(DS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Q1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Q1;
    }
    function qn(e, t) {
      e._currentValue = zS.current;
      var a = DS.current;
      ye(DS, t), e._currentRenderer = a, ye(zS, t);
    }
    function Ed(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ei(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Ed(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Ed(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function jn(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            un(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === sc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(r0) : e = [r0]);
        }
        o = o.return;
      }
      e !== null && ei(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Zo(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!un(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function wi(e) {
      Fv = e, Fh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function gt(e) {
      return Ih && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Jm(Fv, e);
    }
    function zs(e, t) {
      return Fv === null && wi(e), Jm(e, t);
    }
    function Jm(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Fh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Fh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Fh = Fh.next = t;
      return a;
    }
    function Td() {
      return {
        controller: new jE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Bc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Ds(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && xE(GE, function() {
        e.controller.abort();
      });
    }
    function mu(e, t, a) {
      (e & 127) !== 0 ? 0 > mc && (mc = Xl(), Bp = Iv(t), _S = t, a != null && (RS = se(a)), (dt & (Il | au)) !== oa && (pl = !0, Kf = Np), e = Tf(), t = Nu(), e !== Ph || t !== Yp ? Ph = -1.1 : t !== null && (Kf = Np), Hr = e, Yp = t) : (e & 4194048) !== 0 && 0 > Zu && (Zu = Xl(), qp = Iv(t), L1 = t, a != null && (V1 = se(a)), 0 > bo) && (e = Tf(), t = Nu(), (e !== kf || t !== Nr) && (kf = -1.1), $f = e, Nr = t);
    }
    function j0(e) {
      if (0 > mc) {
        mc = Xl(), Bp = e._debugTask != null ? e._debugTask : null, (dt & (Il | au)) !== oa && (Kf = Np);
        var t = Tf(), a = Nu();
        t !== Ph || a !== Yp ? Ph = -1.1 : a !== null && (Kf = Np), Hr = t, Yp = a;
      }
      0 > Zu && (Zu = Xl(), qp = e._debugTask != null ? e._debugTask : null, 0 > bo) && (e = Tf(), t = Nu(), (e !== kf || t !== Nr) && (kf = -1.1), $f = e, Nr = t);
    }
    function yu() {
      var e = Cr;
      return Cr = 0, e;
    }
    function Jo(e) {
      var t = Cr;
      return Cr = e, t;
    }
    function ra(e) {
      var t = Cr;
      return Cr += e, t;
    }
    function Yc() {
      _e = Te = -1.1;
    }
    function Kt() {
      var e = Te;
      return Te = -1.1, e;
    }
    function Nl(e) {
      0 <= e && (Te = e);
    }
    function vn() {
      var e = fl;
      return fl = -0, e;
    }
    function La(e) {
      0 <= e && (fl = e);
    }
    function Va() {
      var e = nl;
      return nl = null, e;
    }
    function gn() {
      var e = pl;
      return pl = !1, e;
    }
    function ti(e) {
      cn = Xl(), 0 > e.actualStartTime && (e.actualStartTime = cn);
    }
    function Ad(e) {
      if (0 <= cn) {
        var t = Xl() - cn;
        e.actualDuration += t, e.selfBaseDuration = t, cn = -1;
      }
    }
    function _s(e) {
      if (0 <= cn) {
        var t = Xl() - cn;
        e.actualDuration += t, cn = -1;
      }
    }
    function da() {
      if (0 <= cn) {
        var e = Xl(), t = e - cn;
        cn = -1, Cr += t, fl += t, _e = e;
      }
    }
    function x0(e) {
      nl === null && (nl = []), nl.push(e), go === null && (go = []), go.push(e);
    }
    function il() {
      cn = Xl(), 0 > Te && (Te = cn);
    }
    function qc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function li(e, t) {
      if (xp === null) {
        var a = xp = [];
        CS = 0, Br = Zy(), em = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return CS++, t.then(Km, Km), t;
    }
    function Km() {
      if (--CS === 0 && (-1 < Zu || (bo = -1.1), xp !== null)) {
        em !== null && (em.status = "fulfilled");
        var e = xp;
        xp = null, Br = 0, em = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Od(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ai() {
      var e = Yr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function Ko(e, t) {
      t === null ? qe(Yr, Yr.current, e) : qe(Yr, t.pool, e);
    }
    function $m() {
      var e = ai();
      return e === null ? null : { parent: wl._currentValue, pool: e };
    }
    function zd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function km(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Za(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(hn, hn), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Rs(e), e;
        default:
          if (typeof t.status == "string")
            t.then(hn, hn);
          else {
            if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Rs(e), e;
          }
          throw jr = t, Zp = !0, tm;
      }
    }
    function Ja(e) {
      try {
        return VE(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (jr = t, Zp = !0, tm) : t;
      }
    }
    function jc() {
      if (jr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = jr;
      return jr = null, Zp = !1, e;
    }
    function Rs(e) {
      if (e === tm || e === ig)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function rl(e) {
      var t = Fe;
      return e != null && (Fe = t === null ? e : t.concat(e)), t;
    }
    function Da() {
      var e = Fe;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ha(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = qi(e, a.mode, 0), t._debugInfo = Fe, t.return = a), ce(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function xn(e) {
      var t = Jp;
      return Jp += 1, lm === null && (lm = zd()), Za(lm, e, t);
    }
    function _a(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Gn(e, t) {
      throw t.$$typeof === Bv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Sn(e, t) {
      var a = Da();
      a !== null ? a.run(
        Gn.bind(null, e, t)
      ) : Gn(e, t);
    }
    function Wm(e, t) {
      var a = se(e) || "Component";
      sb[a] || (sb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function $o(e, t) {
      var a = Da();
      a !== null ? a.run(
        Wm.bind(null, e, t)
      ) : Wm(e, t);
    }
    function Dd(e, t) {
      var a = se(e) || "Component";
      rb[a] || (rb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Ms(e, t) {
      var a = Da();
      a !== null ? a.run(
        Dd.bind(null, e, t)
      ) : Dd(e, t);
    }
    function Bl(e) {
      function t(b, T) {
        if (e) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!e) return null;
        for (; T !== null; )
          t(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = hu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, V) {
        return T === null || T.tag !== 6 ? (T = Lo(
          O,
          b.mode,
          V
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function y(b, T, O, V) {
        var ue = O.type;
        return ue === Mf ? (T = z(
          b,
          T,
          O.props.children,
          V,
          O.key
        ), ha(O, T, b), T) : T !== null && (T.elementType === ue || Gm(T, O) || typeof ue == "object" && ue !== null && ue.$$typeof === na && Ja(ue) === T.type) ? (T = o(T, O.props), _a(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = Fe, T) : (T = qi(O, b.mode, V), _a(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function p(b, T, O, V) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = gd(O, b.mode, V), T.return = b, T._debugInfo = Fe, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = Fe, T);
      }
      function z(b, T, O, V, ue) {
        return T === null || T.tag !== 7 ? (T = Uc(
          O,
          b.mode,
          V,
          ue
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function R(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Lo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case On:
              return O = qi(
                T,
                b.mode,
                O
              ), _a(O, T), O.return = b, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
            case oc:
              return T = gd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = Fe, T;
            case na:
              var V = rl(T._debugInfo);
              return T = Ja(T), b = R(b, T, O), Fe = V, b;
          }
          if (bl(T) || ze(T))
            return O = Uc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = rl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
          if (typeof T.then == "function")
            return V = rl(T._debugInfo), b = R(
              b,
              xn(T),
              O
            ), Fe = V, b;
          if (T.$$typeof === Fn)
            return R(
              b,
              zs(b, T),
              O
            );
          Sn(b, T);
        }
        return typeof T == "function" && $o(b, T), typeof T == "symbol" && Ms(b, T), null;
      }
      function E(b, T, O, V) {
        var ue = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ue !== null ? null : h(b, T, "" + O, V);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              return O.key === ue ? (ue = rl(O._debugInfo), b = y(
                b,
                T,
                O,
                V
              ), Fe = ue, b) : null;
            case oc:
              return O.key === ue ? p(b, T, O, V) : null;
            case na:
              return ue = rl(O._debugInfo), O = Ja(O), b = E(
                b,
                T,
                O,
                V
              ), Fe = ue, b;
          }
          if (bl(O) || ze(O))
            return ue !== null ? null : (ue = rl(O._debugInfo), b = z(
              b,
              T,
              O,
              V,
              null
            ), Fe = ue, b);
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = E(
              b,
              T,
              xn(O),
              V
            ), Fe = ue, b;
          if (O.$$typeof === Fn)
            return E(
              b,
              T,
              zs(b, O),
              V
            );
          Sn(b, O);
        }
        return typeof O == "function" && $o(b, O), typeof O == "symbol" && Ms(b, O), null;
      }
      function j(b, T, O, V, ue) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return b = b.get(O) || null, h(T, b, "" + V, ue);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case On:
              return O = b.get(
                V.key === null ? O : V.key
              ) || null, b = rl(V._debugInfo), T = y(
                T,
                O,
                V,
                ue
              ), Fe = b, T;
            case oc:
              return b = b.get(
                V.key === null ? O : V.key
              ) || null, p(T, b, V, ue);
            case na:
              var Ye = rl(V._debugInfo);
              return V = Ja(V), T = j(
                b,
                T,
                O,
                V,
                ue
              ), Fe = Ye, T;
          }
          if (bl(V) || ze(V))
            return O = b.get(O) || null, b = rl(V._debugInfo), T = z(
              T,
              O,
              V,
              ue,
              null
            ), Fe = b, T;
          if (typeof V.then == "function")
            return Ye = rl(V._debugInfo), T = j(
              b,
              T,
              O,
              xn(V),
              ue
            ), Fe = Ye, T;
          if (V.$$typeof === Fn)
            return j(
              b,
              T,
              O,
              zs(T, V),
              ue
            );
          Sn(T, V);
        }
        return typeof V == "function" && $o(T, V), typeof V == "symbol" && Ms(T, V), null;
      }
      function le(b, T, O, V) {
        if (typeof O != "object" || O === null) return V;
        switch (O.$$typeof) {
          case On:
          case oc:
            He(b, T, O);
            var ue = O.key;
            if (typeof ue != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(ue);
              break;
            }
            if (!V.has(ue)) {
              V.add(ue);
              break;
            }
            ce(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ue
              );
            });
            break;
          case na:
            O = Ja(O), le(b, T, O, V);
        }
        return V;
      }
      function oe(b, T, O, V) {
        for (var ue = null, Ye = null, be = null, ve = T, Ke = T = 0, Pt = null; ve !== null && Ke < O.length; Ke++) {
          ve.index > Ke ? (Pt = ve, ve = null) : Pt = ve.sibling;
          var Cl = E(
            b,
            ve,
            O[Ke],
            V
          );
          if (Cl === null) {
            ve === null && (ve = Pt);
            break;
          }
          ue = le(
            b,
            Cl,
            O[Ke],
            ue
          ), e && ve && Cl.alternate === null && t(b, ve), T = f(Cl, T, Ke), be === null ? Ye = Cl : be.sibling = Cl, be = Cl, ve = Pt;
        }
        if (Ke === O.length)
          return a(b, ve), it && Yn(b, Ke), Ye;
        if (ve === null) {
          for (; Ke < O.length; Ke++)
            ve = R(b, O[Ke], V), ve !== null && (ue = le(
              b,
              ve,
              O[Ke],
              ue
            ), T = f(
              ve,
              T,
              Ke
            ), be === null ? Ye = ve : be.sibling = ve, be = ve);
          return it && Yn(b, Ke), Ye;
        }
        for (ve = i(ve); Ke < O.length; Ke++)
          Pt = j(
            ve,
            b,
            Ke,
            O[Ke],
            V
          ), Pt !== null && (ue = le(
            b,
            Pt,
            O[Ke],
            ue
          ), e && Pt.alternate !== null && ve.delete(
            Pt.key === null ? Ke : Pt.key
          ), T = f(
            Pt,
            T,
            Ke
          ), be === null ? Ye = Pt : be.sibling = Pt, be = Pt);
        return e && ve.forEach(function(Ro) {
          return t(b, Ro);
        }), it && Yn(b, Ke), Ye;
      }
      function Zt(b, T, O, V) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ue = null, Ye = null, be = T, ve = T = 0, Ke = null, Pt = null, Cl = O.next(); be !== null && !Cl.done; ve++, Cl = O.next()) {
          be.index > ve ? (Ke = be, be = null) : Ke = be.sibling;
          var Ro = E(b, be, Cl.value, V);
          if (Ro === null) {
            be === null && (be = Ke);
            break;
          }
          Pt = le(
            b,
            Ro,
            Cl.value,
            Pt
          ), e && be && Ro.alternate === null && t(b, be), T = f(Ro, T, ve), Ye === null ? ue = Ro : Ye.sibling = Ro, Ye = Ro, be = Ke;
        }
        if (Cl.done)
          return a(b, be), it && Yn(b, ve), ue;
        if (be === null) {
          for (; !Cl.done; ve++, Cl = O.next())
            be = R(b, Cl.value, V), be !== null && (Pt = le(
              b,
              be,
              Cl.value,
              Pt
            ), T = f(
              be,
              T,
              ve
            ), Ye === null ? ue = be : Ye.sibling = be, Ye = be);
          return it && Yn(b, ve), ue;
        }
        for (be = i(be); !Cl.done; ve++, Cl = O.next())
          Ke = j(
            be,
            b,
            ve,
            Cl.value,
            V
          ), Ke !== null && (Pt = le(
            b,
            Ke,
            Cl.value,
            Pt
          ), e && Ke.alternate !== null && be.delete(
            Ke.key === null ? ve : Ke.key
          ), T = f(
            Ke,
            T,
            ve
          ), Ye === null ? ue = Ke : Ye.sibling = Ke, Ye = Ke);
        return e && be.forEach(function(mT) {
          return t(b, mT);
        }), it && Yn(b, ve), ue;
      }
      function ot(b, T, O, V) {
        if (typeof O == "object" && O !== null && O.type === Mf && O.key === null && (ha(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case On:
              var ue = rl(O._debugInfo);
              e: {
                for (var Ye = O.key; T !== null; ) {
                  if (T.key === Ye) {
                    if (Ye = O.type, Ye === Mf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), V = o(
                          T,
                          O.props.children
                        ), V.return = b, V._debugOwner = O._owner, V._debugInfo = Fe, ha(O, V, b), b = V;
                        break e;
                      }
                    } else if (T.elementType === Ye || Gm(
                      T,
                      O
                    ) || typeof Ye == "object" && Ye !== null && Ye.$$typeof === na && Ja(Ye) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), V = o(T, O.props), _a(V, O), V.return = b, V._debugOwner = O._owner, V._debugInfo = Fe, b = V;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                O.type === Mf ? (V = Uc(
                  O.props.children,
                  b.mode,
                  V,
                  O.key
                ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Fe, ha(O, V, b), b = V) : (V = qi(
                  O,
                  b.mode,
                  V
                ), _a(V, O), V.return = b, V._debugInfo = Fe, b = V);
              }
              return b = d(b), Fe = ue, b;
            case oc:
              e: {
                for (ue = O, O = ue.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === ue.containerInfo && T.stateNode.implementation === ue.implementation) {
                      a(
                        b,
                        T.sibling
                      ), V = o(
                        T,
                        ue.children || []
                      ), V.return = b, b = V;
                      break e;
                    } else {
                      a(b, T);
                      break;
                    }
                  else t(b, T);
                  T = T.sibling;
                }
                V = gd(
                  ue,
                  b.mode,
                  V
                ), V.return = b, b = V;
              }
              return d(b);
            case na:
              return ue = rl(O._debugInfo), O = Ja(O), b = ot(
                b,
                T,
                O,
                V
              ), Fe = ue, b;
          }
          if (bl(O))
            return ue = rl(O._debugInfo), b = oe(
              b,
              T,
              O,
              V
            ), Fe = ue, b;
          if (ze(O)) {
            if (ue = rl(O._debugInfo), Ye = ze(O), typeof Ye != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var be = Ye.call(O);
            return be === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(be) !== "[object Generator]") && (ob || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), ob = !0) : O.entries !== Ye || BS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), BS = !0), b = Zt(
              b,
              T,
              be,
              V
            ), Fe = ue, b;
          }
          if (typeof O.then == "function")
            return ue = rl(O._debugInfo), b = ot(
              b,
              T,
              xn(O),
              V
            ), Fe = ue, b;
          if (O.$$typeof === Fn)
            return ot(
              b,
              T,
              zs(b, O),
              V
            );
          Sn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ue = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), V = o(T, ue), V.return = b, b = V) : (a(b, T), V = Lo(
          ue,
          b.mode,
          V
        ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Fe, b = V), d(b)) : (typeof O == "function" && $o(b, O), typeof O == "symbol" && Ms(b, O), a(b, T));
      }
      return function(b, T, O, V) {
        var ue = Fe;
        Fe = null;
        try {
          Jp = 0;
          var Ye = ot(
            b,
            T,
            O,
            V
          );
          return lm = null, Ye;
        } catch (Pt) {
          if (Pt === tm || Pt === ig) throw Pt;
          var be = U(29, Pt, null, b.mode);
          be.lanes = V, be.return = b;
          var ve = be._debugInfo = Fe;
          if (be._debugOwner = b._debugOwner, be._debugTask = b._debugTask, ve != null) {
            for (var Ke = ve.length - 1; 0 <= Ke; Ke--)
              if (typeof ve[Ke].stack == "string") {
                be._debugOwner = ve[Ke], be._debugTask = ve[Ke].debugTask;
                break;
              }
          }
          return be;
        } finally {
          Fe = ue;
        }
      };
    }
    function jt(e, t) {
      var a = bl(e);
      return e = !a && typeof ze(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function nt(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function pu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ol(e) {
      return {
        lane: e,
        tag: hb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, qS === i && !pb) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), pb = !0;
      }
      return (dt & Il) !== oa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Ts(e), xm(e, null, a), t) : (Qo(e, i, t, a), Ts(e));
    }
    function bn(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, rs(e, a);
      }
    }
    function Cs(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function ko() {
      if (jS) {
        var e = em;
        if (e !== null) throw e;
      }
    }
    function gu(e, t, a, i) {
      jS = !1;
      var o = e.updateQueue;
      Wf = !1, qS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var z = e.alternate;
        z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== d && (h === null ? z.firstBaseUpdate = p : h.next = p, z.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, z = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, j = E !== h.lane;
          if (j ? (Ie & E) === E : (i & E) === E) {
            E !== 0 && E === Br && (jS = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              E = e;
              var le = h, oe = t, Zt = a;
              switch (le.tag) {
                case mb:
                  if (le = le.payload, typeof le == "function") {
                    Ih = !0;
                    var ot = le.call(
                      Zt,
                      R,
                      oe
                    );
                    if (E.mode & Ba) {
                      re(!0);
                      try {
                        le.call(Zt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    Ih = !1, R = ot;
                    break e;
                  }
                  R = le;
                  break e;
                case YS:
                  E.flags = E.flags & -65537 | 128;
                case hb:
                  if (ot = le.payload, typeof ot == "function") {
                    if (Ih = !0, le = ot.call(
                      Zt,
                      R,
                      oe
                    ), E.mode & Ba) {
                      re(!0);
                      try {
                        ot.call(Zt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    Ih = !1;
                  } else le = ot;
                  if (le == null) break e;
                  R = ke({}, R, le);
                  break e;
                case yb:
                  Wf = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, j && (e.flags |= 8192), j = o.callbacks, j === null ? o.callbacks = [E] : j.push(E));
          } else
            j = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = j, y = R) : z = z.next = j, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            j = h, h = j.next, j.next = null, o.lastBaseUpdate = j, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), Pf |= d, e.lanes = d, e.memoizedState = R;
      }
      qS = null;
    }
    function Xi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Fm(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Xi(a[e], t);
    }
    function Wo(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Xi(a[e], t);
    }
    function _d(e, t) {
      var a = pc;
      qe(og, a, e), qe(am, t, e), pc = a | t.baseLanes;
    }
    function ni(e) {
      qe(og, pc, e), qe(
        am,
        am.current,
        e
      );
    }
    function wn(e) {
      pc = og.current, ye(am, e), ye(og, e);
    }
    function ma(e) {
      var t = e.alternate;
      qe(
        Ml,
        Ml.current & nm,
        e
      ), qe(tu, e, e), Ju === null && (t === null || am.current !== null || t.memoizedState !== null) && (Ju = e);
    }
    function Xn(e) {
      qe(Ml, Ml.current, e), qe(tu, e, e), Ju === null && (Ju = e);
    }
    function Rd(e) {
      e.tag === 22 ? (qe(Ml, Ml.current, e), qe(tu, e, e), Ju === null && (Ju = e)) : Su(e);
    }
    function Su(e) {
      qe(Ml, Ml.current, e), qe(
        tu,
        tu.current,
        e
      );
    }
    function Yl(e) {
      ye(tu, e), Ju === e && (Ju = null), ye(Ml, e);
    }
    function xc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || dr(a) || $y(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Ne() {
      var e = x;
      $u === null ? $u = [e] : $u.push(e);
    }
    function K() {
      var e = x;
      if ($u !== null && (Ao++, $u[Ao] !== e)) {
        var t = se(Be);
        if (!vb.has(t) && (vb.add(t), $u !== null)) {
          for (var a = "", i = 0; i <= Ao; i++) {
            var o = $u[i], f = i === Ao ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ui(e) {
      e == null || bl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof e
      );
    }
    function Us() {
      var e = se(Be);
      Sb.has(e) || (Sb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function cl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Im(e, t) {
      if (kp) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          x
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!un(e[a], t[a])) return !1;
      return !0;
    }
    function Pm(e, t, a, i, o, f) {
      Eo = f, Be = t, $u = e !== null ? e._debugHookTypes : null, Ao = -1, kp = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(Be), xS.has(f) || (xS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? wS : $u !== null ? bb : GS, Gr = f = (t.mode & Ba) !== Me;
      var d = US(a, i, o);
      if (Gr = !1, im && (d = Hs(
        t,
        a,
        i,
        o
      )), f) {
        re(!0);
        try {
          d = Hs(
            t,
            a,
            i,
            o
          );
        } finally {
          re(!1);
        }
      }
      return dl(e, t), d;
    }
    function dl(e, t) {
      t._debugHookTypes = $u, t.dependencies === null ? To !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: To
      }) : t.dependencies._debugThenableState = To, G.H = Wp;
      var a = wt !== null && wt.next !== null;
      if (Eo = 0, $u = x = Ql = wt = Be = null, Ao = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), sg = !1, $p = 0, To = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ll || (e = e.dependencies, e !== null && Zo(e) && (Ll = !0)), Zp ? (Zp = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", gb.has(t) || xS.has(t) || (gb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Hs(e, t, a, i) {
      Be = e;
      var o = 0;
      do {
        if (im && (To = null), $p = 0, im = !1, o >= JE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, kp = !1, Ql = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ao = -1, G.H = Eb, f = US(t, a, i);
      } while (im);
      return f;
    }
    function Ns() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? qs(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (Be.flags |= 1024), t;
    }
    function Gc() {
      var e = rg !== 0;
      return rg = 0, e;
    }
    function Bs(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & bi) !== Me ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Qi(e) {
      if (sg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        sg = !1;
      }
      Eo = 0, $u = Ql = wt = Be = null, Ao = -1, x = null, im = !1, $p = rg = 0, To = null;
    }
    function gl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? Be.memoizedState = Ql = e : Ql = Ql.next = e, Ql;
    }
    function Tt() {
      if (wt === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = wt.next;
      var t = Ql === null ? Be.memoizedState : Ql.next;
      if (t !== null)
        Ql = t, wt = e;
      else {
        if (e === null)
          throw Be.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        wt = e, e = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Ql === null ? Be.memoizedState = Ql = e : Ql = Ql.next = e;
      }
      return Ql;
    }
    function Ys() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function qs(e) {
      var t = $p;
      return $p += 1, To === null && (To = zd()), e = Za(To, e, t), t = Be, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? wS : GS), e;
    }
    function ii(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return qs(e);
        if (e.$$typeof === Fn) return gt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ka(e) {
      var t = null, a = Be.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Be.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ys(), Be.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || kp)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = nS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function $a(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Fo(e, t, a) {
      var i = gl();
      if (a !== void 0) {
        var o = a(t);
        if (Gr) {
          re(!0);
          try {
            a(t);
          } finally {
            re(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Pg.bind(
        null,
        Be,
        e
      ), [i.memoizedState, e];
    }
    function wc(e) {
      var t = Tt();
      return Li(t, wt, e);
    }
    function Li(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, z = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (Ie & R) === R : (Eo & R) === R) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Br && (z = !0);
            else if ((Eo & E) === E) {
              p = p.next, E === Br && (z = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Be.lanes |= E, Pf |= E;
            R = p.action, Gr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            E = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Be.lanes |= R, Pf |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !un(f, e.memoizedState) && (Ll = !0, z && (a = em, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Xc(e) {
      var t = Tt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        un(f, t.memoizedState) || (Ll = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Io(e, t, a) {
      var i = Be, o = gl();
      if (it) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        um || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), um = !0);
      } else {
        if (f = t(), um || (a = t(), un(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), um = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ie & 127) !== 0 || ey(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Vc(
        Vi.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, bu(
        Ku | fn,
        { destroy: void 0 },
        ty.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Qc(e, t, a) {
      var i = Be, o = Tt(), f = it;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !um) {
        var d = t();
        un(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), um = !0);
      }
      (d = !un(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ll = !0), o = o.queue;
      var h = Vi.bind(null, i, o, e);
      if (zl(2048, fn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & Ku) {
        if (i.flags |= 2048, bu(
          Ku | fn,
          { destroy: void 0 },
          ty.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Eo & 127) !== 0 || ey(i, t, a);
      }
      return a;
    }
    function ey(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Be.updateQueue, t === null ? (t = Ys(), Be.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ty(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Zi(t) && ly(e);
    }
    function Vi(e, t, a) {
      return a(function() {
        Zi(t) && (mu(2, "updateSyncExternalStore()", e), ly(e));
      });
    }
    function Zi(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !un(e, a);
      } catch {
        return !0;
      }
    }
    function ly(e) {
      var t = ta(e, 2);
      t !== null && Ue(t, e, 2);
    }
    function Md(e) {
      var t = gl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Gr) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $a,
        lastRenderedState: e
      }, t;
    }
    function Ji(e) {
      e = Md(e);
      var t = e.queue, a = Yd.bind(null, Be, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Lc(e) {
      var t = gl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ls.bind(
        null,
        Be,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function js(e, t) {
      var a = Tt();
      return Po(a, wt, e, t);
    }
    function Po(e, t, a, i) {
      return e.baseState = a, Li(
        e,
        wt,
        typeof i == "function" ? i : $a
      );
    }
    function xs(e, t) {
      var a = Tt();
      return wt !== null ? Po(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function G0(e, t, a, i, o) {
      if (ql(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Ki(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Ki(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), ay(e, t, h);
        } catch (p) {
          Gs(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), ay(e, t, d);
        } catch (p) {
          Gs(e, t, p);
        }
    }
    function ay(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Zc, Zc), a.then(
        function(i) {
          ci(e, t, i);
        },
        function(i) {
          return Gs(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ci(e, t, a);
    }
    function ci(e, t, a) {
      t.status = "fulfilled", t.value = a, Cd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ki(e, a)));
    }
    function Gs(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Cd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Cd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function oi(e, t) {
      return t;
    }
    function ka(e, t) {
      if (it) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = Be;
            if (it) {
              if (It) {
                t: {
                  for (var o = It, f = Vu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = tn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === f1 || f === i2 ? o : null;
                }
                if (o) {
                  It = tn(
                    o.nextSibling
                  ), i = o.data === f1;
                  break e;
                }
              }
              yn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = gl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: t
      }, a.queue = i, a = Yd.bind(
        null,
        Be,
        i
      ), i.dispatch = a, i = Md(!1), f = Ls.bind(
        null,
        Be,
        !1,
        i.queue
      ), i = gl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = G0.bind(
        null,
        Be,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function $i(e) {
      var t = Tt();
      return Ud(t, wt, e);
    }
    function Ud(e, t, a) {
      if (t = Li(
        e,
        t,
        oi
      )[0], e = wc($a)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = qs(t);
        } catch (d) {
          throw d === tm ? ig : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Be.flags |= 2048, bu(
        Ku | fn,
        { destroy: void 0 },
        ny.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function ny(e, t) {
      e.action = t;
    }
    function ki(e) {
      var t = Tt(), a = wt;
      if (a !== null)
        return Ud(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function bu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Be.updateQueue, t === null && (t = Ys(), Be.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Hd(e) {
      var t = gl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Wi(e, t, a, i) {
      var o = gl();
      Be.flags |= e, o.memoizedState = bu(
        Ku | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function zl(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      wt !== null && i !== null && Im(i, wt.memoizedState.deps) ? o.memoizedState = bu(t, f, a, i) : (Be.flags |= e, o.memoizedState = bu(
        Ku | t,
        f,
        a,
        i
      ));
    }
    function Vc(e, t) {
      (Be.mode & bi) !== Me ? Wi(276826112, fn, e, t) : Wi(8390656, fn, e, t);
    }
    function w0(e) {
      Be.flags |= 4;
      var t = Be.updateQueue;
      if (t === null)
        t = Ys(), Be.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function ws(e) {
      var t = gl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((dt & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function ef(e) {
      var t = Tt().memoizedState;
      return w0({ ref: t, nextImpl: e }), function() {
        if ((dt & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function ya(e, t) {
      var a = 4194308;
      return (Be.mode & bi) !== Me && (a |= 134217728), Wi(a, lu, e, t);
    }
    function Wa(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Eu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Be.mode & bi) !== Me && (i |= 134217728), Wi(
        i,
        lu,
        Wa.bind(null, t, e),
        a
      );
    }
    function tf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, zl(
        4,
        lu,
        Wa.bind(null, t, e),
        a
      );
    }
    function Nd(e, t) {
      return gl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Qn(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Im(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function pa(e, t) {
      var a = gl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Gr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function $t(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Im(t, i[1]))
        return i[0];
      if (i = e(), Gr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function lf(e, t) {
      var a = gl();
      return At(a, e, t);
    }
    function Tu(e, t) {
      var a = Tt();
      return hl(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function Xe(e, t) {
      var a = Tt();
      return wt === null ? At(a, e, t) : hl(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function At(e, t, a) {
      return a === void 0 || (Eo & 1073741824) !== 0 && (Ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = rf(), Be.lanes |= e, Pf |= e, a);
    }
    function hl(e, t, a, i) {
      return un(a, t) ? a : am.current !== null ? (e = At(e, a, i), un(e, t) || (Ll = !0), e) : (Eo & 42) === 0 || (Eo & 1073741824) !== 0 && (Ie & 261930) === 0 ? (Ll = !0, e.memoizedState = a) : (e = rf(), Be.lanes |= e, Pf |= e, t);
    }
    function Zc() {
      G.asyncTransitions--;
    }
    function Jc(e, t, a, i, o) {
      var f = bt.p;
      bt.p = f !== 0 && f < Wl ? f : Wl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Ls(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Zc, Zc);
          var z = Od(
            y,
            i
          );
          Kc(
            e,
            t,
            z,
            aa(e)
          );
        } else
          Kc(
            e,
            t,
            i,
            aa(e)
          );
      } catch (R) {
        Kc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          aa(e)
        );
      } finally {
        bt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function fi(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Xs(e).queue;
      j0(e), Jc(
        e,
        o,
        t,
        Wr,
        a === null ? k : function() {
          return af(e), a(i);
        }
      );
    }
    function Xs(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Wr,
        baseState: Wr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: Wr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function af(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Xs(e);
      t.next === null && (t = e.alternate.memoizedState), Kc(
        e,
        t.next.queue,
        {},
        aa(e)
      );
    }
    function Fi() {
      var e = Md(!1);
      return e = Jc.bind(
        null,
        Be,
        e.queue,
        !0,
        !1
      ), gl().memoizedState = e, [!1, e];
    }
    function X0() {
      var e = wc($a)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function tl() {
      var e = Xc($a)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : qs(e),
        t
      ];
    }
    function si() {
      return gt(r0);
    }
    function Qs() {
      var e = gl(), t = Xt.identifierPrefix;
      if (it) {
        var a = po, i = yo;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = rg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = ZE++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Bd() {
      return gl().memoizedState = Q0.bind(
        null,
        Be
      );
    }
    function Q0(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = aa(a), o = Ol(i), f = vu(a, o, i);
            f !== null && (mu(i, "refresh()", e), Ue(f, a, i), bn(f, a, i)), e = Td(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function Pg(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ql(e) ? ol(t, o) : (o = Rc(e, t, o, i), o !== null && (mu(i, "dispatch()", e), Ue(o, e, i), Vs(o, t, i)));
    }
    function Yd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(e), Kc(e, t, a, i) && mu(i, "setState()", e);
    }
    function Kc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ql(e)) ol(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ti;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, un(y, h))
              return Qo(e, t, o, 0), Xt === null && pd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Rc(e, t, o, i), a !== null)
          return Ue(a, e, i), Vs(a, t, i), !0;
      }
      return !1;
    }
    function Ls(e, t, a, i) {
      if (G.T === null && Br === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Zy(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ql(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Rc(
          e,
          a,
          i,
          2
        ), t !== null && (mu(2, "setOptimistic()", e), Ue(t, e, 2));
    }
    function ql(e) {
      var t = e.alternate;
      return e === Be || t !== null && t === Be;
    }
    function ol(e, t) {
      im = sg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Vs(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, rs(e, a);
      }
    }
    function $c(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Hb.has(t) || (Hb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function nf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ba) {
        re(!0);
        try {
          f = a(i, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (t = Ve(t) || "Component", Rb.has(t) || (Rb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function qd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ba) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ve(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xo(a, i) || !Xo(o, f) : !0;
    }
    function Au(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", Ab.has(e) || (Ab.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), XS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Ou(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = ke({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function jd(e) {
      gS(e), console.warn(
        `%s

%s
`,
        cm ? "An error occurred in the <" + cm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function xd(e) {
      var t = cm ? "The above error occurred in the <" + cm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((QS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          m2 + " " + e[0],
          y2,
          qg + i + qg,
          p2
        ) : e.splice(
          0,
          0,
          m2,
          y2,
          qg + i + qg,
          p2
        ), e.unshift(console), i = dT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function uy(e) {
      gS(e);
    }
    function Zs(e, t) {
      try {
        cm = t.source ? se(t.source) : null, QS = null;
        var a = t.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function iy(e, t, a) {
      try {
        cm = a.source ? se(a.source) : null, QS = se(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Gd(e, t, a) {
      return a = Ol(a), a.tag = YS, a.payload = { element: null }, a.callback = function() {
        ce(t.source, Zs, e, t);
      }, a;
    }
    function wd(e) {
      return e = Ol(e), e.tag = YS, e;
    }
    function Xd(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Mc(a), ce(
            i.source,
            iy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Mc(a), ce(
          i.source,
          iy,
          t,
          a,
          i
        ), typeof o != "function" && (ts === null ? ts = /* @__PURE__ */ new Set([this]) : ts.add(this)), XE(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function cy(e, t, a, i, o) {
      if (a.flags |= 32768, ju && pf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && jn(
          t,
          a,
          o,
          !0
        ), it && (hc = !0), a = tu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ju === null ? hf() : a.alternate === null && sl === zo && (sl = mg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === cg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), ch(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === cg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), ch(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return ch(e, i, o), hf(), !1;
      }
      if (it)
        return hc = !0, t = tu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== OS && Os(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== OS && Os(
          sa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = sa(i, a), o = Gd(
          e.stateNode,
          i,
          o
        ), Cs(e, o), sl !== Ff && (sl = wr)), !1;
      var f = sa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (l0 === null ? l0 = [f] : l0.push(f), sl !== Ff && (sl = wr), t === null) return !0;
      i = sa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Gd(
              a.stateNode,
              i,
              e
            ), Cs(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ts === null || !ts.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = wd(o), Xd(
                o,
                e,
                a,
                i
              ), Cs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function jl(e, t, a, i) {
      t.child = e === null ? db(t, null, a, i) : xr(
        t,
        e.child,
        a,
        i
      );
    }
    function L0(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return wi(t), i = Pm(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Gc(), e !== null && !Ll ? (Bs(e, t, o), Ln(e, t, o)) : (it && h && Sd(t), t.flags |= 1, jl(e, t, i, o), t.child);
    }
    function oy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !wm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), t.tag = 15, t.type = a, uf(t, f), fy(
          e,
          t,
          a,
          i,
          o
        )) : (e = Cc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Jd(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Xo, a(d, i) && e.ref === t.ref)
          return Ln(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = hu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function fy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Xo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Ll = !1, t.pendingProps = i = f, Jd(e, o))
            (e.flags & 131072) !== 0 && (Ll = !0);
          else
            return t.lanes = e.lanes, Ln(e, t, o);
      }
      return hy(
        e,
        t,
        a,
        i,
        o
      );
    }
    function sy(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Up,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return ry(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ko(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? _d(t, f) : ni(t), Rd(t);
        else
          return i = t.lanes = 536870912, ry(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Ko(t, f.cachePool), _d(t, f), Su(t), t.memoizedState = null) : (e !== null && Ko(t, null), ni(t), Su(t));
      return jl(e, t, o, a), t.child;
    }
    function kc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Up,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function ry(e, t, a, i, o) {
      var f = ai();
      return f = f === null ? null : {
        parent: wl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Ko(t, null), ni(t), Rd(t), e !== null && jn(e, t, i, !0), t.childLanes = o, null;
    }
    function Js(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = $s(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function dy(e, t, a) {
      return xr(t, e.child, null, a), e = Js(
        t,
        t.pendingProps
      ), e.flags |= 2, Yl(t), t.memoizedState = null, e;
    }
    function V0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (it) {
          if (i.mode === "hidden")
            return e = Js(t, i), t.lanes = 536870912, kc(null, e);
          if (Xn(t), (e = It) ? (a = zt(
            e,
            Vu
          ), a = a !== null && a.data === Jr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: B0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Qm(a), i.return = t, t.child = i, za = t, It = null)) : a = null, a === null)
            throw la(t, e), yn(t);
          return t.lanes = 536870912, null;
        }
        return Js(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Xn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = dy(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (q0(), (a & 536870912) !== 0 && df(t), Ll || jn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Ll || o) {
          if (i = Xt, i !== null && (d = Sc(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ta(e, d), Ue(i, e, d), LS;
          hf(), t = dy(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, It = tn(
            d.nextSibling
          ), za = t, it = !0, Zf = null, hc = !1, eu = null, Vu = !1, e !== null && Y0(t, e), t = Js(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && df(t), e = hu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ks(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function hy(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ve(a) || "Unknown";
        Nb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Nb[f] = !0);
      }
      return t.mode & Ba && Ei.recordLegacyContextWarning(
        t,
        null
      ), e === null && (uf(t, t.type), a.contextTypes && (f = Ve(a) || "Unknown", Yb[f] || (Yb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), wi(t), a = Pm(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Gc(), e !== null && !Ll ? (Bs(e, t, o), Ln(e, t, o)) : (it && i && Sd(t), t.flags |= 1, jl(e, t, a, o), t.child);
    }
    function my(e, t, a, i, o, f) {
      return wi(t), Ao = -1, kp = e !== null && e.type !== t.type, t.updateQueue = null, a = Hs(
        t,
        i,
        a,
        o
      ), dl(e, t), i = Gc(), e !== null && !Ll ? (Bs(e, t, f), Ln(e, t, f)) : (it && i && Sd(t), t.flags |= 1, jl(e, t, a, f), t.child);
    }
    function Wc(e, t, a, i, o) {
      switch (vt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Xt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = wd(h), Xd(
            h,
            d,
            t,
            sa(f, t)
          ), Cs(t, h);
      }
      if (wi(t), t.stateNode === null) {
        if (d = Vf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Fn) && !Ub.has(a) && (Ub.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Mh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ve(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = gt(f)), f = new a(i, d), t.mode & Ba) {
          re(!0);
          try {
            f = new a(i, d);
          } finally {
            re(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = XS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Tb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ve(a) || "Component", Ob.has(d) || (Ob.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ve(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Db.has(f) || (Db.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Ve(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Cb.has(a) && (Cb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Mb.has(a) && (Mb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ve(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || zb.has(a) || (zb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ve(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || bl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, nt(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? gt(d) : Vf, f.state === i && (d = Ve(a) || "Component", _b.has(d) || (_b.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Ei.recordLegacyContextWarning(
          t,
          f
        ), Ei.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (nf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), XS.enqueueReplaceState(
          f,
          f.state,
          null
        )), gu(t, i, f, o), ko(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== Me && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = Ou(a, z), f.props = h;
        var R = f.context;
        y = a.contextType, d = Vf, typeof y == "object" && y !== null && (d = gt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || R !== d) && Au(
          t,
          f,
          i,
          d
        ), Wf = !1;
        var E = t.memoizedState;
        f.state = E, gu(t, i, f, o), ko(), R = t.memoizedState, z || E !== R || Wf ? (typeof p == "function" && (nf(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = Wf || qd(
          t,
          a,
          h,
          i,
          E,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== Me && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== Me && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & bi) !== Me && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, pu(e, t), d = t.memoizedProps, y = Ou(a, d), f.props = y, p = t.pendingProps, E = f.context, R = a.contextType, h = Vf, typeof R == "object" && R !== null && (h = gt(R)), z = a.getDerivedStateFromProps, (R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Au(
          t,
          f,
          i,
          h
        ), Wf = !1, E = t.memoizedState, f.state = E, gu(t, i, f, o), ko();
        var j = t.memoizedState;
        d !== p || E !== j || Wf || e !== null && e.dependencies !== null && Zo(e.dependencies) ? (typeof z == "function" && (nf(
          t,
          a,
          z,
          i
        ), j = t.memoizedState), (y = Wf || qd(
          t,
          a,
          y,
          i,
          E,
          j,
          h
        ) || e !== null && e.dependencies !== null && Zo(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, j, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          j,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = j), f.props = i, f.state = j, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Ks(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Di(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, cn = -1;
        else if (a = I1(h), t.mode & Ba) {
          re(!0);
          try {
            I1(h);
          } finally {
            re(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = xr(
          t,
          e.child,
          null,
          o
        ), t.child = xr(
          t,
          null,
          a,
          o
        )) : jl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Ln(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (om || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), om = !0), e;
    }
    function yy(e, t, a, i) {
      return xi(), t.flags |= 256, jl(e, t, a, i), t.child;
    }
    function uf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ve(t) || "Unknown", qb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), qb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ve(t) || "Unknown", Bb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Bb[t] = !0));
    }
    function cf(e) {
      return { baseLanes: e, cachePool: $m() };
    }
    function Qd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rn), e;
    }
    function Ld(e, t, a) {
      var i, o = t.pendingProps;
      je(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Ml.current & Kp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (it) {
          if (f ? ma(t) : Su(t), (e = It) ? (a = zt(
            e,
            Vu
          ), a = a !== null && a.data !== Jr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: B0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Qm(a), i.return = t, t.child = i, za = t, It = null)) : a = null, a === null)
            throw la(t, e), yn(t);
          return $y(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Su(t);
          var y = t.mode;
          return h = $s(
            { mode: "hidden", children: h },
            y
          ), o = Uc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = cf(a), o.childLanes = Qd(
            e,
            i,
            a
          ), t.memoizedState = VS, kc(
            null,
            o
          );
        }
        return ma(t), py(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ma(t), t.flags &= -257, t = Vd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Su(t), t.child = e.child, t.flags |= 128, t = null) : (Su(t), h = o.fallback, y = t.mode, o = $s(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Uc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, xr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = cf(a), o.childLanes = Qd(
              e,
              i,
              a
            ), t.memoizedState = VS, t = kc(
              null,
              o
            ));
          else if (ma(t), q0(), (a & 536870912) !== 0 && df(t), $y(
            z
          )) {
            if (i = z.nextSibling && z.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = R, i = h, o = y, z = E, h = f, y = z, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && AS.set(
              h,
              o
            ), Os(o), t = Vd(
              e,
              t,
              a
            );
          } else if (Ll || jn(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Ll || i) {
            if (i = Xt, i !== null && (o = Sc(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ta(
                e,
                o
              ), Ue(
                i,
                e,
                o
              ), LS;
            dr(
              z
            ) || hf(), t = Vd(
              e,
              t,
              a
            );
          } else
            dr(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, It = tn(
              z.nextSibling
            ), za = t, it = !0, Zf = null, hc = !1, eu = null, Vu = !1, e !== null && Y0(t, e), t = py(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Su(t), h = o.fallback, y = t.mode, E = e.child, z = E.sibling, o = hu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, z !== null ? h = hu(
        z,
        h
      ) : (h = Uc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, kc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = cf(a) : (y = h.cachePool, y !== null ? (E = wl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = $m(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Qd(
        e,
        i,
        a
      ), t.memoizedState = VS, kc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && df(t), ma(t), a = e.child, e = a.sibling, a = hu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function py(e, t) {
      return t = $s(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function $s(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e;
    }
    function Vd(e, t, a) {
      return xr(t, e.child, null, a), e = py(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function vy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ed(
        e.return,
        t,
        a
      );
    }
    function Zd(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function gy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Ml.current;
      if ((i = (h & Kp) !== 0) ? (h = h & nm | Kp, t.flags |= 128) : h &= nm, qe(Ml, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !jb[h])
        if (jb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", hg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (hg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (hg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (hg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (bl(d)) {
          for (h = 0; h < d.length; h++)
            if (!jt(
              d[h],
              h
            ))
              break e;
        } else if (h = ze(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!jt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (jl(e, t, d, a), it ? (ji(), d = Hp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && vy(e, a, t);
          else if (e.tag === 19)
            vy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && xc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Zd(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && xc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Zd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Zd(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ln(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), cn = -1, Pf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (jn(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = hu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = hu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Jd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Zo(e)));
    }
    function Z0(e, t, a) {
      switch (t.tag) {
        case 3:
          qt(
            t,
            t.stateNode.containerInfo
          ), pn(
            t,
            wl,
            e.memoizedState.cache
          ), xi();
          break;
        case 27:
        case 5:
          P(t);
          break;
        case 4:
          qt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          pn(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Xn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ma(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ld(
              e,
              t,
              a
            ) : (ma(t), e = Ln(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ma(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (jn(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return gy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), qe(
            Ml,
            Ml.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, sy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          pn(
            t,
            wl,
            e.memoizedState.cache
          );
      }
      return Ln(e, t, a);
    }
    function ks(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Cc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Ll = !0;
        else {
          if (!Jd(e, a) && (t.flags & 128) === 0)
            return Ll = !1, Z0(
              e,
              t,
              a
            );
          Ll = (e.flags & 131072) !== 0;
        }
      else
        Ll = !1, (i = it) && (ji(), i = (t.flags & 1048576) !== 0), i && (i = t.index, ji(), Lm(t, Hp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Ja(t.elementType), t.type = e, typeof e == "function")
            wm(e) ? (i = Ou(
              e,
              i
            ), t.tag = 1, t.type = e = Yi(e), t = Wc(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, uf(t, e), t.type = e = Yi(e), t = hy(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Cf) {
                t.tag = 11, t.type = e = vd(e), t = L0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Tr) {
                t.tag = 14, t = oy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === na && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ve(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return hy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Ou(
            i,
            t.pendingProps
          ), Wc(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (qt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, pu(e, t), gu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, pn(t, wl, i), i !== f.cache && ei(
              t,
              [wl],
              a,
              !0
            ), ko(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = yy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = sa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Os(o), t = yy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (It = tn(e.firstChild), za = t, it = !0, Zf = null, hc = !1, eu = null, Vu = !0, a = db(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (xi(), i === o) {
                t = Ln(
                  e,
                  t,
                  a
                );
                break e;
              }
              jl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Ks(e, t), e === null ? (a = Iy(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : it || (a = t.type, e = t.pendingProps, i = Qt(
            ln.current
          ), i = sr(
            i
          ).createElement(a), i[Wt] = t, i[Oa] = e, kt(i, a, e), he(i), t.stateNode = i) : t.memoizedState = Iy(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return P(t), e === null && it && (i = Qt(ln.current), o = L(), i = t.stateNode = pi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), hc || (o = Ua(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Hc(t, 0).serverProps = o)), za = t, Vu = !0, o = It, ic(t.type) ? (h1 = o, It = tn(
            i.firstChild
          )) : It = o), jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Ks(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && it && (f = L(), i = ms(
            t.type,
            f.ancestorInfo
          ), o = It, (d = !o) || (d = Ev(
            o,
            t.type,
            t.pendingProps,
            Vu
          ), d !== null ? (t.stateNode = d, hc || (f = Ua(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Hc(t, 0).serverProps = f)), za = t, It = tn(
            d.firstChild
          ), Vu = !1, f = !0) : f = !1, d = !f), d && (i && la(t, o), yn(t))), P(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Ef(o, f) ? i = null : d !== null && Ef(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = Pm(
            e,
            t,
            Ns,
            null,
            null,
            a
          ), r0._currentValue = o), Ks(e, t), jl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && it && (a = t.pendingProps, e = L(), i = e.ancestorInfo.current, a = i != null ? ys(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = It, (i = !e) || (i = Tv(
            e,
            t.pendingProps,
            Vu
          ), i !== null ? (t.stateNode = i, za = t, It = null, i = !0) : i = !1, i = !i), i && (a && la(t, e), yn(t))), null;
        case 13:
          return Ld(e, t, a);
        case 4:
          return qt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = xr(
            t,
            null,
            i,
            a
          ) : jl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return L0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return jl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || xb || (xb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), pn(t, i, f), jl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), wi(t), o = gt(o), i = US(
            i,
            o,
            void 0
          ), t.flags |= 1, jl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return oy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return fy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return gy(
            e,
            t,
            a
          );
        case 31:
          return V0(e, t, a);
        case 22:
          return sy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return wi(t), i = gt(wl), e === null ? (o = ai(), o === null && (o = Xt, f = Td(), o.pooledCache = f, Bc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, nt(t), pn(t, wl, o)) : ((e.lanes & a) !== 0 && (pu(e, t), gu(t, null, null, a), ko()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), pn(t, wl, i)) : (i = f.cache, pn(t, wl, i), i !== o.cache && ei(
            t,
            [wl],
            a,
            !0
          ))), jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function zu(e) {
      e.flags |= 4;
    }
    function Kd(e, t, a, i, o) {
      if ((t = (e.mode & qE) !== Me) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (qy()) e.flags |= 8192;
          else
            throw jr = cg, NS;
      } else e.flags &= -16777217;
    }
    function J0(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ku) !== kr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !at(t))
        if (qy()) e.flags |= 8192;
        else
          throw jr = cg, NS;
    }
    function of(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Mo() : 536870912, e.lanes |= t, Lr |= t);
    }
    function ff(e, t) {
      if (!it)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Mt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & We) !== Me) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & We) !== Me) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Sy(e, t, a) {
      var i = t.pendingProps;
      switch (bd(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Mt(t), null;
        case 1:
          return Mt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), qn(wl, t), _(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Nc(t) ? (Gi(), zu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, As())), Mt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (zu(t), f !== null ? (Mt(t), J0(
            t,
            f
          )) : (Mt(t), Kd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (zu(t), Mt(t), J0(
            t,
            f
          )) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && zu(t), Mt(t), Kd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (pe(t), a = Qt(ln.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && zu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            e = L(), Nc(t) ? Vm(t) : (e = pi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, zu(t));
          }
          return Mt(t), null;
        case 5:
          if (pe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && zu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            var d = L();
            if (Nc(t))
              Vm(t);
            else {
              switch (f = Qt(ln.current), ms(o, d.ancestorInfo), d = d.context, f = sr(f), d) {
                case pm:
                  f = f.createElementNS(
                    Je,
                    o
                  );
                  break;
                case Ng:
                  f = f.createElementNS(
                    we,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Je,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        we,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || an.call(o2, o) || (o2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Wt] = t, f[Oa] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (kt(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && zu(t);
            }
          }
          return Mt(t), Kd(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && zu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qt(ln.current), a = L(), Nc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !hc, i = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = zv(
                      e,
                      a,
                      i
                    ), o !== null && (Hc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = zv(
                      e,
                      a,
                      i
                    ), o !== null && (Hc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Wt] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Jy(e.nodeValue, a)), e || yn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && ys(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = sr(e).createTextNode(
                i
              ), e[Wt] = t, t.stateNode = e;
          }
          return Mt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = Nc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Wt] = t, Mt(t), (t.mode & We) !== Me && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Gi(), xi(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== Me && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = As(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (Yl(t), t) : (Yl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Mt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = Nc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Wt] = t, Mt(t), (t.mode & We) !== Me && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Gi(), xi(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== Me && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = As(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Yl(t), t) : (Yl(t), null);
          }
          return Yl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & We) !== Me && qc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), of(t, t.updateQueue), Mt(t), (t.mode & We) !== Me && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _(t), e === null && nc(
            t.stateNode.containerInfo
          ), Mt(t), null;
        case 10:
          return qn(t.type, t), Mt(t), null;
        case 19:
          if (ye(Ml, t), i = t.memoizedState, i === null) return Mt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) ff(i, !1);
            else {
              if (sl !== zo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = xc(e), f !== null) {
                    for (t.flags |= 128, ff(i, !1), e = f.updateQueue, t.updateQueue = e, of(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Xm(a, e), a = a.sibling;
                    return qe(
                      Ml,
                      Ml.current & nm | Kp,
                      t
                    ), it && Yn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Gl() > bg && (t.flags |= 128, o = !0, ff(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = xc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, of(t, e), ff(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !it)
                  return Mt(t), null;
              } else
                2 * Gl() - i.renderingStartTime > bg && a !== 536870912 && (t.flags |= 128, o = !0, ff(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Gl(), e.sibling = null, a = Ml.current, a = o ? a & nm | Kp : a & nm, qe(Ml, a, t), it && Yn(t, i.treeForkCount), e) : (Mt(t), null);
        case 22:
        case 23:
          return Yl(t), wn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), a = t.updateQueue, a !== null && of(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ye(Yr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qn(wl, t), Mt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function K0(e, t) {
      switch (bd(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qc(t), t) : null;
        case 3:
          return qn(wl, t), _(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Yl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qc(t), t) : null;
        case 13:
          if (Yl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            xi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qc(t), t) : null;
        case 19:
          return ye(Ml, t), null;
        case 4:
          return _(t), null;
        case 10:
          return qn(t.type, t), null;
        case 22:
        case 23:
          return Yl(t), wn(t), e !== null && ye(Yr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Me && qc(t), t) : null;
        case 24:
          return qn(wl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function by(e, t) {
      switch (bd(t), t.tag) {
        case 3:
          qn(wl, t), _(t);
          break;
        case 26:
        case 27:
        case 5:
          pe(t);
          break;
        case 4:
          _(t);
          break;
        case 31:
          t.memoizedState !== null && Yl(t);
          break;
        case 13:
          Yl(t);
          break;
        case 19:
          ye(Ml, t);
          break;
        case 10:
          qn(t.type, t);
          break;
        case 22:
        case 23:
          Yl(t), wn(t), e !== null && ye(Yr, t);
          break;
        case 24:
          qn(wl, t);
      }
    }
    function Du(e) {
      return (e.mode & We) !== Me;
    }
    function $0(e, t) {
      Du(e) ? (il(), ri(t, e), da()) : ri(t, e);
    }
    function $d(e, t, a) {
      Du(e) ? (il(), Ii(
        a,
        e,
        t
      ), da()) : Ii(
        a,
        e,
        t
      );
    }
    function ri(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & on) !== fg && (hm = !0), i = ce(
              t,
              QE,
              a
            ), (e & on) !== fg && (hm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & lu) !== 0 ? "useLayoutEffect" : (a.tag & on) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ce(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Ze(t, t.return, h);
      }
    }
    function Ii(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & on) !== fg && (hm = !0), o = t, ce(
                o,
                LE,
                o,
                a,
                h
              ), (e & on) !== fg && (hm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Ze(t, t.return, y);
      }
    }
    function Ws(e, t) {
      Du(e) ? (il(), ri(t, e), da()) : ri(t, e);
    }
    function kd(e, t, a) {
      Du(e) ? (il(), Ii(
        a,
        e,
        t
      ), da()) : Ii(
        a,
        e,
        t
      );
    }
    function Ey(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || om || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          ce(
            e,
            Wo,
            t,
            a
          );
        } catch (i) {
          Ze(e, e.return, i);
        }
      }
    }
    function Fs(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function k0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || om || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = Ou(
          e.type,
          a
        ), f = ce(
          e,
          Fs,
          t,
          o,
          i
        );
        a = Gb, f !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ze(e, e.return, d);
      }
    }
    function Wd(e, t, a) {
      a.props = Ou(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Du(e) ? (il(), ce(
        e,
        nb,
        e,
        t,
        a
      ), da()) : ce(
        e,
        nb,
        e,
        t,
        a
      );
    }
    function W0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Du(e))
            try {
              il(), e.refCleanup = t(a);
            } finally {
              da();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function Fc(e, t) {
      try {
        ce(e, W0, e);
      } catch (a) {
        Ze(e, t, a);
      }
    }
    function En(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Du(e))
              try {
                il(), ce(e, i);
              } finally {
                da(e);
              }
            else ce(e, i);
          } catch (o) {
            Ze(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Du(e))
              try {
                il(), ce(e, a, null);
              } finally {
                da(e);
              }
            else ce(e, a, null);
          } catch (o) {
            Ze(e, t, o);
          }
        else a.current = null;
    }
    function Ty(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", ag && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function F0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", ag && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Pi(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ce(
          e,
          sv,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ze(e, e.return, o);
      }
    }
    function Fd(e, t, a) {
      try {
        ce(
          e,
          vh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ze(e, e.return, i);
      }
    }
    function Ay(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ic(e.type) || e.tag === 4;
    }
    function Id(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ay(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && ic(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function sf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (dv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (dv(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hn));
      else if (i !== 4 && (i === 27 && ic(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (sf(e, t, a), e = e.sibling; e !== null; )
          sf(e, t, a), e = e.sibling;
    }
    function Is(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && ic(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Is(e, t, a), e = e.sibling; e !== null; )
          Is(e, t, a), e = e.sibling;
    }
    function Oy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ay(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Id(e), Is(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (gh(a), t.flags &= -33), t = Id(e), Is(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Id(e), sf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function zy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ce(
          e,
          Bu,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ze(e, e.return, i);
      }
    }
    function Dy(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function eS(e, t) {
      if (e = e.containerInfo, s1 = jg, e = hd(e), Nm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, z = 0, R = e, E = null;
              t: for (; ; ) {
                for (var j; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (j = R.firstChild) !== null; )
                  E = R, R = j;
                for (; ; ) {
                  if (R === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++z === i && (y = d), (j = R.nextSibling) !== null) break;
                  R = E, E = R.parentNode;
                }
                R = j;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (r1 = {
        focusedElem: e,
        selectionRange: a
      }, jg = !1, ca = t; ca !== null; )
        if (t = ca, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ca = e;
        else
          for (; ca !== null; ) {
            switch (e = t = ca, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && k0(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Af(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Af(e);
                        break;
                      default:
                        e.textContent = "";
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, ca = e;
              break;
            }
            ca = t.return;
          }
    }
    function Pd(e, t, a) {
      var i = Kt(), o = vn(), f = Va(), d = gn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Fa(e, a), h & 4 && $0(a, lu | Ku);
          break;
        case 1:
          if (Fa(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || om || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), Du(a) ? (il(), ce(
                a,
                HS,
                a,
                e
              ), da()) : ce(
                a,
                HS,
                a,
                e
              );
            else {
              var y = Ou(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || om || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), Du(a) ? (il(), ce(
                a,
                tb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), da()) : ce(
                a,
                tb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ey(a), h & 512 && Fc(a, a.return);
          break;
        case 3:
          if (t = yu(), Fa(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              ce(
                a,
                Wo,
                h,
                y
              );
            } catch (z) {
              Ze(a, a.return, z);
            }
          }
          e.effectDuration += Jo(t);
          break;
        case 27:
          t === null && h & 4 && zy(a);
        case 26:
        case 5:
          if (Fa(e, a), t === null) {
            if (h & 4) Pi(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                ce(
                  a,
                  rv,
                  y,
                  e,
                  t,
                  a
                );
              } catch (z) {
                Ze(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && Fc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = yu(), Fa(e, a), e = a.stateNode, e.effectDuration += ra(h);
            try {
              ce(
                a,
                Ty,
                a,
                t,
                Jf,
                e.effectDuration
              );
            } catch (z) {
              Ze(a, a.return, z);
            }
          } else Fa(e, a);
          break;
        case 31:
          Fa(e, a), h & 4 && Ry(e, a);
          break;
        case 13:
          Fa(e, a), h & 4 && My(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = hi.bind(
            null,
            a
          ), Av(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Oo, !h) {
            t = t !== null && t.memoizedState !== null || Vl, y = Oo;
            var p = Vl;
            Oo = h, (Vl = t) && !p ? (Vn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && md(
              a,
              Te,
              _e
            )) : Fa(e, a), Oo = y, Vl = p;
          }
          break;
        case 30:
          break;
        default:
          Fa(e, a);
      }
      (a.mode & We) !== Me && 0 <= Te && 0 <= _e && ((pl || 0.05 < fl) && Bn(
        a,
        Te,
        _e,
        fl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < _e - Te && (Dy(
        a.return.alternate,
        a.return
      ) || mn(
        a,
        Te,
        _e,
        "Mount"
      ))), Nl(i), La(o), nl = f, pl = d;
    }
    function ml(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ml(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Vt(e, t, a) {
      for (a = a.child; a !== null; )
        _y(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function _y(e, t, a) {
      if (_l && typeof _l.onCommitFiberUnmount == "function")
        try {
          _l.onCommitFiberUnmount(so, a);
        } catch (p) {
          qu || (qu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Kt(), o = vn(), f = Va(), d = gn();
      switch (a.tag) {
        case 26:
          Vl || En(a, t), Vt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Vl || En(a, t);
          var h = Zl, y = Dn;
          ic(a.type) && (Zl = a.stateNode, Dn = !1), Vt(
            e,
            t,
            a
          ), ce(
            a,
            vi,
            a.stateNode
          ), Zl = h, Dn = y;
          break;
        case 5:
          Vl || En(a, t);
        case 6:
          if (h = Zl, y = Dn, Zl = null, Vt(
            e,
            t,
            a
          ), Zl = h, Dn = y, Zl !== null)
            if (Dn)
              try {
                ce(
                  a,
                  mv,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Ze(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                ce(
                  a,
                  hv,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Ze(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Zl !== null && (Dn ? (e = Zl, lo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), io(e)) : lo(Zl, a.stateNode));
          break;
        case 4:
          h = Zl, y = Dn, Zl = a.stateNode.containerInfo, Dn = !0, Vt(
            e,
            t,
            a
          ), Zl = h, Dn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ii(
            on,
            a,
            t
          ), Vl || $d(
            a,
            t,
            lu
          ), Vt(
            e,
            t,
            a
          );
          break;
        case 1:
          Vl || (En(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Wd(
            a,
            t,
            h
          )), Vt(
            e,
            t,
            a
          );
          break;
        case 21:
          Vt(
            e,
            t,
            a
          );
          break;
        case 22:
          Vl = (h = Vl) || a.memoizedState !== null, Vt(
            e,
            t,
            a
          ), Vl = h;
          break;
        default:
          Vt(
            e,
            t,
            a
          );
      }
      (a.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
        a,
        Te,
        _e,
        fl,
        nl
      ), Nl(i), La(o), nl = f, pl = d;
    }
    function Ry(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          ce(
            t,
            Sh,
            e
          );
        } catch (a) {
          Ze(t, t.return, a);
        }
      }
    }
    function My(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ce(
            t,
            Wy,
            e
          );
        } catch (a) {
          Ze(t, t.return, a);
        }
    }
    function I0(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new wb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ec(e, t) {
      var a = I0(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), ju)
            if (fm !== null && sm !== null)
              pf(sm, fm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = eo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function va(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Kt(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (ic(y.type)) {
                  Zl = y.stateNode, Dn = !1;
                  break e;
                }
                break;
              case 5:
                Zl = y.stateNode, Dn = !1;
                break e;
              case 3:
              case 4:
                Zl = y.stateNode.containerInfo, Dn = !0;
                break e;
            }
            y = y.return;
          }
          if (Zl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          _y(o, f, d), Zl = null, Dn = !1, (d.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
            d,
            Te,
            _e,
            "Unmount"
          ), Nl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Ps(t, e), t = t.sibling;
    }
    function Ps(e, t) {
      var a = Kt(), i = vn(), o = Va(), f = gn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(t, e), ga(e), h & 4 && (Ii(
            on | Ku,
            e,
            e.return
          ), ri(on | Ku, e), $d(
            e,
            e.return,
            lu | Ku
          ));
          break;
        case 1:
          if (va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), h & 64 && Oo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Ai, va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[xf] || p[Wt] || p.namespaceURI === Je || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), kt(p, h, d), p[Wt] = e, he(p), h = p;
                        break e;
                      case "link":
                        var z = Df(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (z) {
                          for (var R = 0; R < z.length; R++)
                            if (p = z[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), kt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = Df(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < z.length; R++)
                            if (p = z[R], mt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), kt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Wt] = e, he(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  _v(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Th(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? _v(
                y,
                e.type,
                e.stateNode
              ) : Th(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && Fd(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), d !== null && h & 4 && Fd(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (va(t, e), ga(e), h & 512 && (Vl || d === null || En(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              ce(
                e,
                gh,
                y
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, Fd(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (ZS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(t, e), ga(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              ce(
                e,
                tS,
                y,
                d,
                h
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          }
          break;
        case 3:
          if (y = yu(), Bg = null, p = Ai, Ai = bh(t.containerInfo), va(t, e), Ai = p, ga(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ce(
                e,
                ky,
                t.containerInfo
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          ZS && (ZS = !1, P0(e)), t.effectDuration += Jo(
            y
          );
          break;
        case 4:
          h = Ai, Ai = bh(
            e.stateNode.containerInfo
          ), va(t, e), ga(e), Ai = h;
          break;
        case 12:
          h = yu(), va(t, e), ga(e), e.stateNode.effectDuration += ra(h);
          break;
        case 31:
          va(t, e), ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ec(e, h)));
          break;
        case 13:
          va(t, e), ga(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Sg = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ec(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, j = Oo, le = Vl;
          if (Oo = j || y, Vl = le || E, va(t, e), Vl = le, Oo = j, E && !y && !j && !le && (e.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && md(
            e,
            Te,
            _e
          ), ga(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Up : t._visibility | Up, !y || d === null || E || Oo || Vl || (tc(e), (e.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
              e,
              Te,
              _e,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  E = d = t;
                  try {
                    p = E.stateNode, y ? ce(
                      E,
                      pv,
                      p
                    ) : ce(
                      E,
                      Sv,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  E = t;
                  try {
                    z = E.stateNode, y ? ce(
                      E,
                      vv,
                      z
                    ) : ce(
                      E,
                      bv,
                      z,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  E = t;
                  try {
                    R = E.stateNode, y ? ce(
                      E,
                      yv,
                      R
                    ) : ce(
                      E,
                      gv,
                      E.stateNode
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ec(e, d))));
          break;
        case 19:
          va(t, e), ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ec(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(t, e), ga(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && ((pl || 0.05 < fl) && Bn(
        e,
        Te,
        _e,
        fl,
        nl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < _e - Te && (Dy(
        e.return.alternate,
        e.return
      ) || mn(
        e,
        Te,
        _e,
        "Mount"
      ))), Nl(a), La(i), nl = o, pl = f;
    }
    function ga(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ce(e, Oy, e);
        } catch (a) {
          Ze(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function P0(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          P0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Fa(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Pd(e, t.alternate, t), t = t.sibling;
    }
    function eh(e) {
      var t = Kt(), a = vn(), i = Va(), o = gn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $d(
            e,
            e.return,
            lu
          ), tc(e);
          break;
        case 1:
          En(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Wd(
            e,
            e.return,
            f
          ), tc(e);
          break;
        case 27:
          ce(
            e,
            vi,
            e.stateNode
          );
        case 26:
        case 5:
          En(e, e.return), tc(e);
          break;
        case 22:
          e.memoizedState === null && tc(e);
          break;
        case 30:
          tc(e);
          break;
        default:
          tc(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
        e,
        Te,
        _e,
        fl,
        nl
      ), Nl(t), La(a), nl = i, pl = o;
    }
    function tc(e) {
      for (e = e.child; e !== null; )
        eh(e), e = e.sibling;
    }
    function Cy(e, t, a, i) {
      var o = Kt(), f = vn(), d = Va(), h = gn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(
            e,
            a,
            i
          ), $0(a, lu);
          break;
        case 1:
          if (Vn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ce(
            a,
            HS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ce(
                a,
                Fm,
                t,
                e
              );
            } catch (p) {
              Ze(a, a.return, p);
            }
          }
          i && y & 64 && Ey(a), Fc(a, a.return);
          break;
        case 27:
          zy(a);
        case 26:
        case 5:
          Vn(
            e,
            a,
            i
          ), i && t === null && y & 4 && Pi(a), Fc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = yu(), Vn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ra(y);
            try {
              ce(
                a,
                Ty,
                a,
                t,
                Jf,
                i.effectDuration
              );
            } catch (p) {
              Ze(a, a.return, p);
            }
          } else
            Vn(
              e,
              a,
              i
            );
          break;
        case 31:
          Vn(
            e,
            a,
            i
          ), i && y & 4 && Ry(e, a);
          break;
        case 13:
          Vn(
            e,
            a,
            i
          ), i && y & 4 && My(e, a);
          break;
        case 22:
          a.memoizedState === null && Vn(
            e,
            a,
            i
          ), Fc(a, a.return);
          break;
        case 30:
          break;
        default:
          Vn(
            e,
            a,
            i
          );
      }
      (a.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
        a,
        Te,
        _e,
        fl,
        nl
      ), Nl(o), La(f), nl = d, pl = h;
    }
    function Vn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Cy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function er(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Bc(e), a != null && Ds(a));
    }
    function tr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Bc(t), e != null && Ds(e));
    }
    function Ia(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Uy(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Uy(e, t, a, i, o) {
      var f = Kt(), d = vn(), h = Va(), y = gn(), p = Qf, z = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & We) !== Me && 0 < t.actualStartTime && (t.flags & 1) !== 0 && yd(
            t,
            t.actualStartTime,
            o,
            Fl,
            a
          ), Ia(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && Ws(t, fn | Ku);
          break;
        case 1:
          (t.mode & We) !== Me && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Ym(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && yd(
            t,
            t.actualStartTime,
            o,
            Fl,
            a
          )), Ia(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = yu(), E = Fl;
          Fl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Ia(
            e,
            t,
            a,
            i,
            o
          ), Fl = E, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Bc(i), a != null && Ds(a))), e.passiveEffectDuration += Jo(
            R
          );
          break;
        case 12:
          if (z & 2048) {
            z = yu(), Ia(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += ra(z);
            try {
              ce(
                t,
                F0,
                t,
                t.alternate,
                Jf,
                e.passiveEffectDuration
              );
            } catch (j) {
              Ze(t, t.return, j);
            }
          } else
            Ia(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && Ym(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0) : Fl = !1, Ia(
            e,
            t,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 13:
          z = Fl, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R === null || R.dehydrated === null || E !== null && E.dehydrated !== null ? Fl = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, R = R.hydrationErrors, R !== null && Ym(
            t,
            t.actualStartTime,
            o,
            R
          )) : Fl = !0), Ia(
            e,
            t,
            a,
            i,
            o
          ), Fl = z;
          break;
        case 23:
          break;
        case 22:
          E = t.stateNode, R = t.alternate, t.memoizedState !== null ? E._visibility & mo ? Ia(
            e,
            t,
            a,
            i,
            o
          ) : Ic(
            e,
            t,
            a,
            i,
            o
          ) : E._visibility & mo ? Ia(
            e,
            t,
            a,
            i,
            o
          ) : (E._visibility |= mo, lc(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & We) === Me || Fl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && md(t, e, o), 0 <= Te && 0 <= _e && 0.05 < _e - Te && md(
            t,
            Te,
            _e
          ))), z & 2048 && er(
            R,
            t
          );
          break;
        case 24:
          Ia(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && tr(t.alternate, t);
          break;
        default:
          Ia(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & We) !== Me && ((e = !Fl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && mn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Te && 0 <= _e && ((pl || 0.05 < fl) && Bn(
        t,
        Te,
        _e,
        fl,
        nl
      ), e && 0.05 < _e - Te && mn(
        t,
        Te,
        _e,
        "Mount"
      ))), Nl(f), La(d), nl = h, pl = y, Qf = p;
    }
    function lc(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        lr(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function lr(e, t, a, i, o, f) {
      var d = Kt(), h = vn(), y = Va(), p = gn(), z = Qf;
      o && (t.mode & We) !== Me && 0 < t.actualStartTime && (t.flags & 1) !== 0 && yd(
        t,
        t.actualStartTime,
        f,
        Fl,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          lc(
            e,
            t,
            a,
            i,
            o,
            f
          ), Ws(t, fn);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & mo ? lc(
            e,
            t,
            a,
            i,
            o,
            f
          ) : Ic(
            e,
            t,
            a,
            i,
            f
          ) : (E._visibility |= mo, lc(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && er(
            t.alternate,
            t
          );
          break;
        case 24:
          lc(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && tr(t.alternate, t);
          break;
        default:
          lc(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
        t,
        Te,
        _e,
        fl,
        nl
      ), Nl(d), La(h), nl = y, pl = p, Qf = z;
    }
    function Ic(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, z = Qf;
          (f.mode & We) !== Me && 0 < f.actualStartTime && (f.flags & 1) !== 0 && yd(
            f,
            f.actualStartTime,
            p,
            Fl,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              Ic(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && er(f.alternate, f);
              break;
            case 24:
              Ic(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && tr(f.alternate, f);
              break;
            default:
              Ic(
                d,
                f,
                h,
                y,
                p
              );
          }
          Qf = z, f = t;
        }
    }
    function Pc(e, t, a) {
      if (e.subtreeFlags & Fp)
        for (e = e.child; e !== null; )
          th(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function th(e, t, a) {
      switch (e.tag) {
        case 26:
          Pc(
            e,
            t,
            a
          ), e.flags & Fp && e.memoizedState !== null && tp(
            a,
            Ai,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Pc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Ai;
          Ai = bh(
            e.stateNode.containerInfo
          ), Pc(
            e,
            t,
            a
          ), Ai = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Fp, Fp = 16777216, Pc(
            e,
            t,
            a
          ), Fp = i) : Pc(
            e,
            t,
            a
          ));
          break;
        default:
          Pc(
            e,
            t,
            a
          );
      }
    }
    function Hy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Pa(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Kt();
            ca = i, _u(
              i,
              e
            ), (i.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
              i,
              Te,
              _e,
              "Unmount"
            ), Nl(o);
          }
        Hy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          lh(e), e = e.sibling;
    }
    function lh(e) {
      var t = Kt(), a = vn(), i = Va(), o = gn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Pa(e), e.flags & 2048 && kd(
            e,
            e.return,
            fn | Ku
          );
          break;
        case 3:
          var f = yu();
          Pa(e), e.stateNode.passiveEffectDuration += Jo(f);
          break;
        case 12:
          f = yu(), Pa(e), e.stateNode.passiveEffectDuration += ra(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & mo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~mo, ah(e), (e.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
            e,
            Te,
            _e,
            "Disconnect"
          )) : Pa(e);
          break;
        default:
          Pa(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
        e,
        Te,
        _e,
        fl,
        nl
      ), Nl(t), La(a), pl = o, nl = i;
    }
    function ah(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Kt();
            ca = i, _u(
              i,
              e
            ), (i.mode & We) !== Me && 0 <= Te && 0 <= _e && 0.05 < _e - Te && mn(
              i,
              Te,
              _e,
              "Unmount"
            ), Nl(o);
          }
        Hy(e);
      }
      for (e = e.child; e !== null; )
        Ny(e), e = e.sibling;
    }
    function Ny(e) {
      var t = Kt(), a = vn(), i = Va(), o = gn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          kd(
            e,
            e.return,
            fn
          ), ah(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & mo && (f._visibility &= ~mo, ah(e));
          break;
        default:
          ah(e);
      }
      (e.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
        e,
        Te,
        _e,
        fl,
        nl
      ), Nl(t), La(a), pl = o, nl = i;
    }
    function _u(e, t) {
      for (; ca !== null; ) {
        var a = ca, i = a, o = t, f = Kt(), d = vn(), h = Va(), y = gn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            kd(
              i,
              o,
              fn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Bc(o));
            break;
          case 24:
            Ds(i.memoizedState.cache);
        }
        if ((i.mode & We) !== Me && 0 <= Te && 0 <= _e && (pl || 0.05 < fl) && Bn(
          i,
          Te,
          _e,
          fl,
          nl
        ), Nl(f), La(d), pl = y, nl = h, i = a.child, i !== null) i.return = a, ca = i;
        else
          e: for (a = e; ca !== null; ) {
            if (i = ca, f = i.sibling, d = i.return, ml(i), i === a) {
              ca = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ca = f;
              break e;
            }
            ca = d;
          }
      }
    }
    function By() {
      $E.forEach(function(e) {
        return e();
      });
    }
    function Yy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function aa(e) {
      if ((dt & Il) !== oa && Ie !== 0)
        return Ie & -Ie;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Zy()) : Mi();
    }
    function rf() {
      if (Rn === 0)
        if ((Ie & 536870912) === 0 || it) {
          var e = zr;
          zr <<= 1, (zr & 3932160) === 0 && (zr = 262144), Rn = e;
        } else Rn = 536870912;
      return e = tu.current, e !== null && (e.flags |= 32), Rn;
    }
    function Ue(e, t, a) {
      if (hm && console.error("useInsertionEffect must not schedule updates."), l1 && (Ag = !0), (e === Xt && (Nt === Xr || Nt === Qr) || e.cancelPendingCommit !== null) && (Ru(e, 0), Tn(
        e,
        Ie,
        Rn,
        !1
      )), Mn(e, a), (dt & Il) !== oa && e === Xt) {
        if (Yu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && se(tt) || "Unknown", t2.has(e) || (t2.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              e2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), e2 = !0);
          }
      } else
        ju && Al(e, t, a), ir(t), e === Xt && ((dt & Il) === oa && (es |= a), sl === Ff && Tn(
          e,
          Ie,
          Rn,
          !1
        )), Ma(e);
    }
    function ev(e, t, a) {
      if ((dt & (Il | au)) !== oa)
        throw Error("Should not already be working.");
      if (Ie !== 0 && tt !== null) {
        var i = tt, o = Gl();
        switch (K1) {
          case e0:
          case Xr:
            var f = jp;
            Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          case Qr:
            f = jp, Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ft && (i = o - jp, 3 > i || console.timeStamp(
              "Blocked",
              jp,
              o,
              Gu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || vl(e, t)) ? di(e, t) : mf(e, t, !0);
      var d = a;
      do {
        if (f === zo) {
          rm && !a && Tn(e, t, 0, !1), t = Nt, jp = Xl(), K1 = t;
          break;
        } else {
          if (i = Gl(), o = e.current.alternate, d && !lv(o)) {
            Nn(t), o = ia, f = i, !Ft || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                st,
                ct,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              st,
              ct,
              "error"
            )), ac(t, i), f = mf(e, t, !1), d = !1;
            continue;
          }
          if (f === wr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Nn(t), qm(
                ia,
                i,
                t,
                El
              ), ac(t, i), t = h;
              e: {
                i = e, f = d, d = l0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Ru(i, h).flags |= 256), h = mf(
                  i,
                  h,
                  !1
                ), h !== wr) {
                  if ($S && !y) {
                    i.errorRecoveryDisabledLanes |= f, es |= f, f = Ff;
                    break e;
                  }
                  i = sn, sn = d, i !== null && (sn === null ? sn = i : sn.push.apply(
                    sn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== wr) continue;
              i = Gl();
            }
          }
          if (f === Pp) {
            Nn(t), qm(
              ia,
              i,
              t,
              El
            ), ac(t, i), Ru(e, 0), Tn(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case zo:
              case Pp:
                throw Error("Root did not complete. This is a bug in React.");
              case Ff:
                if ((t & 4194048) !== t) break;
              case yg:
                Nn(t), C0(
                  ia,
                  i,
                  t,
                  El
                ), ac(t, i), o = t, (o & 127) !== 0 ? eg = i : (o & 4194048) !== 0 && (tg = i), Tn(
                  a,
                  t,
                  Rn,
                  !If
                );
                break e;
              case wr:
                sn = null;
                break;
              case mg:
              case Xb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              xt(
                a,
                o,
                t,
                sn,
                a0,
                gg,
                Rn,
                es,
                Lr,
                f,
                null,
                null,
                ia,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Sg + Vb - Gl(), 10 < d)) {
                if (Tn(
                  a,
                  t,
                  Rn,
                  !If
                ), gc(a, 0, !0) !== 0) break e;
                Oi = t, a.timeoutHandle = f2(
                  tv.bind(
                    null,
                    a,
                    o,
                    sn,
                    a0,
                    gg,
                    t,
                    Rn,
                    es,
                    Lr,
                    If,
                    f,
                    "Throttled",
                    ia,
                    i
                  ),
                  d
                );
                break e;
              }
              tv(
                a,
                o,
                sn,
                a0,
                gg,
                t,
                Rn,
                es,
                Lr,
                If,
                f,
                null,
                ia,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ma(e);
    }
    function tv(e, t, a, i, o, f, d, h, y, p, z, R, E, j) {
      e.timeoutHandle = $r;
      var le = t.subtreeFlags, oe = null;
      if ((le & 8192 || (le & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: hn
      }, th(t, f, oe), le = (f & 62914560) === f ? Sg - Gl() : (f & 4194048) === f ? Lb - Gl() : 0, le = Ah(oe, le), le !== null)) {
        Oi = f, e.cancelPendingCommit = le(
          xt.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            z,
            oe,
            oe.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < oe.count ? 0 < oe.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : oe.imgCount === 1 ? "Suspended on an Image" : 0 < oe.imgCount ? "Suspended on Images" : null,
            E,
            j
          )
        ), Tn(
          e,
          f,
          d,
          !p
        );
        return;
      }
      xt(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        z,
        oe,
        R,
        E,
        j
      );
    }
    function lv(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!un(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Tn(e, t, a, i) {
      t &= ~kS, t &= ~es, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Uo(e, a, t);
    }
    function en() {
      return (dt & (Il | au)) === oa ? (Cu(0), !1) : !0;
    }
    function nh() {
      if (tt !== null) {
        if (Nt === _n)
          var e = tt.return;
        else
          e = tt, Vo(), Qi(e), lm = null, Jp = 0, e = tt;
        for (; e !== null; )
          by(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function ac(e, t) {
      (e & 127) !== 0 && (Ur = t), (e & 4194048) !== 0 && (So = t), (e & 62914560) !== 0 && (Z1 = t), (e & 2080374784) !== 0 && (J1 = t);
    }
    function Ru(e, t) {
      Ft && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ct,
        "primary-light"
      ));
      var a = ia;
      if (ia = Xl(), Ie !== 0 && 0 < a) {
        if (Nn(Ie), sl === mg || sl === Ff)
          C0(
            a,
            ia,
            t,
            El
          );
        else {
          var i = ia, o = El;
          if (Ft && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                st,
                ct,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              st,
              ct,
              f
            );
          }
        }
        ac(Ie, ia);
      }
      if (a = El, El = null, (t & 127) !== 0) {
        El = Bp, o = 0 <= mc && mc < Ur ? Ur : mc, i = 0 <= Hr && Hr < Ur ? Ur : Hr, f = 0 <= i ? i : 0 <= o ? o : ia, 0 <= eg ? (Nn(2), U0(
          eg,
          f,
          t,
          a
        )) : lg & 127, a = o;
        var h = i, y = Yp, p = 0 < Ph, z = Kf === Np, R = Kf === Pv;
        if (o = ia, i = Bp, f = _S, d = RS, Ft) {
          if (st = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                st,
                ct,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              st,
              ct,
              E
            );
          }
          o > a && (h = z ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", z = R ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: st,
                trackGroup: ct,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        mc = -1.1, Kf = 0, RS = _S = null, eg = -1.1, Ph = Hr, Hr = -1.1, Ur = Xl();
      }
      if ((t & 4194048) !== 0 && (El = qp, o = 0 <= bo && bo < So ? So : bo, a = 0 <= Zu && Zu < So ? So : Zu, i = 0 <= $f && $f < So ? So : $f, f = 0 <= i ? i : 0 <= a ? a : ia, 0 <= tg ? (Nn(256), U0(
        tg,
        f,
        t,
        El
      )) : lg & 4194048, R = i, h = Nr, y = 0 < kf, p = MS === Pv, f = ia, i = qp, d = L1, z = V1, Ft && (st = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          st,
          ct,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        st,
        ct,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          st,
          ct,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        st,
        ct,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], z != null && R.push(["Component name", z]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: st,
            trackGroup: ct,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Zu = bo = -1.1, MS = 0, tg = -1.1, kf = $f, $f = -1.1, So = Xl()), (t & 62914560) !== 0 && (lg & 62914560) !== 0 && (Nn(4194304), jm(Z1, ia)), (t & 2080374784) !== 0 && (lg & 2080374784) !== 0 && (Nn(268435456), jm(J1, ia)), a = e.timeoutHandle, a !== $r && (e.timeoutHandle = $r, cT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Oi = 0, nh(), Xt = e, tt = a = hu(
        e.current,
        null
      ), Ie = t, Nt = _n, nu = null, If = !1, rm = vl(e, t), $S = !1, sl = zo, Lr = Rn = kS = es = Pf = 0, sn = l0 = null, gg = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - kl(i), f = 1 << o, t |= e[o], i &= ~f;
      return pc = t, pd(), e = j1(), 1e3 < e - q1 && (G.recentlyCreatedOwnerStacks = 0, q1 = e), Ei.discardPendingWarnings(), a;
    }
    function Zn(e, t) {
      Be = null, G.H = Wp, G.getCurrentStack = null, Yu = !1, Na = null, t === tm || t === ig ? (t = jc(), Nt = e0) : t === NS ? (t = jc(), Nt = Qb) : Nt = t === LS ? KS : t !== null && typeof t == "object" && typeof t.then == "function" ? t0 : pg, nu = t;
      var a = tt;
      a === null ? (sl = Pp, Zs(
        e,
        sa(t, e.current)
      )) : a.mode & We && Ad(a);
    }
    function qy() {
      var e = tu.current;
      return e === null ? !0 : (Ie & 4194048) === Ie ? Ju === null : (Ie & 62914560) === Ie || (Ie & 536870912) !== 0 ? e === Ju : !1;
    }
    function uh() {
      var e = G.H;
      return G.H = Wp, e === null ? Wp : e;
    }
    function jy() {
      var e = G.A;
      return G.A = KE, e;
    }
    function df(e) {
      El === null && (El = e._debugTask == null ? null : e._debugTask);
    }
    function hf() {
      sl = Ff, If || (Ie & 4194048) !== Ie && tu.current !== null || (rm = !0), (Pf & 134217727) === 0 && (es & 134217727) === 0 || Xt === null || Tn(
        Xt,
        Ie,
        Rn,
        !1
      );
    }
    function mf(e, t, a) {
      var i = dt;
      dt |= Il;
      var o = uh(), f = jy();
      if (Xt !== e || Ie !== t) {
        if (ju) {
          var d = e.memoizedUpdaters;
          0 < d.size && (pf(e, Ie), d.clear()), Ga(e, t);
        }
        a0 = null, Ru(e, t);
      }
      t = !1, d = sl;
      e: do
        try {
          if (Nt !== _n && tt !== null) {
            var h = tt, y = nu;
            switch (Nt) {
              case KS:
                nh(), d = yg;
                break e;
              case e0:
              case Xr:
              case Qr:
              case t0:
                tu.current === null && (t = !0);
                var p = Nt;
                if (Nt = _n, nu = null, yf(e, h, y, p), a && rm) {
                  d = zo;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = _n, nu = null, yf(e, h, y, p);
            }
          }
          xy(), d = sl;
          break;
        } catch (z) {
          Zn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Vo(), dt = i, G.H = o, G.A = f, tt === null && (Xt = null, Ie = 0, pd()), d;
    }
    function xy() {
      for (; tt !== null; ) ih(tt);
    }
    function di(e, t) {
      var a = dt;
      dt |= Il;
      var i = uh(), o = jy();
      if (Xt !== e || Ie !== t) {
        if (ju) {
          var f = e.memoizedUpdaters;
          0 < f.size && (pf(e, Ie), f.clear()), Ga(e, t);
        }
        a0 = null, bg = Gl() + Zb, Ru(e, t);
      } else
        rm = vl(
          e,
          t
        );
      e: do
        try {
          if (Nt !== _n && tt !== null)
            t: switch (t = tt, f = nu, Nt) {
              case pg:
                Nt = _n, nu = null, yf(
                  e,
                  t,
                  f,
                  pg
                );
                break;
              case Xr:
              case Qr:
                if (km(f)) {
                  Nt = _n, nu = null, Gy(t);
                  break;
                }
                t = function() {
                  Nt !== Xr && Nt !== Qr || Xt !== e || (Nt = vg), Ma(e);
                }, f.then(t, t);
                break e;
              case e0:
                Nt = vg;
                break e;
              case Qb:
                Nt = JS;
                break e;
              case vg:
                km(f) ? (Nt = _n, nu = null, Gy(t)) : (Nt = _n, nu = null, yf(
                  e,
                  t,
                  f,
                  vg
                ));
                break;
              case JS:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (d ? at(d) : h.stateNode.complete) {
                      Nt = _n, nu = null;
                      var y = h.sibling;
                      if (y !== null) tt = y;
                      else {
                        var p = h.return;
                        p !== null ? (tt = p, ar(p)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = _n, nu = null, yf(
                  e,
                  t,
                  f,
                  JS
                );
                break;
              case t0:
                Nt = _n, nu = null, yf(
                  e,
                  t,
                  f,
                  t0
                );
                break;
              case KS:
                nh(), sl = yg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? xy() : Sl();
          break;
        } catch (z) {
          Zn(e, z);
        }
      while (!0);
      return Vo(), G.H = i, G.A = o, dt = a, tt !== null ? zo : (Xt = null, Ie = 0, pd(), sl);
    }
    function Sl() {
      for (; tt !== null && !Bh(); )
        ih(tt);
    }
    function ih(e) {
      var t = e.alternate;
      (e.mode & We) !== Me ? (ti(e), t = ce(
        e,
        ks,
        t,
        e,
        pc
      ), Ad(e)) : t = ce(
        e,
        ks,
        t,
        e,
        pc
      ), e.memoizedProps = e.pendingProps, t === null ? ar(e) : tt = t;
    }
    function Gy(e) {
      var t = ce(e, xl, e);
      e.memoizedProps = e.pendingProps, t === null ? ar(e) : tt = t;
    }
    function xl(e) {
      var t = e.alternate, a = (e.mode & We) !== Me;
      switch (a && ti(e), e.tag) {
        case 15:
        case 0:
          t = my(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ie
          );
          break;
        case 11:
          t = my(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ie
          );
          break;
        case 5:
          Qi(e);
        default:
          by(t, e), e = tt = Xm(e, pc), t = ks(t, e, pc);
      }
      return a && Ad(e), t;
    }
    function yf(e, t, a, i) {
      Vo(), Qi(t), lm = null, Jp = 0;
      var o = t.return;
      try {
        if (cy(
          e,
          o,
          t,
          a,
          Ie
        )) {
          sl = Pp, Zs(
            e,
            sa(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        sl = Pp, Zs(
          e,
          sa(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (it || i === pg ? e = !0 : rm || (Ie & 536870912) !== 0 ? e = !1 : (If = e = !0, (i === Xr || i === Qr || i === e0 || i === t0) && (i = tu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), wy(t, e)) : ar(t);
    }
    function ar(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          wy(
            t,
            If
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ti(t), a = ce(
          t,
          Sy,
          a,
          t,
          pc
        ), (t.mode & We) !== Me && _s(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      sl === zo && (sl = Xb);
    }
    function wy(e, t) {
      do {
        var a = K0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & We) !== Me) {
          _s(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = a;
      } while (e !== null);
      sl = yg, tt = null;
    }
    function xt(e, t, a, i, o, f, d, h, y, p, z, R, E, j) {
      e.cancelPendingCommit = null;
      do
        nr();
      while (Jl !== ls);
      if (Ei.flushLegacyContextWarning(), Ei.flushPendingUnsafeLifecycleWarnings(), (dt & (Il | au)) !== oa)
        throw Error("Should not already be working.");
      if (Nn(a), p === wr ? qm(
        E,
        j,
        a,
        El
      ) : i !== null ? Wg(
        E,
        j,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        El
      ) : kg(
        E,
        j,
        a,
        El
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= TS, Ir(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (tt = Xt = null, Ie = 0), dm = t, as = e, Oi = a, IS = f, e1 = o, Fb = i, PS = j, Ib = R, zi = Eg, Pb = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vf(fo, function() {
          return f0 = window.event, zi === Eg && (zi = FS), ur(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), go = null, Jf = Xl(), R !== null && Fg(
          j,
          Jf,
          R,
          El
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null, o = bt.p, bt.p = Rl, d = dt, dt |= au;
          try {
            eS(e, t, a);
          } finally {
            dt = d, bt.p = o, G.T = i;
          }
        }
        Jl = Kb, Sa(), Mu(), Xy();
      }
    }
    function Sa() {
      if (Jl === Kb) {
        Jl = ls;
        var e = as, t = dm, a = Oi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = dt;
          dt |= au;
          try {
            fm = a, sm = e, Yc(), Ps(t, e), sm = fm = null, a = r1;
            var d = hd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && D0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Nm(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, E = R && R.defaultView || window;
                  if (E.getSelection) {
                    var j = E.getSelection(), le = h.textContent.length, oe = Math.min(
                      y.start,
                      le
                    ), Zt = y.end === void 0 ? oe : Math.min(y.end, le);
                    !j.extend && oe > Zt && (d = Zt, Zt = oe, oe = d);
                    var ot = z0(
                      h,
                      oe
                    ), b = z0(
                      h,
                      Zt
                    );
                    if (ot && b && (j.rangeCount !== 1 || j.anchorNode !== ot.node || j.anchorOffset !== ot.offset || j.focusNode !== b.node || j.focusOffset !== b.offset)) {
                      var T = R.createRange();
                      T.setStart(ot.node, ot.offset), j.removeAllRanges(), oe > Zt ? (j.addRange(T), j.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), j.addRange(T));
                    }
                  }
                }
              }
              for (R = [], j = h; j = j.parentNode; )
                j.nodeType === 1 && R.push({
                  element: j,
                  left: j.scrollLeft,
                  top: j.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var O = R[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            jg = !!s1, r1 = s1 = null;
          } finally {
            dt = f, bt.p = o, G.T = i;
          }
        }
        e.current = t, Jl = $b;
      }
    }
    function Mu() {
      if (Jl === $b) {
        Jl = ls;
        var e = Pb;
        if (e !== null) {
          Jf = Xl();
          var t = vo, a = Jf;
          !Ft || a <= t || console.timeStamp(
            e,
            t,
            a,
            st,
            ct,
            "secondary-light"
          );
        }
        e = as, t = dm, a = Oi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Rl;
          var f = dt;
          dt |= au;
          try {
            fm = a, sm = e, Yc(), Pd(
              e,
              t.alternate,
              t
            ), sm = fm = null;
          } finally {
            dt = f, bt.p = o, G.T = i;
          }
        }
        e = PS, t = Ib, vo = Xl(), e = t === null ? e : Jf, t = vo, a = zi === WS, i = El, go !== null ? H0(
          e,
          t,
          go,
          !1,
          i
        ) : !Ft || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            st,
            ct,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          st,
          ct,
          a ? "error" : "secondary-dark"
        )), Jl = kb;
      }
    }
    function Xy() {
      if (Jl === Wb || Jl === kb) {
        if (Jl === Wb) {
          var e = vo;
          vo = Xl();
          var t = vo, a = zi === WS;
          !Ft || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            st,
            ct,
            a ? " error" : "secondary-light"
          ), zi !== WS && (zi = Jb);
        }
        Jl = ls, Yh(), e = as;
        var i = dm;
        t = Oi, a = Fb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Jl = Tg : (Jl = ls, dm = as = null, Qy(
          e,
          e.pendingLanes
        ), Vr = 0, u0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (ts = null), o || fh(e), f = Ul(t), i = i.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Rl:
                var h = gp;
                break;
              case Wl:
                h = qh;
                break;
              case ua:
                h = fo;
                break;
              case rc:
                h = jh;
                break;
              default:
                h = fo;
            }
            _l.onCommitFiberRoot(
              so,
              i,
              h,
              d
            );
          } catch (R) {
            qu || (qu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (ju && e.memoizedUpdaters.clear(), By(), a !== null) {
          d = G.T, h = bt.p, bt.p = Rl, G.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], z = av(p.stack);
              ce(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            G.T = d, bt.p = h;
          }
        }
        (Oi & 3) !== 0 && nr(), Ma(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (ng = !0, e === t1 ? n0++ : (n0 = 0, t1 = e)) : n0 = 0, o || ac(t, vo), Cu(0);
      }
    }
    function av(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Qy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ds(t)));
    }
    function nr() {
      return Sa(), Mu(), Xy(), ur();
    }
    function ur() {
      if (Jl !== Tg) return !1;
      var e = as, t = IS;
      IS = 0;
      var a = Ul(Oi), i = ua > a ? ua : a;
      a = G.T;
      var o = bt.p;
      try {
        bt.p = i, G.T = null;
        var f = e1;
        e1 = null, i = as;
        var d = Oi;
        if (Jl = ls, dm = as = null, Oi = 0, (dt & (Il | au)) !== oa)
          throw Error("Cannot flush passive effects while already rendering.");
        Nn(d), l1 = !0, Ag = !1;
        var h = 0;
        if (go = null, h = Gl(), zi === Jb)
          jm(
            vo,
            h,
            wE
          );
        else {
          var y = vo, p = h, z = zi === FS;
          !Ft || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              st,
              ct,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            st,
            ct,
            "secondary-light"
          ));
        }
        y = dt, dt |= au;
        var R = i.current;
        Yc(), lh(R);
        var E = i.current;
        R = PS, Yc(), Uy(
          i,
          E,
          d,
          f,
          R
        ), fh(i), dt = y;
        var j = Gl();
        if (E = h, R = El, go !== null ? H0(
          E,
          j,
          go,
          !0,
          R
        ) : !Ft || j <= E || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            j,
            st,
            ct,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          j,
          st,
          ct,
          "secondary-dark"
        )), ac(d, j), Cu(0, !1), Ag ? i === u0 ? Vr++ : (Vr = 0, u0 = i) : Vr = 0, Ag = l1 = !1, _l && typeof _l.onPostCommitFiberRoot == "function")
          try {
            _l.onPostCommitFiberRoot(so, i);
          } catch (oe) {
            qu || (qu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var le = i.current.stateNode;
        return le.effectDuration = 0, le.passiveEffectDuration = 0, !0;
      } finally {
        bt.p = o, G.T = a, Qy(e, t);
      }
    }
    function ba(e, t, a) {
      t = sa(a, t), x0(t), t = Gd(e.stateNode, t, 2), e = vu(e, t, 2), e !== null && (Mn(e, 2), Ma(e));
    }
    function Ze(e, t, a) {
      if (hm = !1, e.tag === 3)
        ba(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            ba(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ts === null || !ts.has(i))) {
              e = sa(a, e), x0(e), a = wd(2), i = vu(t, a, 2), i !== null && (Xd(
                a,
                i,
                t,
                e
              ), Mn(i, 2), Ma(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function ch(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new kE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || ($S = !0, o.add(a), i = Ra.bind(null, e, t, a), ju && pf(e, a), t.then(i, i));
    }
    function Ra(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > mc && (Ur = mc = Xl(), Bp = Iv("Promise Resolved"), Kf = Pv) : (a & 4194048) !== 0 && 0 > Zu && (So = Zu = Xl(), qp = Iv("Promise Resolved"), MS = Pv), Yy() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (Ie & a) === a && (sl === Ff || sl === mg && (Ie & 62914560) === Ie && Gl() - Sg < Vb ? (dt & Il) === oa && Ru(e, 0) : kS |= a, Lr === Ie && (Lr = 0)), Ma(e);
    }
    function Ly(e, t) {
      t === 0 && (t = Mo()), e = ta(e, t), e !== null && (Mn(e, t), Ma(e));
    }
    function hi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Ly(e, a);
    }
    function eo(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Ly(e, a);
    }
    function Jn(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Aa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ce(
            o,
            oh,
            i,
            o
          ) : Jn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ce(
            o,
            oh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ce(
            o,
            Jn,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function oh(e, t) {
      re(!0);
      try {
        eh(t), Ny(t), Cy(e, t.alternate, t, !1), lr(e, t, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function fh(e) {
      var t = !0;
      e.current.mode & (Ba | bi) || (t = !1), Jn(
        e,
        e.current,
        t
      );
    }
    function An(e) {
      if ((dt & Il) === oa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", Og !== null) {
            if (Og.has(t)) return;
            Og.add(t);
          } else Og = /* @__PURE__ */ new Set([t]);
          ce(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function pf(e, t) {
      ju && e.memoizedUpdaters.forEach(function(a) {
        Al(e, a, t);
      });
    }
    function vf(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), IE) : vp(e, t);
    }
    function ir(e) {
      Yy() && G.actQueue === null && ce(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Ma(e) {
      e !== mm && e.next === null && (mm === null ? zg = mm = e : mm = mm.next = e), Dg = !0, G.actQueue !== null ? n1 || (n1 = !0, uv()) : a1 || (a1 = !0, uv());
    }
    function Cu(e, t) {
      if (!u1 && Dg) {
        u1 = !0;
        do
          for (var a = !1, i = zg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, cr(i, f));
            } else
              f = Ie, f = gc(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== $r
              ), (f & 3) === 0 || vl(i, f) || (a = !0, cr(i, f));
            i = i.next;
          }
        while (a);
        u1 = !1;
      }
    }
    function nv() {
      f0 = window.event, sh();
    }
    function sh() {
      Dg = n1 = a1 = !1;
      var e = 0;
      ns !== 0 && Ky() && (e = ns);
      for (var t = Gl(), a = null, i = zg; i !== null; ) {
        var o = i.next, f = gf(i, t);
        f === 0 ? (i.next = null, a === null ? zg = o : a.next = o, o === null && (mm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Dg = !0)), i = o;
      }
      Jl !== ls && Jl !== Tg || Cu(e), ns !== 0 && (ns = 0);
    }
    function gf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Fr(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = Ie, a = gc(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $r
      ), i = e.callbackNode, a === 0 || e === t && (Nt === Xr || Nt === Qr) || e.cancelPendingCommit !== null)
        return i !== null && rh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || vl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && i !== i1)
          rh(i);
        else return t;
        switch (Ul(a)) {
          case Rl:
          case Wl:
            a = qh;
            break;
          case ua:
            a = fo;
            break;
          case rc:
            a = jh;
            break;
          default:
            a = fo;
        }
        return i = Vy.bind(null, e), G.actQueue !== null ? (G.actQueue.push(i), a = i1) : a = vp(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && rh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Vy(e, t) {
      if (ng = ag = !1, f0 = window.event, Jl !== ls && Jl !== Tg)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (zi === Eg && (zi = FS), nr() && e.callbackNode !== a)
        return null;
      var i = Ie;
      return i = gc(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $r
      ), i === 0 ? null : (ev(
        e,
        i,
        t
      ), gf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Vy.bind(null, e) : null);
    }
    function cr(e, t) {
      if (nr()) return null;
      ag = ng, ng = !1, ev(e, t, !0);
    }
    function rh(e) {
      e !== i1 && e !== null && Nh(e);
    }
    function uv() {
      G.actQueue !== null && G.actQueue.push(function() {
        return sh(), null;
      }), oT(function() {
        (dt & (Il | au)) !== oa ? vp(
          gp,
          nv
        ) : sh();
      });
    }
    function Zy() {
      if (ns === 0) {
        var e = Br;
        e === 0 && (e = qf, qf <<= 1, (qf & 261888) === 0 && (qf = 256)), ns = e;
      }
      return ns;
    }
    function yt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (mt(e, "action"), ps("" + e));
    }
    function Ct(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ut(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = yt(
          (o[Oa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Oa] || null) ? yt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Zv(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (ns !== 0) {
                    var y = d ? Ct(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), fi(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ct(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), fi(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function et(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        gS(i);
      }
      e.currentTarget = null;
    }
    function Ot(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ce(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ce(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
        }
      }
    }
    function Re(e, t) {
      c1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ro];
      a === void 0 && (a = t[ro] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (dh(t, e, 2, !1), a.add(i));
    }
    function Uu(e, t, a) {
      c1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), dh(
        a,
        e,
        i,
        t
      );
    }
    function nc(e) {
      if (!e[_g]) {
        e[_g] = !0, wv.forEach(function(a) {
          a !== "selectionchange" && (c1.has(a) || Uu(a, !1, e), Uu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_g] || (t[_g] = !0, Uu("selectionchange", !1, t));
      }
    }
    function dh(e, t, a, i) {
      switch (Dh(t)) {
        case Rl:
          var o = ip;
          break;
        case Wl:
          o = $l;
          break;
        default:
          o = cp;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !oS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Kn(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = I(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      fd(function() {
        var p = f, z = Un(a), R = [];
        e: {
          var E = Y1.get(e);
          if (E !== void 0) {
            var j = Zv, le = e;
            switch (e) {
              case "keypress":
                if (vs(a) === 0) break e;
              case "keydown":
              case "keyup":
                j = hE;
                break;
              case "focusin":
                le = "focus", j = dS;
                break;
              case "focusout":
                le = "blur", j = dS;
                break;
              case "beforeblur":
              case "afterblur":
                j = dS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                j = E1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                j = tE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                j = pE;
                break;
              case U1:
              case H1:
              case N1:
                j = nE;
                break;
              case B1:
                j = gE;
                break;
              case "scroll":
              case "scrollend":
                j = P2;
                break;
              case "wheel":
                j = bE;
                break;
              case "copy":
              case "cut":
              case "paste":
                j = iE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                j = A1;
                break;
              case "toggle":
              case "beforetoggle":
                j = TE;
            }
            var oe = (t & 4) !== 0, Zt = !oe && (e === "scroll" || e === "scrollend"), ot = oe ? E !== null ? E + "Capture" : null : E;
            oe = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || ot === null || (O = ru(b, ot), O != null && oe.push(
                Gt(
                  b,
                  O,
                  T
                )
              )), Zt) break;
              b = b.return;
            }
            0 < oe.length && (E = new j(
              E,
              le,
              null,
              a,
              z
            ), R.push({
              event: E,
              listeners: oe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (E = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", E && a !== Ap && (le = a.relatedTarget || a.fromElement) && (I(le) || le[Si]))
              break e;
            if ((j || E) && (E = z.window === z ? z : (E = z.ownerDocument) ? E.defaultView || E.parentWindow : window, j ? (le = a.relatedTarget || a.toElement, j = p, le = le ? I(le) : null, le !== null && (Zt = lt(le), oe = le.tag, le !== Zt || oe !== 5 && oe !== 27 && oe !== 6) && (le = null)) : (j = null, le = p), j !== le)) {
              if (oe = E1, O = "onMouseLeave", ot = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (oe = A1, O = "onPointerLeave", ot = "onPointerEnter", b = "pointer"), Zt = j == null ? E : de(j), T = le == null ? E : de(le), E = new oe(
                O,
                b + "leave",
                j,
                a,
                z
              ), E.target = Zt, E.relatedTarget = T, O = null, I(z) === p && (oe = new oe(
                ot,
                b + "enter",
                le,
                a,
                z
              ), oe.target = T, oe.relatedTarget = Zt, O = oe), Zt = O, j && le)
                t: {
                  for (oe = to, ot = j, b = le, T = 0, O = ot; O; O = oe(O))
                    T++;
                  O = 0;
                  for (var V = b; V; V = oe(V))
                    O++;
                  for (; 0 < T - O; )
                    ot = oe(ot), T--;
                  for (; 0 < O - T; )
                    b = oe(b), O--;
                  for (; T--; ) {
                    if (ot === b || b !== null && ot === b.alternate) {
                      oe = ot;
                      break t;
                    }
                    ot = oe(ot), b = oe(b);
                  }
                  oe = null;
                }
              else oe = null;
              j !== null && hh(
                R,
                E,
                j,
                oe,
                !1
              ), le !== null && Zt !== null && hh(
                R,
                Zt,
                le,
                oe,
                !0
              );
            }
          }
          e: {
            if (E = p ? de(p) : window, j = E.nodeName && E.nodeName.toLowerCase(), j === "select" || j === "input" && E.type === "file")
              var ue = Bi;
            else if (Cm(E))
              if (M1)
                ue = Es;
              else {
                ue = Um;
                var Ye = $g;
              }
            else
              j = E.nodeName, !j || j.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && su(p.elementType) && (ue = Bi) : ue = Hm;
            if (ue && (ue = ue(e, p))) {
              Ss(
                R,
                ue,
                a,
                z
              );
              break e;
            }
            Ye && Ye(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Em(E, "number", E.value);
          }
          switch (Ye = p ? de(p) : window, e) {
            case "focusin":
              (Cm(Ye) || Ye.contentEditable === "true") && (Zh = Ye, mS = p, Cp = null);
              break;
            case "focusout":
              Cp = mS = Zh = null;
              break;
            case "mousedown":
              yS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              yS = !1, _0(
                R,
                a,
                z
              );
              break;
            case "selectionchange":
              if (DE) break;
            case "keydown":
            case "keyup":
              _0(
                R,
                a,
                z
              );
          }
          var be;
          if (hS)
            e: {
              switch (e) {
                case "compositionstart":
                  var ve = "onCompositionStart";
                  break e;
                case "compositionend":
                  ve = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ve = "onCompositionUpdate";
                  break e;
              }
              ve = void 0;
            }
          else
            Vh ? Go(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === O1 && (ve = "onCompositionStart");
          ve && (z1 && a.locale !== "ko" && (Vh || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && Vh && (be = zc()) : (Xf = z, fS = "value" in Xf ? Xf.value : Xf.textContent, Vh = !0)), Ye = $n(
            p,
            ve
          ), 0 < Ye.length && (ve = new T1(
            ve,
            e,
            null,
            a,
            z
          ), R.push({
            event: ve,
            listeners: Ye
          }), be ? ve.data = be : (be = Pu(a), be !== null && (ve.data = be)))), (be = OE ? Mm(e, a) : sd(e, a)) && (ve = $n(
            p,
            "onBeforeInput"
          ), 0 < ve.length && (Ye = new oE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), R.push({
            event: Ye,
            listeners: ve
          }), Ye.data = be)), ut(
            R,
            e,
            p,
            a,
            z
          );
        }
        Ot(R, t);
      });
    }
    function Gt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $n(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = ru(e, a), o != null && i.unshift(
          Gt(e, o, f)
        ), o = ru(e, t), o != null && i.push(
          Gt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function to(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function hh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = ru(a, f), p != null && d.unshift(
          Gt(a, p, y)
        )) : o || (p = ru(a, f), p != null && d.push(
          Gt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ea(e, t) {
      T0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || S1 || (S1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: xu,
        possibleRegistrationNames: Gf
      };
      su(e) || typeof t.is == "string" || Kg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ll(e, t, a, i) {
      t !== a && (a = kn(a), kn(t) !== a && (i[e] = t));
    }
    function or(e, t, a) {
      t.forEach(function(i) {
        a[mi(i)] = i === "style" ? uc(e) : e.getAttribute(i);
      });
    }
    function al(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function mh(e, t) {
      return e = e.namespaceURI === we || e.namespaceURI === Je ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function kn(e) {
      return xa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        _i(e)
      ), uu(e)), (typeof e == "string" ? e : "" + e).replace(PE, `
`).replace(eT, "");
    }
    function Jy(e, t) {
      return t = kn(t), kn(e) === t;
    }
    function St(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (ys(i, t, !1), t === "body" || t === "textarea" && i === "" || Oc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (ys("" + i, t, !1), t !== "body" && Oc(e, "" + i));
          break;
        case "className":
          ds(e, "class", i);
          break;
        case "tabIndex":
          ds(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ds(e, a, i);
          break;
        case "style":
          Dm(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ds(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          mt(i, a), i = ps("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Cg || (Cg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Mg || (Mg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Rg ? t !== "button" || o.type == null || o.type === "submit" || Rg ? typeof i == "function" && (o.name == null || n2 || (n2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Cg || (Cg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Mg || (Mg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Rg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Rg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && St(e, t, "name", o.name, o, null), St(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), St(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), St(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (St(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), St(e, t, "method", o.method, o, null), St(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          mt(i, a), i = ps("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), e.onclick = hn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Re("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Re("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          mt(i, a), a = ps("" + i), e.setAttributeNS(Zr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (mt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Ug[a] || (Ug[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (mt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (mt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (mt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Re("beforetoggle", e), Re("toggle", e), Ho(e, "popover", i);
          break;
        case "xlinkActuate":
          cu(
            e,
            Zr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          cu(
            e,
            Zr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          cu(
            e,
            Zr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          cu(
            e,
            Zr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          cu(
            e,
            Zr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          cu(
            e,
            Zr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          cu(
            e,
            o1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          cu(
            e,
            o1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          cu(
            e,
            o1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Ho(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          u2 || i == null || typeof i != "object" || (u2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = b0(a), Ho(e, a, i)) : xu.hasOwnProperty(a) && i != null && typeof i != "function" && al(a, i);
      }
    }
    function Sf(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Dm(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Oc(e, i) : (typeof i == "number" || typeof i == "bigint") && Oc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Re("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Re("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), e.onclick = hn);
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
          if (xu.hasOwnProperty(a))
            i != null && typeof i != "function" && al(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Oa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Ho(e, a, i);
            }
      }
    }
    function kt(e, t, a) {
      switch (Ea(t, a), t) {
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
          Re("error", e), Re("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    St(e, t, f, d, a, null);
                }
            }
          o && St(e, t, "srcSet", a.srcSet, a, null), i && St(e, t, "src", a.src, a, null);
          return;
        case "input":
          ea("input", a), Re("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var z = a[i];
              if (z != null)
                switch (i) {
                  case "name":
                    o = z;
                    break;
                  case "type":
                    d = z;
                    break;
                  case "checked":
                    y = z;
                    break;
                  case "defaultChecked":
                    p = z;
                    break;
                  case "value":
                    f = z;
                    break;
                  case "defaultValue":
                    h = z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (z != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    St(e, t, i, z, a, null);
                }
            }
          fa(e, a), td(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ea("select", a), Re("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  St(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          ld(e, a), t = f, a = d, e.multiple = !!i, t != null ? ou(e, !!i, t, !1) : a != null && ou(e, !!i, a, !0);
          return;
        case "textarea":
          ea("textarea", a), Re("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          bc(e, a), No(e, i, o, f);
          return;
        case "option":
          S0(e, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (i = a[y], i != null))
              switch (y) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  St(e, t, y, i, a, null);
              }
          return;
        case "dialog":
          Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
          break;
        case "iframe":
        case "object":
          Re("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < i0.length; i++)
            Re(i0[i], e);
          break;
        case "image":
          Re("error", e), Re("load", e);
          break;
        case "details":
          Re("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Re("error", e), Re("load", e);
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
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  St(e, t, p, i, a, null);
              }
          return;
        default:
          if (su(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && Sf(
                e,
                t,
                z,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && St(e, t, h, i, a, null));
    }
    function Dl(e, t, a, i) {
      switch (Ea(t, i), t) {
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
          var o = null, f = null, d = null, h = null, y = null, p = null, z = null;
          for (j in a) {
            var R = a[j];
            if (a.hasOwnProperty(j) && R != null)
              switch (j) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(j) || St(
                    e,
                    t,
                    j,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var E in i) {
            var j = i[E];
            if (R = a[E], i.hasOwnProperty(E) && (j != null || R != null))
              switch (E) {
                case "type":
                  f = j;
                  break;
                case "name":
                  o = j;
                  break;
                case "checked":
                  p = j;
                  break;
                case "defaultChecked":
                  z = j;
                  break;
                case "value":
                  d = j;
                  break;
                case "defaultValue":
                  h = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  j !== R && St(
                    e,
                    t,
                    E,
                    j,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || a2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), a2 = !0), !t || i || l2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), l2 = !0), Ui(
            e,
            d,
            h,
            y,
            p,
            z,
            f,
            o
          );
          return;
        case "select":
          j = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  j = y;
                default:
                  i.hasOwnProperty(f) || St(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && St(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = j, E != null ? ou(e, !!t, E, !1) : !!a != !!t && (i != null ? ou(e, !!t, i, !0) : ou(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          j = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  St(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  j = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && St(e, t, d, o, i, f);
              }
          Ec(e, E, j);
          return;
        case "option":
          for (var le in a)
            if (E = a[le], a.hasOwnProperty(le) && E != null && !i.hasOwnProperty(le))
              switch (le) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  St(
                    e,
                    t,
                    le,
                    null,
                    i,
                    E
                  );
              }
          for (y in i)
            if (E = i[y], j = a[y], i.hasOwnProperty(y) && E !== j && (E != null || j != null))
              switch (y) {
                case "selected":
                  e.selected = E && typeof E != "function" && typeof E != "symbol";
                  break;
                default:
                  St(
                    e,
                    t,
                    y,
                    E,
                    i,
                    j
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
          for (var oe in a)
            E = a[oe], a.hasOwnProperty(oe) && E != null && !i.hasOwnProperty(oe) && St(
              e,
              t,
              oe,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], j = a[p], i.hasOwnProperty(p) && E !== j && (E != null || j != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    p,
                    E,
                    i,
                    j
                  );
              }
          return;
        default:
          if (su(t)) {
            for (var Zt in a)
              E = a[Zt], a.hasOwnProperty(Zt) && E !== void 0 && !i.hasOwnProperty(Zt) && Sf(
                e,
                t,
                Zt,
                void 0,
                i,
                E
              );
            for (z in i)
              E = i[z], j = a[z], !i.hasOwnProperty(z) || E === j || E === void 0 && j === void 0 || Sf(
                e,
                t,
                z,
                E,
                i,
                j
              );
            return;
          }
      }
      for (var ot in a)
        E = a[ot], a.hasOwnProperty(ot) && E != null && !i.hasOwnProperty(ot) && St(e, t, ot, null, i, E);
      for (R in i)
        E = i[R], j = a[R], !i.hasOwnProperty(R) || E === j || E == null && j == null || St(e, t, R, E, i, j);
    }
    function mi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function uc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Hu(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Pl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || me.has(f) ? (Pl(d, f), i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = kn(i), kn(t) !== i && (a.style = uc(e)));
      }
    }
    function Ca(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (mt(i, t), e === "" + i)
              return;
        }
      ll(t, e, i, f);
    }
    function yh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ll(t, e, i, f);
    }
    function ph(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (mt(i, a), e === "" + i)
              return;
        }
      ll(t, e, i, f);
    }
    function bf(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (mt(i, t), e === "" + i))
              return;
        }
      ll(t, e, i, f);
    }
    function fr(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (mt(i, t), a = ps("" + i), e === a)
              return;
        }
      ll(t, e, i, f);
    }
    function Ua(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (su(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (xu.hasOwnProperty(y))
                typeof p != "function" && al(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ll(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = mh(e, p), ll(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Hu(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ci(
                      e,
                      "class",
                      p
                    ), ll(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Do && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Ci(
                      e,
                      y,
                      p
                    ), ll(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (xu.hasOwnProperty(p))
              typeof y != "function" && al(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ll(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = mh(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ca(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ca(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Hu(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ll(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ll(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ll(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), ll(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  fr(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === tT) {
                    f.delete(p.toLowerCase()), ll(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  fr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  fr(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  ph(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  ph(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  ph(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
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
                  yh(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var z = d = p, R = o;
                    if (f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (mt(y, d), h === "" + y)
                            break e;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, z = d = p, R = o, f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (mt(y, d), h === "" + y))
                            break e;
                      }
                    ll(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  bf(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  bf(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ca(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ca(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ca(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ca(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ca(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ca(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ca(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ca(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ca(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ca(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Ug[p] || (Ug[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), yh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = b0(p), d = !1, i.context === Do && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = Pn.hasOwnProperty(
                      z
                    ) && Pn[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, R = h, h = y, dn(R))
                      if (z.hasAttribute(R))
                        z = z.getAttribute(
                          R
                        ), mt(
                          h,
                          R
                        ), h = z === "" + h ? h : z;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (z = R.toLowerCase().slice(0, 5), z !== "data-" && z !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ll(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && or(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function iv(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ta(e) {
      switch (e) {
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
    function cv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Ta(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, R = y.initiatorType;
              z && Ta(R) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function sr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ov(e) {
      switch (e) {
        case Je:
          return pm;
        case we:
          return Ng;
        default:
          return Do;
      }
    }
    function yi(e, t) {
      if (e === Do)
        switch (t) {
          case "svg":
            return pm;
          case "math":
            return Ng;
          default:
            return Do;
        }
      return e === pm && t === "foreignObject" ? Do : e;
    }
    function Ef(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ky() {
      var e = window.event;
      return e && e.type === "popstate" ? e === d1 ? !1 : (d1 = e, !0) : (d1 = null, !1);
    }
    function Nu() {
      var e = window.event;
      return e && e !== f0 ? e.type : null;
    }
    function Tf() {
      var e = window.event;
      return e && e !== f0 ? e.timeStamp : -1.1;
    }
    function fv(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sv(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function rv() {
    }
    function vh(e, t, a, i) {
      Dl(e, t, a, i), e[Oa] = i;
    }
    function gh(e) {
      Oc(e, "");
    }
    function tS(e, t, a) {
      e.nodeValue = a;
    }
    function dv(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Oa] || null;
        if (t !== null) {
          var a = te(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, ce(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, ce(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function ic(e) {
      return e === "head";
    }
    function hv(e, t) {
      e.removeChild(t);
    }
    function mv(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function lo(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === o0 || a === Hg) {
            if (i === 0) {
              e.removeChild(o), io(t);
              return;
            }
            i--;
          } else if (a === c0 || a === us || a === Kr || a === ym || a === Jr)
            i++;
          else if (a === aT)
            vi(
              e.ownerDocument.documentElement
            );
          else if (a === uT) {
            a = e.ownerDocument.head, vi(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[xf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === nT && vi(e.ownerDocument.body);
        a = o;
      } while (a);
      io(t);
    }
    function rr(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === o0) {
            if (e === 0) break;
            e--;
          } else
            a !== c0 && a !== us && a !== Kr && a !== ym || e++;
        a = i;
      } while (a);
    }
    function yv(e) {
      rr(e, !0);
    }
    function pv(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function vv(e) {
      e.nodeValue = "";
    }
    function gv(e) {
      rr(e, !1);
    }
    function Sv(e, t) {
      t = t[iT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function bv(e, t) {
      e.nodeValue = t;
    }
    function Af(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Af(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ev(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[xf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          mt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = tn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Tv(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function zt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function dr(e) {
      return e.data === us || e.data === Kr;
    }
    function $y(e) {
      return e.data === ym || e.data === us && e.ownerDocument.readyState !== c2;
    }
    function Av(e, t) {
      var a = e.ownerDocument;
      if (e.data === Kr)
        e._reactRetry = t;
      else if (e.data !== us || a.readyState !== c2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function tn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === c0 || t === ym || t === us || t === Kr || t === Jr || t === f1 || t === i2)
            break;
          if (t === o0 || t === Hg)
            return null;
        }
      }
      return e;
    }
    function Ov(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[mi(f.name)] = f.name.toLowerCase() === "style" ? uc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Jr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function zv(e, t, a) {
      return a === null || a[lT] !== !0 ? (e.nodeValue === t ? e = null : (t = kn(t), e = kn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Of(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === o0 || a === Hg) {
            if (t === 0)
              return tn(e.nextSibling);
            t--;
          } else
            a !== c0 && a !== ym && a !== us && a !== Kr && a !== Jr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function ao(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === c0 || a === ym || a === us || a === Kr || a === Jr) {
            if (t === 0) return e;
            t--;
          } else
            a !== o0 && a !== Hg || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ky(e) {
      io(e);
    }
    function Sh(e) {
      io(e);
    }
    function Wy(e) {
      io(e);
    }
    function pi(e, t, a, i, o) {
      switch (o && ms(e, i.ancestorInfo), t = sr(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Bu(e, t, a, i) {
      if (!a[Si] && te(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      kt(a, e, t), a[Wt] = i, a[Oa] = t;
    }
    function vi(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function bh(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Fy(e, t, a) {
      var i = vm;
      if (i && typeof t == "string" && t) {
        var o = Rt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), h2.has(o) || (h2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), kt(t, "link", e), he(t), i.head.appendChild(t)));
      }
    }
    function Iy(e, t, a, i) {
      var o = (o = ln.current) ? bh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = no(a.href), t = De(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = no(a.href);
            var f = De(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: kr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              mr(e)
            )) && !f._p && (d.instance = f, d.state.loading = s0 | ku), !Wu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Wu.set(e, h), f || Dv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + hr(t) + `
  + ` + hr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + hr(t) + `
  + ` + hr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = uo(a), t = De(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function hr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : an.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : an.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : an.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function no(e) {
      return 'href="' + Rt(e) + '"';
    }
    function mr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Eh(e) {
      return ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Dv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = s0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= s0;
      }), t.addEventListener("error", function() {
        return i.loading |= r2;
      }), kt(t, "link", a), he(t), e.head.appendChild(t));
    }
    function uo(e) {
      return '[src="' + Rt(e) + '"]';
    }
    function yr(e) {
      return "script[async]" + e;
    }
    function Th(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Rt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, he(i), i;
            var o = ke({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), he(i), kt(i, "style", o), zf(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = no(a.href);
            var f = e.querySelector(
              mr(o)
            );
            if (f)
              return t.state.loading |= ku, t.instance = f, he(f), f;
            i = Eh(a), (o = Wu.get(o)) && Py(i, o), f = (e.ownerDocument || e).createElement("link"), he(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), kt(f, "link", i), t.state.loading |= ku, zf(f, a.precedence, e), t.instance = f;
          case "script":
            return f = uo(a.src), (o = e.querySelector(
              yr(f)
            )) ? (t.instance = o, he(o), o) : (i = a, (o = Wu.get(f)) && (i = ke({}, a), ep(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), he(o), kt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ku) === kr && (i = t.instance, t.state.loading |= ku, zf(i, a.precedence, e));
      return t.instance;
    }
    function zf(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Py(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ep(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Df(e, t, a) {
      if (Bg === null) {
        var i = /* @__PURE__ */ new Map(), o = Bg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Bg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[xf] || f[Wt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Je) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function _v(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Rv(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === pm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = iv(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function at(e) {
      return !(e.type === "stylesheet" && (e.state.loading & d2) === kr);
    }
    function tp(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ku) === kr) {
        if (a.instance === null) {
          var o = no(i.href), f = t.querySelector(
            mr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = _f.bind(e), t.then(e, e)), a.state.loading |= ku, a.instance = f, he(f);
            return;
          }
          f = t.ownerDocument || t, i = Eh(i), (o = Wu.get(o)) && Py(i, o), f = f.createElement("link"), he(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), kt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & d2) === kr && (e.count++, a = _f.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Ah(e, t) {
      return e.stylesheets && e.count === 0 && pr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && pr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, fT + t);
        0 < e.imgBytes && m1 === 0 && (m1 = 125 * cv() * rT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && pr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > m1 ? 50 : sT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function _f() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          pr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function pr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Yg = /* @__PURE__ */ new Map(), t.forEach(lp, e), Yg = null, _f.call(e));
    }
    function lp(e, t) {
      if (!(t.state.loading & ku)) {
        var a = Yg.get(e);
        if (a) var i = a.get(y1);
        else {
          a = /* @__PURE__ */ new Map(), Yg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(y1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(y1, o), a.set(d, o), this.count++, i = _f.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ku;
      }
    }
    function vr(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = $r, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Co(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Co(0), this.hiddenUpdates = Co(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function gr(e, t, a, i, o, f, d, h, y, p, z, R) {
      return e = new vr(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        R,
        h
      ), t = YE, f === !0 && (t |= Ba | bi), t |= We, f = U(3, null, null, t), e.current = f, f.stateNode = e, t = Td(), Bc(t), e.pooledCache = t, Bc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, nt(f), e;
    }
    function Mv(e) {
      return e ? (e = Vf, e) : Vf;
    }
    function Oh(e, t, a, i, o, f) {
      if (_l && typeof _l.onScheduleFiberRoot == "function")
        try {
          _l.onScheduleFiberRoot(so, i, a);
        } catch (d) {
          qu || (qu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Mv(o), i.context === null ? i.context = o : i.pendingContext = o, Yu && Na !== null && !v2 && (v2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(Na) || "Unknown"
      )), i = Ol(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = vu(e, i, t), a !== null && (mu(t, "root.render()", null), Ue(a, e, t), bn(a, e, t));
    }
    function Cv(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function ap(e, t) {
      Cv(e, t), (e = e.alternate) && Cv(e, t);
    }
    function np(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ta(e, 67108864);
        t !== null && Ue(t, e, 67108864), ap(e, 67108864);
      }
    }
    function up(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = aa(e);
        t = rn(t);
        var a = ta(e, t);
        a !== null && Ue(a, e, t), ap(e, t);
      }
    }
    function Ut() {
      return Na;
    }
    function ip(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Rl, cp(e, t, a, i);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function $l(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Wl, cp(e, t, a, i);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function cp(e, t, a, i) {
      if (jg) {
        var o = zh(i);
        if (o === null)
          Kn(
            e,
            t,
            i,
            xg,
            a
          ), _h(e, i);
        else if (Uv(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (_h(e, i), t & 4 && -1 < hT.indexOf(e)) {
          for (; o !== null; ) {
            var f = te(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = iu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ma(f), (dt & (Il | au)) === oa && (bg = Gl() + Zb, Cu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ta(f, 2), h !== null && Ue(h, f, 2), en(), ap(f, 2);
              }
            if (f = zh(i), f === null && Kn(
              e,
              t,
              i,
              xg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Kn(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function zh(e) {
      return e = Un(e), op(e);
    }
    function op(e) {
      if (xg = null, e = I(e), e !== null) {
        var t = lt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Tl(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Bt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return xg = e, null;
    }
    function Dh(e) {
      switch (e) {
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
          return Rl;
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
          return Wl;
        case "message":
          switch (Or()) {
            case gp:
              return Rl;
            case qh:
              return Wl;
            case fo:
            case jv:
              return ua;
            case jh:
              return rc;
            default:
              return ua;
          }
        default:
          return ua;
      }
    }
    function _h(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          is = null;
          break;
        case "dragenter":
        case "dragleave":
          cs = null;
          break;
        case "mouseover":
        case "mouseout":
          os = null;
          break;
        case "pointerover":
        case "pointerout":
          d0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          h0.delete(t.pointerId);
      }
    }
    function cc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = te(t), t !== null && np(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Uv(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return is = cc(
            is,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return cs = cc(
            cs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return os = cc(
            os,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return d0.set(
            f,
            cc(
              d0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, h0.set(
            f,
            cc(
              h0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function fp(e) {
      var t = I(e.target);
      if (t !== null) {
        var a = lt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Tl(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                up(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Bt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                up(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Rf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = zh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Ap !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Ap = o, a.target.dispatchEvent(i), Ap === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Ap = null;
        } else
          return t = te(a), t !== null && np(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Rh(e, t, a) {
      Rf(e) && a.delete(t);
    }
    function lS() {
      p1 = !1, is !== null && Rf(is) && (is = null), cs !== null && Rf(cs) && (cs = null), os !== null && Rf(os) && (os = null), d0.forEach(Rh), h0.forEach(Rh);
    }
    function Sr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, p1 || (p1 = !0, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        lS
      )));
    }
    function Hv(e) {
      Gg !== e && (Gg = e, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        function() {
          Gg === e && (Gg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (op(i || a) === null)
                continue;
              break;
            }
            var f = te(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), fi(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function io(e) {
      function t(y) {
        return Sr(y, e);
      }
      is !== null && Sr(is, e), cs !== null && Sr(cs, e), os !== null && Sr(os, e), d0.forEach(t), h0.forEach(t);
      for (var a = 0; a < fs.length; a++) {
        var i = fs[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < fs.length && (a = fs[0], a.blockedOn === null); )
        fp(a), a.blockedOn === null && fs.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Oa] || null;
          if (typeof f == "function")
            d || Hv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Oa] || null)
                h = d.formAction;
              else if (op(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Hv(a);
          }
        }
    }
    function Nv() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function sp(e) {
      this._internalRoot = e;
    }
    function Wn(e) {
      this._internalRoot = e;
    }
    function rp(e) {
      e[Si] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yl = Z2(), br = gm(), aS = J2(), ke = Object.assign, Bv = Symbol.for("react.element"), On = Symbol.for("react.transitional.element"), oc = Symbol.for("react.portal"), Mf = Symbol.for("react.fragment"), Aa = Symbol.for("react.strict_mode"), Er = Symbol.for("react.profiler"), Mh = Symbol.for("react.consumer"), Fn = Symbol.for("react.context"), Cf = Symbol.for("react.forward_ref"), co = Symbol.for("react.suspense"), Ha = Symbol.for("react.suspense_list"), Tr = Symbol.for("react.memo"), na = Symbol.for("react.lazy"), In = Symbol.for("react.activity"), nS = Symbol.for("react.memo_cache_sentinel"), Yv = Symbol.iterator, Uf = Symbol.for("react.client.reference"), bl = Array.isArray, G = br.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bt = aS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, uS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), dp = [], hp = [], gi = -1, fc = Yt(null), Hf = Yt(null), ln = Yt(null), sc = Yt(null), Nf = 0, qv, oo, Bf, mp, Ar, Ch, Uh;
    Ae.__reactDisabledLog = !0;
    var Yf, yp, Hh = !1, pp = new (typeof WeakMap == "function" ? WeakMap : Map)(), Na = null, Yu = !1, an = Object.prototype.hasOwnProperty, vp = yl.unstable_scheduleCallback, Nh = yl.unstable_cancelCallback, Bh = yl.unstable_shouldYield, Yh = yl.unstable_requestPaint, Gl = yl.unstable_now, Or = yl.unstable_getCurrentPriorityLevel, gp = yl.unstable_ImmediatePriority, qh = yl.unstable_UserBlockingPriority, fo = yl.unstable_NormalPriority, jv = yl.unstable_LowPriority, jh = yl.unstable_IdlePriority, Sp = yl.log, xv = yl.unstable_setDisableYieldValue, so = null, _l = null, qu = !1, ju = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Ri, bp = Math.log, xh = Math.LN2, qf = 256, zr = 262144, jf = 4194304, Rl = 2, Wl = 8, ua = 32, rc = 268435456, zn = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + zn, Oa = "__reactProps$" + zn, Si = "__reactContainer$" + zn, ro = "__reactEvents$" + zn, iS = "__reactListeners$" + zn, Gv = "__reactHandles$" + zn, Dr = "__reactResources$" + zn, xf = "__reactMarker$" + zn, wv = /* @__PURE__ */ new Set(), xu = {}, Gf = {}, Xv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, wf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ep = {}, Gh = {}, wh = /[\n"\\]/g, Tp = !1, Qv = !1, _r = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), g = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = g.concat(["button"]), Y = "dd dt li option optgroup p rp rt".split(" "), Q = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, J = {}, q = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, w = /([A-Z])/g, fe = /^ms-/, Oe = /^(?:webkit|moz|o)[A-Z]/, Ht = /^-ms-/, C = /-(.)/g, D = /;\s*$/, H = {}, Z = {}, Se = !1, rt = !1, me = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), we = "http://www.w3.org/1998/Math/MathML", Je = "http://www.w3.org/2000/svg", pt = /* @__PURE__ */ new Map([
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
    ]), Pn = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Lv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Xh = {}, K2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), $2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), S1 = !1, nn = {}, b1 = /^on./, k2 = /^on[^A-Z]/, W2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), F2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), I2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Ap = null, Qh = null, Lh = null, cS = !1, dc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oS = !1;
    if (dc)
      try {
        var Op = {};
        Object.defineProperty(Op, "passive", {
          get: function() {
            oS = !0;
          }
        }), window.addEventListener("test", Op, Op), window.removeEventListener("test", Op, Op);
      } catch {
        oS = !1;
      }
    var Xf = null, fS = null, Vv = null, Rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Zv = Hl(Rr), zp = ke({}, Rr, { view: 0, detail: 0 }), P2 = Hl(zp), sS, rS, Dp, Jv = ke({}, zp, {
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
      getModifierState: gs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Dp && (Dp && e.type === "mousemove" ? (sS = e.screenX - Dp.screenX, rS = e.screenY - Dp.screenY) : rS = sS = 0, Dp = e), sS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rS;
      }
    }), E1 = Hl(Jv), eE = ke({}, Jv, { dataTransfer: 0 }), tE = Hl(eE), lE = ke({}, zp, { relatedTarget: 0 }), dS = Hl(lE), aE = ke({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nE = Hl(aE), uE = ke({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), iE = Hl(uE), cE = ke({}, Rr, { data: 0 }), T1 = Hl(
      cE
    ), oE = T1, fE = {
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
    }, sE = {
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
    }, rE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, dE = ke({}, zp, {
      key: function(e) {
        if (e.key) {
          var t = fE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gs,
      charCode: function(e) {
        return e.type === "keypress" ? vs(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hE = Hl(dE), mE = ke({}, Jv, {
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
    }), A1 = Hl(mE), yE = ke({}, zp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gs
    }), pE = Hl(yE), vE = ke({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gE = Hl(vE), SE = ke({}, Jv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), bE = Hl(SE), EE = ke({}, Rr, {
      newState: 0,
      oldState: 0
    }), TE = Hl(EE), AE = [9, 13, 27, 32], O1 = 229, hS = dc && "CompositionEvent" in window, _p = null;
    dc && "documentMode" in document && (_p = document.documentMode);
    var OE = dc && "TextEvent" in window && !_p, z1 = dc && (!hS || _p && 8 < _p && 11 >= _p), D1 = 32, _1 = String.fromCharCode(D1), R1 = !1, Vh = !1, zE = {
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
    }, Rp = null, Mp = null, M1 = !1;
    dc && (M1 = rd("input") && (!document.documentMode || 9 < document.documentMode));
    var un = typeof Object.is == "function" ? Object.is : dd, DE = dc && "documentMode" in document && 11 >= document.documentMode, Zh = null, mS = null, Cp = null, yS = !1, Jh = {
      animationend: Dc("Animation", "AnimationEnd"),
      animationiteration: Dc("Animation", "AnimationIteration"),
      animationstart: Dc("Animation", "AnimationStart"),
      transitionrun: Dc("Transition", "TransitionRun"),
      transitionstart: Dc("Transition", "TransitionStart"),
      transitioncancel: Dc("Transition", "TransitionCancel"),
      transitionend: Dc("Transition", "TransitionEnd")
    }, pS = {}, C1 = {};
    dc && (C1 = document.createElement("div").style, "AnimationEvent" in window || (delete Jh.animationend.animation, delete Jh.animationiteration.animation, delete Jh.animationstart.animation), "TransitionEvent" in window || delete Jh.transitionend.transition);
    var U1 = _c("animationend"), H1 = _c("animationiteration"), N1 = _c("animationstart"), _E = _c("transitionrun"), RE = _c("transitionstart"), ME = _c("transitioncancel"), B1 = _c("transitionend"), Y1 = /* @__PURE__ */ new Map(), vS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    vS.push("scrollEnd");
    var q1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var CE = performance, j1 = function() {
        return CE.now();
      };
    else {
      var UE = Date;
      j1 = function() {
        return UE.now();
      };
    }
    var gS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, HE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Kv = 0, SS = 1, bS = 2, ES = 3, $v = "– ", kv = "+ ", x1 = "  ", Ft = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Gu = "Components ⚛", ct = "Scheduler ⚛", st = "Blocking", Qf = !1, ho = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Gu
    }, Lf = {
      start: -0,
      end: -0,
      detail: { devtools: ho }
    }, NE = ["Changed Props", ""], G1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", BE = ["Changed Props", G1], Up = 1, mo = 2, wu = [], Kh = 0, TS = 0, Vf = {};
    Object.freeze(Vf);
    var Xu = null, $h = null, Me = 0, YE = 1, We = 2, Ba = 8, bi = 16, qE = 32, w1 = !1;
    try {
      var X1 = Object.preventExtensions({});
    } catch {
      w1 = !0;
    }
    var AS = /* @__PURE__ */ new WeakMap(), kh = [], Wh = 0, Wv = null, Hp = 0, Qu = [], Lu = 0, Mr = null, yo = 1, po = "", za = null, It = null, it = !1, hc = !1, eu = null, Zf = null, Vu = !1, OS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), zS = Yt(null), DS = Yt(null), Q1 = {}, Fv = null, Fh = null, Ih = !1, jE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, xE = yl.unstable_scheduleCallback, GE = yl.unstable_NormalPriority, wl = {
      $$typeof: Fn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = yl.unstable_now, Iv = console.createTask ? console.createTask : function() {
      return null;
    }, Np = 1, Pv = 2, ia = -0, Jf = -0, vo = -0, go = null, cn = -1.1, Cr = -0, fl = -0, Te = -1.1, _e = -1.1, nl = null, pl = !1, Ur = -0, mc = -1.1, Bp = null, Kf = 0, _S = null, RS = null, Hr = -1.1, Yp = null, Ph = -1.1, eg = -1.1, So = -0, bo = -1.1, Zu = -1.1, MS = 0, qp = null, L1 = null, V1 = null, $f = -1.1, Nr = null, kf = -1.1, tg = -1.1, Z1 = -0, J1 = -0, lg = 0, wE = null, K1 = 0, jp = -1.1, ag = !1, ng = !1, xp = null, CS = 0, Br = 0, em = null, $1 = G.S;
    G.S = function(e, t) {
      if (Lb = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > bo && 0 > Zu) {
          bo = Xl();
          var a = Tf(), i = Nu();
          (a !== kf || i !== Nr) && (kf = -1.1), $f = a, Nr = i;
        }
        li(e, t);
      }
      $1 !== null && $1(e, t);
    };
    var Yr = Yt(null), Ei = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Gp = [], wp = [], Xp = [], Qp = [], Lp = [], Vp = [], qr = /* @__PURE__ */ new Set();
    Ei.recordUnsafeLifecycleWarnings = function(e, t) {
      qr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && wp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && Qp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && Vp.push(e));
    }, Ei.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Gp.length && (Gp.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Gp = []);
      var t = /* @__PURE__ */ new Set();
      0 < wp.length && (wp.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), wp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Xp.length && (Xp.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Xp = []);
      var i = /* @__PURE__ */ new Set();
      0 < Qp.length && (Qp.forEach(
        function(h) {
          i.add(
            se(h) || "Component"
          ), qr.add(h.type);
        }
      ), Qp = []);
      var o = /* @__PURE__ */ new Set();
      0 < Lp.length && (Lp.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Lp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Vp.length && (Vp.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), qr.add(h.type);
      }), Vp = []), 0 < t.size) {
        var d = X(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = X(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = X(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = X(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = X(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = X(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var ug = /* @__PURE__ */ new Map(), k1 = /* @__PURE__ */ new Set();
    Ei.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !k1.has(e.type) && (i = ug.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ug.set(a, i)), i.push(e));
    }, Ei.flushLegacyContextWarning = function() {
      ug.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), k1.add(o.type);
          });
          var i = X(a);
          ce(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ei.discardPendingWarnings = function() {
      Gp = [], wp = [], Xp = [], Qp = [], Lp = [], Vp = [], ug = /* @__PURE__ */ new Map();
    };
    var W1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Yu;
        Yu = !0;
        try {
          return e(t, a);
        } finally {
          Yu = i;
        }
      }
    }, US = W1.react_stack_bottom_frame.bind(W1), F1 = {
      react_stack_bottom_frame: function(e) {
        var t = Yu;
        Yu = !0;
        try {
          return e.render();
        } finally {
          Yu = t;
        }
      }
    }, I1 = F1.react_stack_bottom_frame.bind(F1), P1 = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ze(e, e.return, a);
        }
      }
    }, HS = P1.react_stack_bottom_frame.bind(
      P1
    ), eb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ze(e, e.return, f);
        }
      }
    }, tb = eb.react_stack_bottom_frame.bind(
      eb
    ), lb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, XE = lb.react_stack_bottom_frame.bind(
      lb
    ), ab = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ze(e, t, i);
        }
      }
    }, nb = ab.react_stack_bottom_frame.bind(
      ab
    ), ub = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, QE = ub.react_stack_bottom_frame.bind(ub), ib = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ze(e, t, i);
        }
      }
    }, LE = ib.react_stack_bottom_frame.bind(ib), cb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, VE = cb.react_stack_bottom_frame.bind(cb), tm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), NS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ig = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), cg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, jr = null, Zp = !1, lm = null, Jp = 0, Fe = null, BS, ob = BS = !1, fb = {}, sb = {}, rb = {};
    He = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!fb[o]) {
          fb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = se(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = se(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ce(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var xr = Bl(!0), db = Bl(!1), hb = 0, mb = 1, yb = 2, YS = 3, Wf = !1, pb = !1, qS = null, jS = !1, am = Yt(null), og = Yt(0), tu = Yt(null), Ju = null, nm = 1, Kp = 2, Ml = Yt(0), fg = 0, Ku = 1, on = 2, lu = 4, fn = 8, um, vb = /* @__PURE__ */ new Set(), gb = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), Eo = 0, Be = null, wt = null, Ql = null, sg = !1, im = !1, Gr = !1, rg = 0, $p = 0, To = null, ZE = 0, JE = 25, x = null, $u = null, Ao = -1, kp = !1, Wp = {
      readContext: gt,
      use: ii,
      useCallback: cl,
      useContext: cl,
      useEffect: cl,
      useImperativeHandle: cl,
      useLayoutEffect: cl,
      useInsertionEffect: cl,
      useMemo: cl,
      useReducer: cl,
      useRef: cl,
      useState: cl,
      useDebugValue: cl,
      useDeferredValue: cl,
      useTransition: cl,
      useSyncExternalStore: cl,
      useId: cl,
      useHostTransitionStatus: cl,
      useFormState: cl,
      useActionState: cl,
      useOptimistic: cl,
      useMemoCache: cl,
      useCacheRefresh: cl
    };
    Wp.useEffectEvent = cl;
    var GS = null, bb = null, wS = null, Eb = null, yc = null, Ti = null, dg = null;
    GS = {
      readContext: function(e) {
        return gt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", Ne(), ui(t), Nd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Ne(), gt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", Ne(), ui(t), Vc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Ne(), ui(a), Eu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", Ne(), ui(t), Wi(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Ne(), ui(t), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Ne(), ui(t);
        var a = G.H;
        G.H = yc;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Ne();
        var i = G.H;
        G.H = yc;
        try {
          return Fo(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", Ne(), Hd(e);
      },
      useState: function(e) {
        x = "useState", Ne();
        var t = G.H;
        G.H = yc;
        try {
          return Ji(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Ne();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Ne(), lf(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Ne(), Fi();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Ne(), Io(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Ne(), Qs();
      },
      useFormState: function(e, t) {
        return x = "useFormState", Ne(), Us(), ka(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", Ne(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", Ne(), Lc(e);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Ne(), Bd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", Ne(), ws(e);
      }
    }, bb = {
      readContext: function(e) {
        return gt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", K(), Nd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", K(), gt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", K(), Vc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", K(), Eu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", K(), Wi(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", K(), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", K();
        var a = G.H;
        G.H = yc;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", K();
        var i = G.H;
        G.H = yc;
        try {
          return Fo(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", K(), Hd(e);
      },
      useState: function(e) {
        x = "useState", K();
        var t = G.H;
        G.H = yc;
        try {
          return Ji(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", K(), lf(e, t);
      },
      useTransition: function() {
        return x = "useTransition", K(), Fi();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", K(), Io(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Qs();
      },
      useActionState: function(e, t) {
        return x = "useActionState", K(), ka(e, t);
      },
      useFormState: function(e, t) {
        return x = "useFormState", K(), Us(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", K(), Lc(e);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Bd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", K(), ws(e);
      }
    }, wS = {
      readContext: function(e) {
        return gt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", K(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", K(), tf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", K(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", K();
        var a = G.H;
        G.H = Ti;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", K();
        var i = G.H;
        G.H = Ti;
        try {
          return wc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", K();
        var e = G.H;
        G.H = Ti;
        try {
          return wc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", K(), Tu(e, t);
      },
      useTransition: function() {
        return x = "useTransition", K(), X0();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", K(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", K(), Us(), $i(e);
      },
      useActionState: function(e) {
        return x = "useActionState", K(), $i(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", K(), js(e, t);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", K(), ef(e);
      }
    }, Eb = {
      readContext: function(e) {
        return gt(e);
      },
      use: ii,
      useCallback: function(e, t) {
        return x = "useCallback", K(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", K(), tf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", K(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", K();
        var a = G.H;
        G.H = dg;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", K();
        var i = G.H;
        G.H = dg;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", K();
        var e = G.H;
        G.H = dg;
        try {
          return Xc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", K(), Xe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", K(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", K(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", K(), Us(), ki(e);
      },
      useActionState: function(e) {
        return x = "useActionState", K(), ki(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", K(), xs(e, t);
      },
      useHostTransitionStatus: si,
      useMemoCache: Ka,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", K(), ef(e);
      }
    }, yc = {
      readContext: function(e) {
        return ne(), gt(e);
      },
      use: function(e) {
        return ee(), ii(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), Ne(), Nd(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), Ne(), gt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", ee(), Ne(), Vc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), Ne(), Eu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", ee(), Ne(), Wi(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), Ne(), ya(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), Ne();
        var a = G.H;
        G.H = yc;
        try {
          return pa(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), Ne();
        var i = G.H;
        G.H = yc;
        try {
          return Fo(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", ee(), Ne(), Hd(e);
      },
      useState: function(e) {
        x = "useState", ee(), Ne();
        var t = G.H;
        G.H = yc;
        try {
          return Ji(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), Ne();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), Ne(), lf(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), Ne(), Fi();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), Ne(), Io(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), Ne(), Qs();
      },
      useFormState: function(e, t) {
        return x = "useFormState", ee(), Ne(), ka(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", ee(), Ne(), ka(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", ee(), Ne(), Lc(e);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", Ne(), Bd();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), Ne(), ws(e);
      }
    }, Ti = {
      readContext: function(e) {
        return ne(), gt(e);
      },
      use: function(e) {
        return ee(), ii(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), K(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", ee(), K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), K(), tf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", ee(), K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), K(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), K();
        var a = G.H;
        G.H = Ti;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), K();
        var i = G.H;
        G.H = Ti;
        try {
          return wc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", ee(), K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", ee(), K();
        var e = G.H;
        G.H = Ti;
        try {
          return wc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), K(), Tu(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), K(), X0();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), K(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", ee(), K(), $i(e);
      },
      useActionState: function(e) {
        return x = "useActionState", ee(), K(), $i(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", ee(), K(), js(e, t);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), K(), ef(e);
      }
    }, dg = {
      readContext: function(e) {
        return ne(), gt(e);
      },
      use: function(e) {
        return ee(), ii(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", ee(), K(), Qn(e, t);
      },
      useContext: function(e) {
        return x = "useContext", ee(), K(), gt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", ee(), K(), zl(2048, fn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", ee(), K(), tf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", ee(), K(), zl(4, on, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", ee(), K(), zl(4, lu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", ee(), K();
        var a = G.H;
        G.H = Ti;
        try {
          return $t(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", ee(), K();
        var i = G.H;
        G.H = Ti;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", ee(), K(), Tt().memoizedState;
      },
      useState: function() {
        x = "useState", ee(), K();
        var e = G.H;
        G.H = Ti;
        try {
          return Xc($a);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", ee(), K();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", ee(), K(), Xe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", ee(), K(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", ee(), K(), Qc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", ee(), K(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", ee(), K(), ki(e);
      },
      useActionState: function(e) {
        return x = "useActionState", ee(), K(), ki(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", ee(), K(), xs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), Ka(e);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", K(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", ee(), K(), ef(e);
      }
    };
    var Tb = {}, Ab = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set();
    Object.freeze(Tb);
    var XS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = aa(e), o = Ol(i);
        o.payload = t, a != null && ($c(a), o.callback = a), t = vu(e, o, i), t !== null && (mu(i, "this.setState()", e), Ue(t, e, i), bn(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = aa(e), o = Ol(i);
        o.tag = mb, o.payload = t, a != null && ($c(a), o.callback = a), t = vu(e, o, i), t !== null && (mu(i, "this.replaceState()", e), Ue(t, e, i), bn(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = aa(e), i = Ol(a);
        i.tag = yb, t != null && ($c(t), i.callback = t), t = vu(e, i, a), t !== null && (mu(a, "this.forceUpdate()", e), Ue(t, e, a), bn(t, e, a));
      }
    }, cm = null, QS = null, LS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, Nb = {}, Bb = {}, Yb = {}, qb = {}, om = !1, jb = {}, hg = {}, VS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, xb = !1, Gb = null;
    Gb = /* @__PURE__ */ new Set();
    var Oo = !1, Vl = !1, ZS = !1, wb = typeof WeakSet == "function" ? WeakSet : Set, ca = null, fm = null, sm = null, Zl = null, Dn = !1, Ai = null, Fl = !1, Fp = 8192, KE = {
      getCacheForType: function(e) {
        var t = gt(wl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return gt(wl).controller.signal;
      },
      getOwner: function() {
        return Na;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Ip = Symbol.for;
      Ip("selector.component"), Ip("selector.has_pseudo_class"), Ip("selector.role"), Ip("selector.test_id"), Ip("selector.text");
    }
    var $E = [], kE = typeof WeakMap == "function" ? WeakMap : Map, oa = 0, Il = 2, au = 4, zo = 0, Pp = 1, wr = 2, mg = 3, Ff = 4, yg = 6, Xb = 5, dt = oa, Xt = null, tt = null, Ie = 0, _n = 0, pg = 1, Xr = 2, e0 = 3, Qb = 4, JS = 5, t0 = 6, vg = 7, KS = 8, Qr = 9, Nt = _n, nu = null, If = !1, rm = !1, $S = !1, pc = 0, sl = zo, Pf = 0, es = 0, kS = 0, Rn = 0, Lr = 0, l0 = null, sn = null, gg = !1, Sg = 0, Lb = 0, Vb = 300, bg = 1 / 0, Zb = 500, a0 = null, El = null, ts = null, Eg = 0, WS = 1, FS = 2, Jb = 3, ls = 0, Kb = 1, $b = 2, kb = 3, Wb = 4, Tg = 5, Jl = 0, as = null, dm = null, Oi = 0, IS = 0, PS = -0, e1 = null, Fb = null, Ib = null, zi = Eg, Pb = null, WE = 50, n0 = 0, t1 = null, l1 = !1, Ag = !1, FE = 50, Vr = 0, u0 = null, hm = !1, Og = null, e2 = !1, t2 = /* @__PURE__ */ new Set(), IE = {}, zg = null, mm = null, a1 = !1, n1 = !1, Dg = !1, u1 = !1, ns = 0, i1 = {};
    (function() {
      for (var e = 0; e < vS.length; e++) {
        var t = vS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Hn(a, "on" + t);
      }
      Hn(U1, "onAnimationEnd"), Hn(H1, "onAnimationIteration"), Hn(N1, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(_E, "onTransitionRun"), Hn(RE, "onTransitionStart"), Hn(ME, "onTransitionCancel"), Hn(B1, "onTransitionEnd");
    })(), Ge("onMouseEnter", ["mouseout", "mouseover"]), Ge("onMouseLeave", ["mouseout", "mouseover"]), Ge("onPointerEnter", ["pointerout", "pointerover"]), Ge("onPointerLeave", ["pointerout", "pointerover"]), Pe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Pe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Pe("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Pe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var i0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), c1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(i0)
    ), _g = "_reactListening" + Math.random().toString(36).slice(2), l2 = !1, a2 = !1, Rg = !1, n2 = !1, Mg = !1, Cg = !1, u2 = !1, Ug = {}, PE = /\r\n?/g, eT = /\u0000|\uFFFD/g, Zr = "http://www.w3.org/1999/xlink", o1 = "http://www.w3.org/XML/1998/namespace", tT = "javascript:throw new Error('React form unexpectedly submitted.')", lT = "suppressHydrationWarning", Jr = "&", Hg = "/&", c0 = "$", o0 = "/$", us = "$?", Kr = "$~", ym = "$!", aT = "html", nT = "body", uT = "head", f1 = "F!", i2 = "F", c2 = "loading", iT = "style", Do = 0, pm = 1, Ng = 2, s1 = null, r1 = null, o2 = { dialog: !0, webview: !0 }, d1 = null, f0 = void 0, f2 = typeof setTimeout == "function" ? setTimeout : void 0, cT = typeof clearTimeout == "function" ? clearTimeout : void 0, $r = -1, s2 = typeof Promise == "function" ? Promise : void 0, oT = typeof queueMicrotask == "function" ? queueMicrotask : typeof s2 < "u" ? function(e) {
      return s2.resolve(null).then(e).catch(fv);
    } : f2, h1 = null, kr = 0, s0 = 1, r2 = 2, d2 = 3, ku = 4, Wu = /* @__PURE__ */ new Map(), h2 = /* @__PURE__ */ new Set(), _o = bt.d;
    bt.d = {
      f: function() {
        var e = _o.f(), t = en();
        return e || t;
      },
      r: function(e) {
        var t = te(e);
        t !== null && t.tag === 5 && t.type === "form" ? af(t) : _o.r(e);
      },
      D: function(e) {
        _o.D(e), Fy("dns-prefetch", e, null);
      },
      C: function(e, t) {
        _o.C(e, t), Fy("preconnect", e, t);
      },
      L: function(e, t, a) {
        _o.L(e, t, a);
        var i = vm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Rt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Rt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Rt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Rt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = no(e);
              break;
            case "script":
              f = uo(e);
          }
          Wu.has(f) || (e = ke(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Wu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            mr(f)
          ) || t === "script" && i.querySelector(yr(f)) || (t = i.createElement("link"), kt(t, "link", e), he(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        _o.m(e, t);
        var a = vm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Rt(i) + '"][href="' + Rt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = uo(e);
          }
          if (!Wu.has(f) && (e = ke({ rel: "modulepreload", href: e }, t), Wu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(yr(f)))
                  return;
            }
            i = a.createElement("link"), kt(i, "link", e), he(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        _o.X(e, t);
        var a = vm;
        if (a && e) {
          var i = De(a).hoistableScripts, o = uo(e), f = i.get(o);
          f || (f = a.querySelector(
            yr(o)
          ), f || (e = ke({ src: e, async: !0 }, t), (t = Wu.get(o)) && ep(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        _o.S(e, t, a);
        var i = vm;
        if (i && e) {
          var o = De(i).hoistableStyles, f = no(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: kr, preload: null };
            if (d = i.querySelector(
              mr(f)
            ))
              h.loading = s0 | ku;
            else {
              e = ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Wu.get(f)) && Py(e, a);
              var y = d = i.createElement("link");
              he(y), kt(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= s0;
              }), y.addEventListener("error", function() {
                h.loading |= r2;
              }), h.loading |= ku, zf(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        _o.M(e, t);
        var a = vm;
        if (a && e) {
          var i = De(a).hoistableScripts, o = uo(e), f = i.get(o);
          f || (f = a.querySelector(
            yr(o)
          ), f || (e = ke({ src: e, async: !0, type: "module" }, t), (t = Wu.get(o)) && ep(e, t), f = a.createElement("script"), he(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var vm = typeof document > "u" ? null : document, Bg = null, fT = 6e4, sT = 800, rT = 500, m1 = 0, y1 = null, Yg = null, Wr = uS, r0 = {
      $$typeof: Fn,
      Provider: null,
      Consumer: null,
      _currentValue: Wr,
      _currentValue2: Wr,
      _threadCount: 0
    }, m2 = "%c%s%c", y2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", p2 = "", qg = " ", dT = Function.prototype.bind, v2 = !1, g2 = null, S2 = null, b2 = null, E2 = null, T2 = null, A2 = null, O2 = null, z2 = null, D2 = null, _2 = null;
    g2 = function(e, t, a, i) {
      t = $(e, t), t !== null && (a = ae(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ue(a, e, 2));
    }, S2 = function(e, t, a) {
      t = $(e, t), t !== null && (a = Ce(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ue(a, e, 2));
    }, b2 = function(e, t, a, i) {
      t = $(e, t), t !== null && (a = $e(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = ta(e, 2), a !== null && Ue(a, e, 2));
    }, E2 = function(e, t, a) {
      e.pendingProps = ae(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ue(t, e, 2);
    }, T2 = function(e, t) {
      e.pendingProps = Ce(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ue(t, e, 2);
    }, A2 = function(e, t, a) {
      e.pendingProps = $e(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ta(e, 2), t !== null && Ue(t, e, 2);
    }, O2 = function(e) {
      var t = ta(e, 2);
      t !== null && Ue(t, e, 2);
    }, z2 = function(e) {
      var t = Mo(), a = ta(e, t);
      a !== null && Ue(a, e, t);
    }, D2 = function(e) {
      vt = e;
    }, _2 = function(e) {
      je = e;
    };
    var jg = !0, xg = null, p1 = !1, is = null, cs = null, os = null, d0 = /* @__PURE__ */ new Map(), h0 = /* @__PURE__ */ new Map(), fs = [], hT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Gg = null;
    if (Wn.prototype.render = sp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ft(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = aa(i);
      Oh(i, o, a, t, null, null);
    }, Wn.prototype.unmount = sp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (dt & (Il | au)) !== oa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Oh(e.current, 2, null, e, null, null), en(), t[Si] = null;
      }
    }, Wn.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Mi();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < fs.length && t !== 0 && t < fs[a].priority; a++) ;
        fs.splice(a, 0, e), a === 0 && fp(e);
      }
    }, (function() {
      var e = br.version;
      if (e !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), bt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = el(t), e = e !== null ? ul(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.4"
      };
      return e.overrideHookState = g2, e.overrideHookStateDeletePath = S2, e.overrideHookStateRenamePath = b2, e.overrideProps = E2, e.overridePropsDeletePath = T2, e.overridePropsRenamePath = A2, e.scheduleUpdate = O2, e.scheduleRetry = z2, e.setErrorHandler = D2, e.setSuspenseHandler = _2, e.scheduleRefresh = Le, e.scheduleRoot = ie, e.setRefreshHandler = _t, e.getCurrentFiber = Ut, ss(e);
    })() && dc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var R2 = window.location.protocol;
      /^(https?|file):$/.test(R2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (R2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    v0.createRoot = function(e, t) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      rp(e);
      var a = !1, i = "", o = jd, f = xd, d = uy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === On && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = gr(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Nv
      ), e[Si] = t.current, nc(e), new sp(t);
    }, v0.hydrateRoot = function(e, t, a) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      rp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = jd, d = xd, h = uy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = gr(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Nv
      ), t.context = Mv(null), a = t.current, i = aa(a), i = rn(i), o = Ol(i), o.callback = null, vu(a, o, i), mu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Mn(t, a), Ma(t), e[Si] = t.current, nc(e), new Wn(t);
    }, v0.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), v0;
}
var L2;
function DT() {
  if (L2) return Qg.exports;
  L2 = 1;
  function $() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($);
      } catch (ae) {
        console.error(ae);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? ($(), Qg.exports = OT()) : Qg.exports = zT(), Qg.exports;
}
var _T = DT(), V2 = gm();
function RT({ sdk: $ }) {
  const [ae, $e] = V2.useState($.getProps());
  return V2.useEffect(() => $.on("propsChanged", $e), [$]), /* @__PURE__ */ Zg.jsxs("section", { className: "react-widget-section", children: [
    /* @__PURE__ */ Zg.jsx("h3", { className: "react-widget-title", children: ae.title }),
    ae.description && /* @__PURE__ */ Zg.jsx("p", { className: "react-widget-description", children: ae.description })
  ] });
}
async function MT($) {
  await $.whenReady();
  const ae = _T.createRoot($.getContainer());
  ae.render(/* @__PURE__ */ Zg.jsx(RT, { sdk: $ })), $.on("destroy", () => ae.unmount());
}
export {
  MT as init
};
