const kr = ".vue-widget-section{padding:16px;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:#eee9fb;box-shadow:inset 5px 0 #ac92eb,0 1px 3px #0000001a,0 1px 2px #0000000f;color:#1e1e2e;box-sizing:border-box;max-width:480px;margin:24px 0 24px 24px}.country-list{list-style:none;margin:0;padding:0}.country-item{display:flex;align-items:center;gap:10px;padding:7px 0;list-style:none}.country-item+.country-item{border-top:1px solid rgba(0,0,0,.07)}.country-flag{width:36px;height:24px;object-fit:cover;object-position:center;flex-shrink:0;border-radius:3px;border:1px solid rgba(0,0,0,.08)}.country-details{display:flex;flex-direction:column;gap:2px;min-width:0}.country-name{font-size:.8125rem;font-weight:600;color:#1e1e2e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:1.3}.country-meta{font-size:.6875rem;color:#5a5a72;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.country-flag--skeleton{width:36px;height:24px;flex-shrink:0;border-radius:3px;background-color:#e5e7eb;animation:skeleton-pulse 1.4s ease-in-out infinite}.country-skeleton-line{height:10px;border-radius:3px;background:linear-gradient(90deg,#e5e7eb 25%,#f3f4f6,#e5e7eb 75%);background-size:200% 100%;animation:shimmer 1.4s infinite}.country-skeleton-line--name{width:55%;height:12px}.country-skeleton-line--meta{width:80%}.country-item--skeleton:nth-child(2) .country-flag--skeleton,.country-item--skeleton:nth-child(2) .country-skeleton-line{animation-delay:.1s}.country-item--skeleton:nth-child(3) .country-flag--skeleton,.country-item--skeleton:nth-child(3) .country-skeleton-line{animation-delay:.2s}.country-item--skeleton:nth-child(4) .country-flag--skeleton,.country-item--skeleton:nth-child(4) .country-skeleton-line{animation-delay:.3s}.country-item--skeleton:nth-child(5) .country-flag--skeleton,.country-item--skeleton:nth-child(5) .country-skeleton-line{animation-delay:.4s}@keyframes shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes skeleton-pulse{0%,to{background-color:#e5e7eb}50%{background-color:#d1d5db}}@media(prefers-reduced-motion:reduce){.country-flag--skeleton,.country-skeleton-line{animation:none;background:#e5e7eb}}.country-error{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:6px;background:#b91c1c14;border:1px solid rgba(185,28,28,.2);font-size:.8125rem;color:#b91c1c;line-height:1.4}.country-error p{margin:0}.widget-framework-header{margin:0 0 10px;font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#444458;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const k = {}, tt = [], Te = () => {
}, js = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yt = (e) => e.startsWith("onUpdate:"), X = Object.assign, In = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vr = Object.prototype.hasOwnProperty, j = (e, t) => Vr.call(e, t), P = Array.isArray, nt = (e) => Ot(e) === "[object Map]", Hs = (e) => Ot(e) === "[object Set]", ns = (e) => Ot(e) === "[object Date]", I = (e) => typeof e == "function", J = (e) => typeof e == "string", Ee = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", $s = (e) => ($(e) || I(e)) && I(e.then) && I(e.catch), Ns = Object.prototype.toString, Ot = (e) => Ns.call(e), Wr = (e) => Ot(e).slice(8, -1), Ls = (e) => Ot(e) === "[object Object]", Rn = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gt = /* @__PURE__ */ Mn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Br = /-\w/g, ae = Xt(
  (e) => e.replace(Br, (t) => t.slice(1).toUpperCase())
), qr = /\B([A-Z])/g, Ze = Xt(
  (e) => e.replace(qr, "-$1").toLowerCase()
), Ks = Xt((e) => e.charAt(0).toUpperCase() + e.slice(1)), ln = Xt(
  (e) => e ? `on${Ks(e)}` : ""
), Se = (e, t) => !Object.is(e, t), cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Us = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Gr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ss;
const Zt = () => ss || (ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = J(s) ? Xr(s) : Fn(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (J(e) || $(e))
    return e;
}
const Jr = /;(?![^(]*\))/g, zr = /:([^]+)/, Yr = /\/\*[^]*?\*\//g;
function Xr(e) {
  const t = {};
  return e.replace(Yr, "").split(Jr).forEach((n) => {
    if (n) {
      const s = n.split(zr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Dn(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = Dn(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Mn(Zr);
function ks(e) {
  return !!e || e === "";
}
function ei(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = jn(e[s], t[s]);
  return n;
}
function jn(e, t) {
  if (e === t) return !0;
  let n = ns(e), s = ns(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ee(e), s = Ee(t), n || s)
    return e === t;
  if (n = P(e), s = P(t), n || s)
    return n && s ? ei(e, t) : !1;
  if (n = $(e), s = $(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !jn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Vs = (e) => !!(e && e.__v_isRef === !0), ze = (e) => J(e) ? e : e == null ? "" : P(e) || $(e) && (e.toString === Ns || !I(e.toString)) ? Vs(e) ? ze(e.value) : JSON.stringify(e, Ws, 2) : String(e), Ws = (e, t) => Vs(t) ? Ws(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[fn(s, i) + " =>"] = r, n),
    {}
  )
} : Hs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fn(n))
} : Ee(t) ? fn(t) : $(t) && !P(t) && !Ls(t) ? String(t) : t, fn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ee(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class ti {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ie;
      try {
        return ie = this, t();
      } finally {
        ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ni() {
  return ie;
}
let U;
const un = /* @__PURE__ */ new WeakSet();
class Bs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, un.has(this) && (un.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rs(this), Js(this);
    const t = U, n = de;
    U = this, de = !0;
    try {
      return this.fn();
    } finally {
      zs(this), U = t, de = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Nn(t);
      this.deps = this.depsTail = void 0, rs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? un.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bn(this) && this.run();
  }
  get dirty() {
    return bn(this);
  }
}
let qs = 0, mt, _t;
function Gs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _t, _t = e;
    return;
  }
  e.next = mt, mt = e;
}
function Hn() {
  qs++;
}
function $n() {
  if (--qs > 0)
    return;
  if (_t) {
    let t = _t;
    for (_t = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; mt; ) {
    let t = mt;
    for (mt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Js(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zs(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Nn(s), si(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function bn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ys(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ys(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wt) || (e.globalVersion = wt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, s = de;
  U = e, de = !0;
  try {
    Js(e);
    const r = e.fn(e._value);
    (t.version === 0 || Se(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = n, de = s, zs(e), e.flags &= -3;
  }
}
function Nn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Nn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function si(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const Xs = [];
function Re() {
  Xs.push(de), de = !1;
}
function Fe() {
  const e = Xs.pop();
  de = e === void 0 ? !0 : e;
}
function rs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let wt = 0;
class ri {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ln {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !de || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new ri(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Zs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, wt++, this.notify(t);
  }
  notify(t) {
    Hn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      $n();
    }
  }
}
function Zs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Zs(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xn = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ Symbol(
  ""
), vn = /* @__PURE__ */ Symbol(
  ""
), St = /* @__PURE__ */ Symbol(
  ""
);
function Z(e, t, n) {
  if (de && U) {
    let s = xn.get(e);
    s || xn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ln()), r.map = s, r.key = n), r.track();
  }
}
function Ie(e, t, n, s, r, i) {
  const o = xn.get(e);
  if (!o) {
    wt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Hn(), t === "clear")
    o.forEach(l);
  else {
    const f = P(e), d = f && Rn(n);
    if (f && n === "length") {
      const a = Number(s);
      o.forEach((p, S) => {
        (S === "length" || S === St || !Ee(S) && S >= a) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(St)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(Ye)), nt(e) && l(o.get(vn)));
          break;
        case "delete":
          f || (l(o.get(Ye)), nt(e) && l(o.get(vn)));
          break;
        case "set":
          nt(e) && l(o.get(Ye));
          break;
      }
  }
  $n();
}
function Qe(e) {
  const t = /* @__PURE__ */ D(e);
  return t === e ? t : (Z(t, "iterate", St), /* @__PURE__ */ fe(e) ? t : t.map(he));
}
function Qt(e) {
  return Z(e = /* @__PURE__ */ D(e), "iterate", St), e;
}
function ve(e, t) {
  return /* @__PURE__ */ De(e) ? it(/* @__PURE__ */ Xe(e) ? he(t) : t) : he(t);
}
const ii = {
  __proto__: null,
  [Symbol.iterator]() {
    return an(this, Symbol.iterator, (e) => ve(this, e));
  },
  concat(...e) {
    return Qe(this).concat(
      ...e.map((t) => P(t) ? Qe(t) : t)
    );
  },
  entries() {
    return an(this, "entries", (e) => (e[1] = ve(this, e[1]), e));
  },
  every(e, t) {
    return Ae(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ae(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ve(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ae(
      this,
      "find",
      e,
      t,
      (n) => ve(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ae(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ae(
      this,
      "findLast",
      e,
      t,
      (n) => ve(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ae(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ae(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return dn(this, "includes", e);
  },
  indexOf(...e) {
    return dn(this, "indexOf", e);
  },
  join(e) {
    return Qe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return dn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ae(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return dt(this, "pop");
  },
  push(...e) {
    return dt(this, "push", e);
  },
  reduce(e, ...t) {
    return is(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return is(this, "reduceRight", e, t);
  },
  shift() {
    return dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ae(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return dt(this, "splice", e);
  },
  toReversed() {
    return Qe(this).toReversed();
  },
  toSorted(e) {
    return Qe(this).toSorted(e);
  },
  toSpliced(...e) {
    return Qe(this).toSpliced(...e);
  },
  unshift(...e) {
    return dt(this, "unshift", e);
  },
  values() {
    return an(this, "values", (e) => ve(this, e));
  }
};
function an(e, t, n) {
  const s = Qt(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ fe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const oi = Array.prototype;
function Ae(e, t, n, s, r, i) {
  const o = Qt(e), l = o !== e && !/* @__PURE__ */ fe(e), f = o[t];
  if (f !== oi[t]) {
    const p = f.apply(e, i);
    return l ? he(p) : p;
  }
  let d = n;
  o !== e && (l ? d = function(p, S) {
    return n.call(this, ve(e, p), S, e);
  } : n.length > 2 && (d = function(p, S) {
    return n.call(this, p, S, e);
  }));
  const a = f.call(o, d, s);
  return l && r ? r(a) : a;
}
function is(e, t, n, s) {
  const r = Qt(e), i = r !== e && !/* @__PURE__ */ fe(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = ve(e, d)), n.call(this, d, ve(e, a), p, e);
  }) : n.length > 3 && (o = function(d, a, p) {
    return n.call(this, d, a, p, e);
  }));
  const f = r[t](o, ...s);
  return l ? ve(e, f) : f;
}
function dn(e, t, n) {
  const s = /* @__PURE__ */ D(e);
  Z(s, "iterate", St);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Vn(n[0]) ? (n[0] = /* @__PURE__ */ D(n[0]), s[t](...n)) : r;
}
function dt(e, t, n = []) {
  Re(), Hn();
  const s = (/* @__PURE__ */ D(e))[t].apply(e, n);
  return $n(), Fe(), s;
}
const li = /* @__PURE__ */ Mn("__proto__,__v_isRef,__isVue"), Qs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ee)
);
function ci(e) {
  Ee(e) || (e = String(e));
  const t = /* @__PURE__ */ D(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class er {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? yi : rr : i ? sr : nr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = P(t);
    if (!r) {
      let f;
      if (o && (f = ii[n]))
        return f;
      if (n === "hasOwnProperty")
        return ci;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Q(t) ? t : s
    );
    if ((Ee(n) ? Qs.has(n) : li(n)) || (r || Z(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Q(l)) {
      const f = o && Rn(n) ? l : l.value;
      return r && $(f) ? /* @__PURE__ */ Sn(f) : f;
    }
    return $(l) ? r ? /* @__PURE__ */ Sn(l) : /* @__PURE__ */ Un(l) : l;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = P(t) && Rn(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ De(i);
      if (!/* @__PURE__ */ fe(s) && !/* @__PURE__ */ De(s) && (i = /* @__PURE__ */ D(i), s = /* @__PURE__ */ D(s)), !o && /* @__PURE__ */ Q(i) && !/* @__PURE__ */ Q(s))
        return d || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : j(t, n), f = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Q(t) ? t : r
    );
    return t === /* @__PURE__ */ D(r) && (l ? Se(s, i) && Ie(t, "set", n, s) : Ie(t, "add", n, s)), f;
  }
  deleteProperty(t, n) {
    const s = j(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ie(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ee(n) || !Qs.has(n)) && Z(t, "has", n), s;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      P(t) ? "length" : Ye
    ), Reflect.ownKeys(t);
  }
}
class fi extends er {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ui = /* @__PURE__ */ new tr(), ai = /* @__PURE__ */ new fi(), di = /* @__PURE__ */ new tr(!0);
const wn = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function hi(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ D(r), o = nt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...s), a = n ? wn : t ? it : he;
    return !t && Z(
      i,
      "iterate",
      f ? vn : Ye
    ), X(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: S } = d.next();
          return S ? { value: p, done: S } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: S
          };
        }
      }
    );
  };
}
function Ht(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pi(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      e || (Se(r, l) && Z(o, "get", r), Z(o, "get", l));
      const { has: f } = jt(o), d = t ? wn : e ? it : he;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Z(/* @__PURE__ */ D(r), "iterate", Ye), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      return e || (Se(r, l) && Z(o, "has", r), Z(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ D(l), d = t ? wn : e ? it : he;
      return !e && Z(f, "iterate", Ye), l.forEach((a, p) => r.call(i, d(a), d(p), o));
    }
  };
  return X(
    n,
    e ? {
      add: Ht("add"),
      set: Ht("set"),
      delete: Ht("delete"),
      clear: Ht("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ D(this), o = jt(i), l = /* @__PURE__ */ D(r), f = !t && !/* @__PURE__ */ fe(r) && !/* @__PURE__ */ De(r) ? l : r;
        return o.has.call(i, f) || Se(r, f) && o.has.call(i, r) || Se(l, f) && o.has.call(i, l) || (i.add(f), Ie(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ fe(i) && !/* @__PURE__ */ De(i) && (i = /* @__PURE__ */ D(i));
        const o = /* @__PURE__ */ D(this), { has: l, get: f } = jt(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ D(r), d = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), d ? Se(i, a) && Ie(o, "set", r, i) : Ie(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ D(this), { has: o, get: l } = jt(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ D(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Ie(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ D(this), i = r.size !== 0, o = r.clear();
        return i && Ie(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = hi(r, e, t);
  }), n;
}
function Kn(e, t) {
  const n = pi(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    j(n, r) && r in s ? n : s,
    r,
    i
  );
}
const gi = {
  get: /* @__PURE__ */ Kn(!1, !1)
}, mi = {
  get: /* @__PURE__ */ Kn(!1, !0)
}, _i = {
  get: /* @__PURE__ */ Kn(!0, !1)
};
const nr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap();
function bi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function xi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bi(Wr(e));
}
// @__NO_SIDE_EFFECTS__
function Un(e) {
  return /* @__PURE__ */ De(e) ? e : kn(
    e,
    !1,
    ui,
    gi,
    nr
  );
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return kn(
    e,
    !1,
    di,
    mi,
    sr
  );
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return kn(
    e,
    !0,
    ai,
    _i,
    rr
  );
}
function kn(e, t, n, s, r) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = xi(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return /* @__PURE__ */ De(e) ? /* @__PURE__ */ Xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function D(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ D(t) : e;
}
function wi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && Us(e, "__v_skip", !0), e;
}
const he = (e) => $(e) ? /* @__PURE__ */ Un(e) : e, it = (e) => $(e) ? /* @__PURE__ */ Sn(e) : e;
// @__NO_SIDE_EFFECTS__
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return Si(e, !1);
}
function Si(e, t) {
  return /* @__PURE__ */ Q(e) ? e : new Ci(e, t);
}
class Ci {
  constructor(t, n) {
    this.dep = new Ln(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ D(t), this._value = n ? t : he(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ fe(t) || /* @__PURE__ */ De(t);
    t = s ? t : /* @__PURE__ */ D(t), Se(t, n) && (this._rawValue = t, this._value = s ? t : he(t), this.dep.trigger());
  }
}
function Ti(e) {
  return /* @__PURE__ */ Q(e) ? e.value : e;
}
const Ei = {
  get: (e, t, n) => t === "__v_raw" ? e : Ti(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Q(r) && !/* @__PURE__ */ Q(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ir(e) {
  return /* @__PURE__ */ Xe(e) ? e : new Proxy(e, Ei);
}
class Oi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ln(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Gs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ys(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ai(e, t, n = !1) {
  let s, r;
  return I(e) ? s = e : (s = e.get, r = e.set), new Oi(s, r, n);
}
const Nt = {}, kt = /* @__PURE__ */ new WeakMap();
let Ge;
function Pi(e, t = !1, n = Ge) {
  if (n) {
    let s = kt.get(n);
    s || kt.set(n, s = []), s.push(e);
  }
}
function Mi(e, t, n = k) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = n, d = (A) => r ? A : /* @__PURE__ */ fe(A) || r === !1 || r === 0 ? Ke(A, 1) : Ke(A);
  let a, p, S, C, H = !1, M = !1;
  if (/* @__PURE__ */ Q(e) ? (p = () => e.value, H = /* @__PURE__ */ fe(e)) : /* @__PURE__ */ Xe(e) ? (p = () => d(e), H = !0) : P(e) ? (M = !0, H = e.some((A) => /* @__PURE__ */ Xe(A) || /* @__PURE__ */ fe(A)), p = () => e.map((A) => {
    if (/* @__PURE__ */ Q(A))
      return A.value;
    if (/* @__PURE__ */ Xe(A))
      return d(A);
    if (I(A))
      return f ? f(A, 2) : A();
  })) : I(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (S) {
      Re();
      try {
        S();
      } finally {
        Fe();
      }
    }
    const A = Ge;
    Ge = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      Ge = A;
    }
  } : p = Te, t && r) {
    const A = p, z = r === !0 ? 1 / 0 : r;
    p = () => Ke(A(), z);
  }
  const q = ni(), W = () => {
    a.stop(), q && q.active && In(q.effects, a);
  };
  if (i && t) {
    const A = t;
    t = (...z) => {
      A(...z), W();
    };
  }
  let R = M ? new Array(e.length).fill(Nt) : Nt;
  const V = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const z = a.run();
        if (r || H || (M ? z.some((He, pe) => Se(He, R[pe])) : Se(z, R))) {
          S && S();
          const He = Ge;
          Ge = a;
          try {
            const pe = [
              z,
              // pass undefined as the old value when it's changed for the first time
              R === Nt ? void 0 : M && R[0] === Nt ? [] : R,
              C
            ];
            R = z, f ? f(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Ge = He;
          }
        }
      } else
        a.run();
  };
  return l && l(V), a = new Bs(p), a.scheduler = o ? () => o(V, !1) : V, C = (A) => Pi(A, !1, a), S = a.onStop = () => {
    const A = kt.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const z of A) z();
      kt.delete(a);
    }
  }, t ? s ? V(!0) : R = a.run() : o ? o(V.bind(null, !0), !0) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function Ke(e, t = 1 / 0, n) {
  if (t <= 0 || !$(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Q(e))
    Ke(e.value, t, n);
  else if (P(e))
    for (let s = 0; s < e.length; s++)
      Ke(e[s], t, n);
  else if (Hs(e) || nt(e))
    e.forEach((s) => {
      Ke(s, t, n);
    });
  else if (Ls(e)) {
    for (const s in e)
      Ke(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ke(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function At(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    en(r, t, n);
  }
}
function Oe(e, t, n, s) {
  if (I(e)) {
    const r = At(e, t, n, s);
    return r && $s(r) && r.catch((i) => {
      en(i, t, n);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Oe(e[i], t, n, s));
    return r;
  }
}
function en(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || k;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Re(), At(i, null, 10, [
        e,
        f,
        d
      ]), Fe();
      return;
    }
  }
  Ii(e, n, r, s, o);
}
function Ii(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ne = [];
let xe = -1;
const st = [];
let Le = null, et = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Vt = null;
function Ri(e) {
  const t = Vt || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = xe + 1, n = ne.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ne[s], i = Ct(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Wn(e) {
  if (!(e.flags & 1)) {
    const t = Ct(e), n = ne[ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ct(n) ? ne.push(e) : ne.splice(Fi(t), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  Vt || (Vt = or.then(fr));
}
function Di(e) {
  P(e) ? st.push(...e) : Le && e.id === -1 ? Le.splice(et + 1, 0, e) : e.flags & 1 || (st.push(e), e.flags |= 1), lr();
}
function os(e, t, n = xe + 1) {
  for (; n < ne.length; n++) {
    const s = ne[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ne.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function cr(e) {
  if (st.length) {
    const t = [...new Set(st)].sort(
      (n, s) => Ct(n) - Ct(s)
    );
    if (st.length = 0, Le) {
      Le.push(...t);
      return;
    }
    for (Le = t, et = 0; et < Le.length; et++) {
      const n = Le[et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Le = null, et = 0;
  }
}
const Ct = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fr(e) {
  try {
    for (xe = 0; xe < ne.length; xe++) {
      const t = ne[xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), At(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xe < ne.length; xe++) {
      const t = ne[xe];
      t && (t.flags &= -2);
    }
    xe = -1, ne.length = 0, cr(), Vt = null, (ne.length || st.length) && fr();
  }
}
let Ce = null, ur = null;
function Wt(e) {
  const t = Ce;
  return Ce = e, ur = e && e.type.__scopeId || null, t;
}
function ji(e, t = Ce, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ys(-1);
    const i = Wt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Wt(i), s._d && ys(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Be(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (Re(), Oe(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Fe());
  }
}
function Hi(e, t) {
  if (se) {
    let n = se.provides;
    const s = se.parent && se.parent.provides;
    s === n && (n = se.provides = Object.create(s)), n[e] = t;
  }
}
function Lt(e, t, n = !1) {
  const s = No();
  if (s || rt) {
    let r = rt ? rt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(s && s.proxy) : t;
  }
}
const $i = /* @__PURE__ */ Symbol.for("v-scx"), Ni = () => Lt($i);
function hn(e, t, n) {
  return ar(e, t, n);
}
function ar(e, t, n = k) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = X({}, n), f = t && s || !t && i !== "post";
  let d;
  if (Et) {
    if (i === "sync") {
      const C = Ni();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!f) {
      const C = () => {
      };
      return C.stop = Te, C.resume = Te, C.pause = Te, C;
    }
  }
  const a = se;
  l.call = (C, H, M) => Oe(C, a, H, M);
  let p = !1;
  i === "post" ? l.scheduler = (C) => {
    re(C, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (C, H) => {
    H ? C() : Wn(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const S = Mi(e, t, l);
  return Et && (d ? d.push(S) : f && S()), S;
}
function Li(e, t, n) {
  const s = this.proxy, r = J(e) ? e.includes(".") ? dr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  I(t) ? i = t : (i = t.handler, n = t);
  const o = Pt(this), l = ar(r, i.bind(s), n);
  return o(), l;
}
function dr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ki = /* @__PURE__ */ Symbol("_vte"), Ui = (e) => e.__isTeleport, ki = /* @__PURE__ */ Symbol("_leaveCb");
function Bn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    X({ name: e.name }, t, { setup: e })
  ) : e;
}
function pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ls(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Bt = /* @__PURE__ */ new WeakMap();
function yt(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach(
      (M, q) => yt(
        M,
        t && (P(t) ? t[q] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (bt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && yt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? zn(s.component) : s.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === k ? l.refs = {} : l.refs, p = l.setupState, S = /* @__PURE__ */ D(p), C = p === k ? js : (M) => ls(a, M) ? !1 : j(S, M), H = (M, q) => !(q && ls(a, q));
  if (d != null && d !== f) {
    if (cs(t), J(d))
      a[d] = null, C(d) && (p[d] = null);
    else if (/* @__PURE__ */ Q(d)) {
      const M = t;
      H(d, M.k) && (d.value = null), M.k && (a[M.k] = null);
    }
  }
  if (I(f))
    At(f, l, 12, [o, a]);
  else {
    const M = J(f), q = /* @__PURE__ */ Q(f);
    if (M || q) {
      const W = () => {
        if (e.f) {
          const R = M ? C(f) ? p[f] : a[f] : H() || !e.k ? f.value : a[e.k];
          if (r)
            P(R) && In(R, i);
          else if (P(R))
            R.includes(i) || R.push(i);
          else if (M)
            a[f] = [i], C(f) && (p[f] = a[f]);
          else {
            const V = [i];
            H(f, e.k) && (f.value = V), e.k && (a[e.k] = V);
          }
        } else M ? (a[f] = o, C(f) && (p[f] = o)) : q && (H(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const R = () => {
          W(), Bt.delete(e);
        };
        R.id = -1, Bt.set(e, R), re(R, n);
      } else
        cs(e), W();
    }
  }
}
function cs(e) {
  const t = Bt.get(e);
  t && (t.flags |= 8, Bt.delete(e));
}
Zt().requestIdleCallback;
Zt().cancelIdleCallback;
const bt = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function Vi(e, t) {
  mr(e, "a", t);
}
function Wi(e, t) {
  mr(e, "da", t);
}
function mr(e, t, n = se) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (tn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      gr(r.parent.vnode) && Bi(s, t, n, r), r = r.parent;
  }
}
function Bi(e, t, n, s) {
  const r = tn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  qt(() => {
    In(s[t], r);
  }, n);
}
function tn(e, t, n = se, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Re();
      const l = Pt(n), f = Oe(t, n, e, o);
      return l(), Fe(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const je = (e) => (t, n = se) => {
  (!Et || e === "sp") && tn(e, (...s) => t(...s), n);
}, qi = je("bm"), Gi = je("m"), Ji = je(
  "bu"
), zi = je("u"), Yi = je(
  "bum"
), qt = je("um"), Xi = je(
  "sp"
), Zi = je("rtg"), Qi = je("rtc");
function eo(e, t = se) {
  tn("ec", e, t);
}
const to = /* @__PURE__ */ Symbol.for("v-ndc");
function fs(e, t, n, s) {
  let r;
  const i = n, o = P(e);
  if (o || J(e)) {
    const l = o && /* @__PURE__ */ Xe(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ fe(e), d = /* @__PURE__ */ De(e), e = Qt(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? d ? it(he(e[a])) : he(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if ($(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const Cn = (e) => e ? $r(e) ? zn(e) : Cn(e.parent) : null, xt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cn(e.parent),
    $root: (e) => Cn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Wn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ri.bind(e.proxy)),
    $watch: (e) => Li.bind(e)
  })
), pn = (e, t) => e !== k && !e.__isScriptSetup && j(e, t), no = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const S = o[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (pn(s, t))
          return o[t] = 1, s[t];
        if (r !== k && j(r, t))
          return o[t] = 2, r[t];
        if (j(i, t))
          return o[t] = 3, i[t];
        if (n !== k && j(n, t))
          return o[t] = 4, n[t];
        Tn && (o[t] = 0);
      }
    }
    const d = xt[t];
    let a, p;
    if (d)
      return t === "$attrs" && Z(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== k && j(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = f.config.globalProperties, j(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return pn(r, t) ? (r[t] = n, !0) : s !== k && j(s, t) ? (s[t] = n, !0) : j(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(n[l] || e !== k && l[0] !== "$" && j(e, l) || pn(t, l) || j(i, l) || j(s, l) || j(xt, l) || j(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function us(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Tn = !0;
function so(e) {
  const t = yr(e), n = e.proxy, s = e.ctx;
  Tn = !1, t.beforeCreate && as(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: S,
    beforeUpdate: C,
    updated: H,
    activated: M,
    deactivated: q,
    beforeDestroy: W,
    beforeUnmount: R,
    destroyed: V,
    unmounted: A,
    render: z,
    renderTracked: He,
    renderTriggered: pe,
    errorCaptured: $e,
    serverPrefetch: Mt,
    // public API
    expose: ke,
    inheritAttrs: ct,
    // assets
    components: It,
    directives: Rt,
    filters: rn
  } = t;
  if (d && ro(d, s, null), o)
    for (const B in o) {
      const L = o[B];
      I(L) && (s[B] = L.bind(n));
    }
  if (r) {
    const B = r.call(n, n);
    $(B) && (e.data = /* @__PURE__ */ Un(B));
  }
  if (Tn = !0, i)
    for (const B in i) {
      const L = i[B], Ve = I(L) ? L.bind(n, n) : I(L.get) ? L.get.bind(n, n) : Te, Ft = !I(L) && I(L.set) ? L.set.bind(n) : Te, We = Wo({
        get: Ve,
        set: Ft
      });
      Object.defineProperty(s, B, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (ge) => We.value = ge
      });
    }
  if (l)
    for (const B in l)
      _r(l[B], s, n, B);
  if (f) {
    const B = I(f) ? f.call(n) : f;
    Reflect.ownKeys(B).forEach((L) => {
      Hi(L, B[L]);
    });
  }
  a && as(a, e, "c");
  function ee(B, L) {
    P(L) ? L.forEach((Ve) => B(Ve.bind(n))) : L && B(L.bind(n));
  }
  if (ee(qi, p), ee(Gi, S), ee(Ji, C), ee(zi, H), ee(Vi, M), ee(Wi, q), ee(eo, $e), ee(Qi, He), ee(Zi, pe), ee(Yi, R), ee(qt, A), ee(Xi, Mt), P(ke))
    if (ke.length) {
      const B = e.exposed || (e.exposed = {});
      ke.forEach((L) => {
        Object.defineProperty(B, L, {
          get: () => n[L],
          set: (Ve) => n[L] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === Te && (e.render = z), ct != null && (e.inheritAttrs = ct), It && (e.components = It), Rt && (e.directives = Rt), Mt && pr(e);
}
function ro(e, t, n = Te) {
  P(e) && (e = En(e));
  for (const s in e) {
    const r = e[s];
    let i;
    $(r) ? "default" in r ? i = Lt(
      r.from || s,
      r.default,
      !0
    ) : i = Lt(r.from || s) : i = Lt(r), /* @__PURE__ */ Q(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function as(e, t, n) {
  Oe(
    P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _r(e, t, n, s) {
  let r = s.includes(".") ? dr(n, s) : () => n[s];
  if (J(e)) {
    const i = t[e];
    I(i) && hn(r, i);
  } else if (I(e))
    hn(r, e.bind(n));
  else if ($(e))
    if (P(e))
      e.forEach((i) => _r(i, t, n, s));
    else {
      const i = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(i) && hn(r, i, e);
    }
}
function yr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (d) => Gt(f, d, o, !0)
  ), Gt(f, t, o)), $(t) && i.set(t, f), f;
}
function Gt(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Gt(e, i, n, !0), r && r.forEach(
    (o) => Gt(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = io[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const io = {
  data: ds,
  props: hs,
  emits: hs,
  // objects
  methods: pt,
  computed: pt,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: pt,
  directives: pt,
  // watch
  watch: lo,
  // provide / inject
  provide: ds,
  inject: oo
};
function ds(e, t) {
  return t ? e ? function() {
    return X(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function oo(e, t) {
  return pt(En(e), En(t));
}
function En(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hs(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    us(e),
    us(t ?? {})
  ) : t;
}
function lo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = te(e[s], t[s]);
  return n;
}
function br() {
  return {
    app: null,
    config: {
      isNativeTag: js,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let co = 0;
function fo(e, t) {
  return function(s, r = null) {
    I(s) || (s = X({}, s)), r != null && !$(r) && (r = null);
    const i = br(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: co++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Bo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && I(a.install) ? (o.add(a), a.install(d, ...p)) : I(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (i.components[a] = p, d) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, d) : i.directives[a];
      },
      mount(a, p, S) {
        if (!f) {
          const C = d._ceVNode || Ue(s, r);
          return C.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(C, a, S), f = !0, d._container = a, a.__vue_app__ = d, zn(C.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Oe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = rt;
        rt = d;
        try {
          return a();
        } finally {
          rt = p;
        }
      }
    };
    return d;
  };
}
let rt = null;
const uo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function ao(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || k;
  let r = n;
  const i = t.startsWith("update:"), o = i && uo(s, t.slice(7));
  o && (o.trim && (r = n.map((a) => J(a) ? a.trim() : a)), o.number && (r = n.map(Gr)));
  let l, f = s[l = ln(t)] || // also try camelCase event handler (#2249)
  s[l = ln(ae(t))];
  !f && i && (f = s[l = ln(Ze(t))]), f && Oe(
    f,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Oe(
      d,
      e,
      6,
      r
    );
  }
}
const ho = /* @__PURE__ */ new WeakMap();
function xr(e, t, n = !1) {
  const s = n ? ho : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (d) => {
      const a = xr(d, t, !0);
      a && (l = !0, X(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? ($(e) && s.set(e, null), null) : (P(i) ? i.forEach((f) => o[f] = null) : X(o, i), $(e) && s.set(e, o), o);
}
function nn(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Ze(t)) || j(e, t));
}
function ps(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: S,
    setupState: C,
    ctx: H,
    inheritAttrs: M
  } = e, q = Wt(e);
  let W, R;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s, z = A;
      W = we(
        d.call(
          z,
          A,
          a,
          p,
          C,
          S,
          H
        )
      ), R = l;
    } else {
      const A = t;
      W = we(
        A.length > 1 ? A(
          p,
          { attrs: l, slots: o, emit: f }
        ) : A(
          p,
          null
        )
      ), R = t.props ? l : po(l);
    }
  } catch (A) {
    vt.length = 0, en(A, e, 1), W = Ue(ot);
  }
  let V = W;
  if (R && M !== !1) {
    const A = Object.keys(R), { shapeFlag: z } = V;
    A.length && z & 7 && (i && A.some(Yt) && (R = go(
      R,
      i
    )), V = lt(V, R, !1, !0));
  }
  return n.dirs && (V = lt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && Bn(V, n.transition), W = V, Wt(q), W;
}
const po = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, go = (e, t) => {
  const n = {};
  for (const s in e)
    (!Yt(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function mo(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? gs(s, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const S = a[p];
        if (vr(o, s, S) && !nn(d, S))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? gs(s, o, d) : !0 : !!o;
  return !1;
}
function gs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (vr(t, e, i) && !nn(n, i))
      return !0;
  }
  return !1;
}
function vr(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && $(s) && $(r) ? !jn(s, r) : s !== r;
}
function _o({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const wr = {}, Sr = () => Object.create(wr), Cr = (e) => Object.getPrototypeOf(e) === wr;
function yo(e, t, n, s = !1) {
  const r = {}, i = Sr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Tr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ vi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function bo(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ D(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let S = a[p];
        if (nn(e.emitsOptions, S))
          continue;
        const C = t[S];
        if (f)
          if (j(i, S))
            C !== i[S] && (i[S] = C, d = !0);
          else {
            const H = ae(S);
            r[H] = On(
              f,
              l,
              H,
              C,
              e,
              !1
            );
          }
        else
          C !== i[S] && (i[S] = C, d = !0);
      }
    }
  } else {
    Tr(e, t, r, i) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !j(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ze(p)) === p || !j(t, a))) && (f ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[a] !== void 0) && (r[p] = On(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !j(t, p)) && (delete i[p], d = !0);
  }
  d && Ie(e.attrs, "set", "");
}
function Tr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (gt(f))
        continue;
      const d = t[f];
      let a;
      r && j(r, a = ae(f)) ? !i || !i.includes(a) ? n[a] = d : (l || (l = {}))[a] = d : nn(e.emitsOptions, f) || (!(f in s) || d !== s[f]) && (s[f] = d, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ D(n), d = l || k;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      n[p] = On(
        r,
        f,
        p,
        d[p],
        e,
        !j(d, p)
      );
    }
  }
  return o;
}
function On(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = j(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && I(f)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const a = Pt(r);
          s = d[n] = f.call(
            null,
            t
          ), a();
        }
      } else
        s = f;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ze(n)) && (s = !0));
  }
  return s;
}
const xo = /* @__PURE__ */ new WeakMap();
function Er(e, t, n = !1) {
  const s = n ? xo : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [S, C] = Er(p, t, !0);
      X(o, S), C && l.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return $(e) && s.set(e, tt), tt;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = ae(i[a]);
      ms(p) && (o[p] = k);
    }
  else if (i)
    for (const a in i) {
      const p = ae(a);
      if (ms(p)) {
        const S = i[a], C = o[p] = P(S) || I(S) ? { type: S } : X({}, S), H = C.type;
        let M = !1, q = !0;
        if (P(H))
          for (let W = 0; W < H.length; ++W) {
            const R = H[W], V = I(R) && R.name;
            if (V === "Boolean") {
              M = !0;
              break;
            } else V === "String" && (q = !1);
          }
        else
          M = I(H) && H.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = M, C[
          1
          /* shouldCastTrue */
        ] = q, (M || j(C, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return $(e) && s.set(e, d), d;
}
function ms(e) {
  return e[0] !== "$" && !gt(e);
}
const qn = (e) => e === "_" || e === "_ctx" || e === "$stable", Gn = (e) => P(e) ? e.map(we) : [we(e)], vo = (e, t, n) => {
  if (t._n)
    return t;
  const s = ji((...r) => Gn(t(...r)), n);
  return s._c = !1, s;
}, Or = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (qn(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = vo(r, i, s);
    else if (i != null) {
      const o = Gn(i);
      t[r] = () => o;
    }
  }
}, Ar = (e, t) => {
  const n = Gn(t);
  e.slots.default = () => n;
}, Pr = (e, t, n) => {
  for (const s in t)
    (n || !qn(s)) && (e[s] = t[s]);
}, wo = (e, t, n) => {
  const s = e.slots = Sr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Pr(s, t, n), n && Us(s, "_", r, !0)) : Or(t, s);
  } else t && Ar(e, t);
}, So = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = k;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Pr(r, t, n) : (i = !t.$stable, Or(t, r)), o = t;
  } else t && (Ar(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !qn(l) && o[l] == null && delete r[l];
}, re = Ao;
function Co(e) {
  return To(e);
}
function To(e, t) {
  const n = Zt();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: S,
    setScopeId: C = Te,
    insertStaticContent: H
  } = e, M = (c, u, h, y = null, g = null, m = null, v = void 0, x = null, b = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !ht(c, u) && (y = Dt(c), ge(c, g, m, !0), c = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: _, ref: E, shapeFlag: w } = u;
    switch (_) {
      case sn:
        q(c, u, h, y);
        break;
      case ot:
        W(c, u, h, y);
        break;
      case mn:
        c == null && R(u, h, y, v);
        break;
      case ue:
        It(
          c,
          u,
          h,
          y,
          g,
          m,
          v,
          x,
          b
        );
        break;
      default:
        w & 1 ? z(
          c,
          u,
          h,
          y,
          g,
          m,
          v,
          x,
          b
        ) : w & 6 ? Rt(
          c,
          u,
          h,
          y,
          g,
          m,
          v,
          x,
          b
        ) : (w & 64 || w & 128) && _.process(
          c,
          u,
          h,
          y,
          g,
          m,
          v,
          x,
          b,
          ut
        );
    }
    E != null && g ? yt(E, c && c.ref, m, u || c, !u) : E == null && c && c.ref != null && yt(c.ref, null, m, c, !0);
  }, q = (c, u, h, y) => {
    if (c == null)
      s(
        u.el = l(u.children),
        h,
        y
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, W = (c, u, h, y) => {
    c == null ? s(
      u.el = f(u.children || ""),
      h,
      y
    ) : u.el = c.el;
  }, R = (c, u, h, y) => {
    [c.el, c.anchor] = H(
      c.children,
      u,
      h,
      y,
      c.el,
      c.anchor
    );
  }, V = ({ el: c, anchor: u }, h, y) => {
    let g;
    for (; c && c !== u; )
      g = S(c), s(c, h, y), c = g;
    s(u, h, y);
  }, A = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = S(c), r(c), c = h;
    r(u);
  }, z = (c, u, h, y, g, m, v, x, b) => {
    if (u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), c == null)
      He(
        u,
        h,
        y,
        g,
        m,
        v,
        x,
        b
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), Mt(
          c,
          u,
          g,
          m,
          v,
          x,
          b
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, He = (c, u, h, y, g, m, v, x) => {
    let b, _;
    const { props: E, shapeFlag: w, transition: T, dirs: O } = c;
    if (b = c.el = o(
      c.type,
      m,
      E && E.is,
      E
    ), w & 8 ? a(b, c.children) : w & 16 && $e(
      c.children,
      b,
      null,
      y,
      g,
      gn(c, m),
      v,
      x
    ), O && Be(c, null, y, "created"), pe(b, c, c.scopeId, v, y), E) {
      for (const N in E)
        N !== "value" && !gt(N) && i(b, N, null, E[N], m, y);
      "value" in E && i(b, "value", null, E.value, m), (_ = E.onVnodeBeforeMount) && be(_, y, c);
    }
    O && Be(c, null, y, "beforeMount");
    const F = Eo(g, T);
    F && T.beforeEnter(b), s(b, u, h), ((_ = E && E.onVnodeMounted) || F || O) && re(() => {
      try {
        _ && be(_, y, c), F && T.enter(b), O && Be(c, null, y, "mounted");
      } finally {
      }
    }, g);
  }, pe = (c, u, h, y, g) => {
    if (h && C(c, h), y)
      for (let m = 0; m < y.length; m++)
        C(c, y[m]);
    if (g) {
      let m = g.subTree;
      if (u === m || Fr(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const v = g.vnode;
        pe(
          c,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, $e = (c, u, h, y, g, m, v, x, b = 0) => {
    for (let _ = b; _ < c.length; _++) {
      const E = c[_] = x ? Me(c[_]) : we(c[_]);
      M(
        null,
        E,
        u,
        h,
        y,
        g,
        m,
        v,
        x
      );
    }
  }, Mt = (c, u, h, y, g, m, v) => {
    const x = u.el = c.el;
    let { patchFlag: b, dynamicChildren: _, dirs: E } = u;
    b |= c.patchFlag & 16;
    const w = c.props || k, T = u.props || k;
    let O;
    if (h && qe(h, !1), (O = T.onVnodeBeforeUpdate) && be(O, h, u, c), E && Be(u, c, h, "beforeUpdate"), h && qe(h, !0), (w.innerHTML && T.innerHTML == null || w.textContent && T.textContent == null) && a(x, ""), _ ? ke(
      c.dynamicChildren,
      _,
      x,
      h,
      y,
      gn(u, g),
      m
    ) : v || L(
      c,
      u,
      x,
      null,
      h,
      y,
      gn(u, g),
      m,
      !1
    ), b > 0) {
      if (b & 16)
        ct(x, w, T, h, g);
      else if (b & 2 && w.class !== T.class && i(x, "class", null, T.class, g), b & 4 && i(x, "style", w.style, T.style, g), b & 8) {
        const F = u.dynamicProps;
        for (let N = 0; N < F.length; N++) {
          const K = F[N], G = w[K], Y = T[K];
          (Y !== G || K === "value") && i(x, K, G, Y, g, h);
        }
      }
      b & 1 && c.children !== u.children && a(x, u.children);
    } else !v && _ == null && ct(x, w, T, h, g);
    ((O = T.onVnodeUpdated) || E) && re(() => {
      O && be(O, h, u, c), E && Be(u, c, h, "updated");
    }, y);
  }, ke = (c, u, h, y, g, m, v) => {
    for (let x = 0; x < u.length; x++) {
      const b = c[x], _ = u[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ht(b, _) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? p(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        b,
        _,
        E,
        null,
        y,
        g,
        m,
        v,
        !0
      );
    }
  }, ct = (c, u, h, y, g) => {
    if (u !== h) {
      if (u !== k)
        for (const m in u)
          !gt(m) && !(m in h) && i(
            c,
            m,
            u[m],
            null,
            g,
            y
          );
      for (const m in h) {
        if (gt(m)) continue;
        const v = h[m], x = u[m];
        v !== x && m !== "value" && i(c, m, x, v, g, y);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, It = (c, u, h, y, g, m, v, x, b) => {
    const _ = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: T, slotScopeIds: O } = u;
    O && (x = x ? x.concat(O) : O), c == null ? (s(_, h, y), s(E, h, y), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      E,
      g,
      m,
      v,
      x,
      b
    )) : w > 0 && w & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === T.length ? (ke(
      c.dynamicChildren,
      T,
      h,
      g,
      m,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Mr(
      c,
      u,
      !0
      /* shallow */
    )) : L(
      c,
      u,
      h,
      E,
      g,
      m,
      v,
      x,
      b
    );
  }, Rt = (c, u, h, y, g, m, v, x, b) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      y,
      v,
      b
    ) : rn(
      u,
      h,
      y,
      g,
      m,
      v,
      b
    ) : Yn(c, u, b);
  }, rn = (c, u, h, y, g, m, v) => {
    const x = c.component = $o(
      c,
      y,
      g
    );
    if (gr(c) && (x.ctx.renderer = ut), Lo(x, !1, v), x.asyncDep) {
      if (g && g.registerDep(x, ee, v), !c.el) {
        const b = x.subTree = Ue(ot);
        W(null, b, u, h), c.placeholder = b.el;
      }
    } else
      ee(
        x,
        c,
        u,
        h,
        g,
        m,
        v
      );
  }, Yn = (c, u, h) => {
    const y = u.component = c.component;
    if (mo(c, u, h))
      if (y.asyncDep && !y.asyncResolved) {
        B(y, u, h);
        return;
      } else
        y.next = u, y.update();
    else
      u.el = c.el, y.vnode = u;
  }, ee = (c, u, h, y, g, m, v) => {
    const x = () => {
      if (c.isMounted) {
        let { next: w, bu: T, u: O, parent: F, vnode: N } = c;
        {
          const _e = Ir(c);
          if (_e) {
            w && (w.el = N.el, B(c, w, v)), _e.asyncDep.then(() => {
              re(() => {
                c.isUnmounted || _();
              }, g);
            });
            return;
          }
        }
        let K = w, G;
        qe(c, !1), w ? (w.el = N.el, B(c, w, v)) : w = N, T && cn(T), (G = w.props && w.props.onVnodeBeforeUpdate) && be(G, F, w, N), qe(c, !0);
        const Y = ps(c), me = c.subTree;
        c.subTree = Y, M(
          me,
          Y,
          // parent may have changed if it's in a teleport
          p(me.el),
          // anchor may have changed if it's in a fragment
          Dt(me),
          c,
          g,
          m
        ), w.el = Y.el, K === null && _o(c, Y.el), O && re(O, g), (G = w.props && w.props.onVnodeUpdated) && re(
          () => be(G, F, w, N),
          g
        );
      } else {
        let w;
        const { el: T, props: O } = u, { bm: F, m: N, parent: K, root: G, type: Y } = c, me = bt(u);
        qe(c, !1), F && cn(F), !me && (w = O && O.onVnodeBeforeMount) && be(w, K, u), qe(c, !0);
        {
          G.ce && G.ce._hasShadowRoot() && G.ce._injectChildStyle(
            Y,
            c.parent ? c.parent.type : void 0
          );
          const _e = c.subTree = ps(c);
          M(
            null,
            _e,
            h,
            y,
            c,
            g,
            m
          ), u.el = _e.el;
        }
        if (N && re(N, g), !me && (w = O && O.onVnodeMounted)) {
          const _e = u;
          re(
            () => be(w, K, _e),
            g
          );
        }
        (u.shapeFlag & 256 || K && bt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && re(c.a, g), c.isMounted = !0, u = h = y = null;
      }
    };
    c.scope.on();
    const b = c.effect = new Bs(x);
    c.scope.off();
    const _ = c.update = b.run.bind(b), E = c.job = b.runIfDirty.bind(b);
    E.i = c, E.id = c.uid, b.scheduler = () => Wn(E), qe(c, !0), _();
  }, B = (c, u, h) => {
    u.component = c;
    const y = c.vnode.props;
    c.vnode = u, c.next = null, bo(c, u.props, y, h), So(c, u.children, h), Re(), os(c), Fe();
  }, L = (c, u, h, y, g, m, v, x, b = !1) => {
    const _ = c && c.children, E = c ? c.shapeFlag : 0, w = u.children, { patchFlag: T, shapeFlag: O } = u;
    if (T > 0) {
      if (T & 128) {
        Ft(
          _,
          w,
          h,
          y,
          g,
          m,
          v,
          x,
          b
        );
        return;
      } else if (T & 256) {
        Ve(
          _,
          w,
          h,
          y,
          g,
          m,
          v,
          x,
          b
        );
        return;
      }
    }
    O & 8 ? (E & 16 && ft(_, g, m), w !== _ && a(h, w)) : E & 16 ? O & 16 ? Ft(
      _,
      w,
      h,
      y,
      g,
      m,
      v,
      x,
      b
    ) : ft(_, g, m, !0) : (E & 8 && a(h, ""), O & 16 && $e(
      w,
      h,
      y,
      g,
      m,
      v,
      x,
      b
    ));
  }, Ve = (c, u, h, y, g, m, v, x, b) => {
    c = c || tt, u = u || tt;
    const _ = c.length, E = u.length, w = Math.min(_, E);
    let T;
    for (T = 0; T < w; T++) {
      const O = u[T] = b ? Me(u[T]) : we(u[T]);
      M(
        c[T],
        O,
        h,
        null,
        g,
        m,
        v,
        x,
        b
      );
    }
    _ > E ? ft(
      c,
      g,
      m,
      !0,
      !1,
      w
    ) : $e(
      u,
      h,
      y,
      g,
      m,
      v,
      x,
      b,
      w
    );
  }, Ft = (c, u, h, y, g, m, v, x, b) => {
    let _ = 0;
    const E = u.length;
    let w = c.length - 1, T = E - 1;
    for (; _ <= w && _ <= T; ) {
      const O = c[_], F = u[_] = b ? Me(u[_]) : we(u[_]);
      if (ht(O, F))
        M(
          O,
          F,
          h,
          null,
          g,
          m,
          v,
          x,
          b
        );
      else
        break;
      _++;
    }
    for (; _ <= w && _ <= T; ) {
      const O = c[w], F = u[T] = b ? Me(u[T]) : we(u[T]);
      if (ht(O, F))
        M(
          O,
          F,
          h,
          null,
          g,
          m,
          v,
          x,
          b
        );
      else
        break;
      w--, T--;
    }
    if (_ > w) {
      if (_ <= T) {
        const O = T + 1, F = O < E ? u[O].el : y;
        for (; _ <= T; )
          M(
            null,
            u[_] = b ? Me(u[_]) : we(u[_]),
            h,
            F,
            g,
            m,
            v,
            x,
            b
          ), _++;
      }
    } else if (_ > T)
      for (; _ <= w; )
        ge(c[_], g, m, !0), _++;
    else {
      const O = _, F = _, N = /* @__PURE__ */ new Map();
      for (_ = F; _ <= T; _++) {
        const le = u[_] = b ? Me(u[_]) : we(u[_]);
        le.key != null && N.set(le.key, _);
      }
      let K, G = 0;
      const Y = T - F + 1;
      let me = !1, _e = 0;
      const at = new Array(Y);
      for (_ = 0; _ < Y; _++) at[_] = 0;
      for (_ = O; _ <= w; _++) {
        const le = c[_];
        if (G >= Y) {
          ge(le, g, m, !0);
          continue;
        }
        let ye;
        if (le.key != null)
          ye = N.get(le.key);
        else
          for (K = F; K <= T; K++)
            if (at[K - F] === 0 && ht(le, u[K])) {
              ye = K;
              break;
            }
        ye === void 0 ? ge(le, g, m, !0) : (at[ye - F] = _ + 1, ye >= _e ? _e = ye : me = !0, M(
          le,
          u[ye],
          h,
          null,
          g,
          m,
          v,
          x,
          b
        ), G++);
      }
      const Qn = me ? Oo(at) : tt;
      for (K = Qn.length - 1, _ = Y - 1; _ >= 0; _--) {
        const le = F + _, ye = u[le], es = u[le + 1], ts = le + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          es.el || Rr(es)
        ) : y;
        at[_] === 0 ? M(
          null,
          ye,
          h,
          ts,
          g,
          m,
          v,
          x,
          b
        ) : me && (K < 0 || _ !== Qn[K] ? We(ye, h, ts, 2) : K--);
      }
    }
  }, We = (c, u, h, y, g = null) => {
    const { el: m, type: v, transition: x, children: b, shapeFlag: _ } = c;
    if (_ & 6) {
      We(c.component.subTree, u, h, y);
      return;
    }
    if (_ & 128) {
      c.suspense.move(u, h, y);
      return;
    }
    if (_ & 64) {
      v.move(c, u, h, ut);
      return;
    }
    if (v === ue) {
      s(m, u, h);
      for (let w = 0; w < b.length; w++)
        We(b[w], u, h, y);
      s(c.anchor, u, h);
      return;
    }
    if (v === mn) {
      V(c, u, h);
      return;
    }
    if (y !== 2 && _ & 1 && x)
      if (y === 0)
        x.beforeEnter(m), s(m, u, h), re(() => x.enter(m), g);
      else {
        const { leave: w, delayLeave: T, afterLeave: O } = x, F = () => {
          c.ctx.isUnmounted ? r(m) : s(m, u, h);
        }, N = () => {
          m._isLeaving && m[ki](
            !0
            /* cancelled */
          ), w(m, () => {
            F(), O && O();
          });
        };
        T ? T(m, F, N) : N();
      }
    else
      s(m, u, h);
  }, ge = (c, u, h, y = !1, g = !1) => {
    const {
      type: m,
      props: v,
      ref: x,
      children: b,
      dynamicChildren: _,
      shapeFlag: E,
      patchFlag: w,
      dirs: T,
      cacheIndex: O,
      memo: F
    } = c;
    if (w === -2 && (g = !1), x != null && (Re(), yt(x, null, h, c, !0), Fe()), O != null && (u.renderCache[O] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const N = E & 1 && T, K = !bt(c);
    let G;
    if (K && (G = v && v.onVnodeBeforeUnmount) && be(G, u, c), E & 6)
      Ur(c.component, h, y);
    else {
      if (E & 128) {
        c.suspense.unmount(h, y);
        return;
      }
      N && Be(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        h,
        ut,
        y
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ue || w > 0 && w & 64) ? ft(
        _,
        u,
        h,
        !1,
        !0
      ) : (m === ue && w & 384 || !g && E & 16) && ft(b, u, h), y && Xn(c);
    }
    const Y = F != null && O == null;
    (K && (G = v && v.onVnodeUnmounted) || N || Y) && re(() => {
      G && be(G, u, c), N && Be(c, null, u, "unmounted"), Y && (c.el = null);
    }, h);
  }, Xn = (c) => {
    const { type: u, el: h, anchor: y, transition: g } = c;
    if (u === ue) {
      Kr(h, y);
      return;
    }
    if (u === mn) {
      A(c);
      return;
    }
    const m = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: x } = g, b = () => v(h, m);
      x ? x(c.el, m, b) : b();
    } else
      m();
  }, Kr = (c, u) => {
    let h;
    for (; c !== u; )
      h = S(c), r(c), c = h;
    r(u);
  }, Ur = (c, u, h) => {
    const { bum: y, scope: g, job: m, subTree: v, um: x, m: b, a: _ } = c;
    _s(b), _s(_), y && cn(y), g.stop(), m && (m.flags |= 8, ge(v, c, u, h)), x && re(x, u), re(() => {
      c.isUnmounted = !0;
    }, u);
  }, ft = (c, u, h, y = !1, g = !1, m = 0) => {
    for (let v = m; v < c.length; v++)
      ge(c[v], u, h, y, g);
  }, Dt = (c) => {
    if (c.shapeFlag & 6)
      return Dt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = S(c.anchor || c.el), h = u && u[Ki];
    return h ? S(h) : u;
  };
  let on = !1;
  const Zn = (c, u, h) => {
    let y;
    c == null ? u._vnode && (ge(u._vnode, null, null, !0), y = u._vnode.component) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, on || (on = !0, os(y), cr(), on = !1);
  }, ut = {
    p: M,
    um: ge,
    m: We,
    r: Xn,
    mt: rn,
    mc: $e,
    pc: L,
    pbc: ke,
    n: Dt,
    o: e
  };
  return {
    render: Zn,
    hydrate: void 0,
    createApp: fo(Zn)
  };
}
function gn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qe({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Eo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (P(s) && P(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Me(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Mr(o, l)), l.type === sn && (l.patchFlag === -1 && (l = r[i] = Me(l)), l.el = o.el), l.type === ot && !l.el && (l.el = o.el);
    }
}
function Oo(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Ir(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ir(t);
}
function _s(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Rr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Rr(t.subTree) : null;
}
const Fr = (e) => e.__isSuspense;
function Ao(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Di(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), sn = /* @__PURE__ */ Symbol.for("v-txt"), ot = /* @__PURE__ */ Symbol.for("v-cmt"), mn = /* @__PURE__ */ Symbol.for("v-stc"), vt = [];
let ce = null;
function Ne(e = !1) {
  vt.push(ce = e ? null : []);
}
function Po() {
  vt.pop(), ce = vt[vt.length - 1] || null;
}
let Tt = 1;
function ys(e, t = !1) {
  Tt += e, e < 0 && ce && t && (ce.hasOnce = !0);
}
function Dr(e) {
  return e.dynamicChildren = Tt > 0 ? ce || tt : null, Po(), Tt > 0 && ce && ce.push(e), e;
}
function Je(e, t, n, s, r, i) {
  return Dr(
    oe(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Mo(e, t, n, s, r) {
  return Dr(
    Ue(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function jr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hr = ({ key: e }) => e ?? null, Kt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || /* @__PURE__ */ Q(e) || I(e) ? { i: Ce, r: e, k: t, f: !!n } : e : null);
function oe(e, t = null, n = null, s = 0, r = null, i = e === ue ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hr(t),
    ref: t && Kt(t),
    scopeId: ur,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return l ? (Jn(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), Tt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ce.push(f), f;
}
const Ue = Io;
function Io(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === to) && (e = ot), jr(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Jn(l, n), Tt > 0 && !i && ce && (l.shapeFlag & 6 ? ce[ce.indexOf(e)] = l : ce.push(l)), l.patchFlag = -2, l;
  }
  if (Vo(e) && (e = e.__vccOpts), t) {
    t = Ro(t);
    let { class: l, style: f } = t;
    l && !J(l) && (t.class = Dn(l)), $(f) && (/* @__PURE__ */ Vn(f) && !P(f) && (f = X({}, f)), t.style = Fn(f));
  }
  const o = J(e) ? 1 : Fr(e) ? 128 : Ui(e) ? 64 : $(e) ? 4 : I(e) ? 2 : 0;
  return oe(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Ro(e) {
  return e ? /* @__PURE__ */ Vn(e) || Cr(e) ? X({}, e) : e : null;
}
function lt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? Do(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Hr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? P(i) ? i.concat(Kt(t)) : [i, Kt(t)] : Kt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && Bn(
    a,
    f.clone(a)
  ), a;
}
function Fo(e = " ", t = 0) {
  return Ue(sn, null, e, t);
}
function we(e) {
  return e == null || typeof e == "boolean" ? Ue(ot) : P(e) ? Ue(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jr(e) ? Me(e) : Ue(sn, null, String(e));
}
function Me(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function Jn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Jn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Cr(t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Ce }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Fo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Do(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Dn([t.class, s.class]));
      else if (r === "style")
        t.style = Fn([t.style, s.style]);
      else if (zt(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(P(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Yt(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function be(e, t, n, s = null) {
  Oe(e, t, 7, [
    n,
    s
  ]);
}
const jo = br();
let Ho = 0;
function $o(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || jo, i = {
    uid: Ho++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ti(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Er(s, r),
    emitsOptions: xr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ao.bind(null, i), e.ce && e.ce(i), i;
}
let se = null;
const No = () => se || Ce;
let Jt, An;
{
  const e = Zt(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Jt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => se = n
  ), An = t(
    "__VUE_SSR_SETTERS__",
    (n) => Et = n
  );
}
const Pt = (e) => {
  const t = se;
  return Jt(e), e.scope.on(), () => {
    e.scope.off(), Jt(t);
  };
}, bs = () => {
  se && se.scope.off(), Jt(null);
};
function $r(e) {
  return e.vnode.shapeFlag & 4;
}
let Et = !1;
function Lo(e, t = !1, n = !1) {
  t && An(t);
  const { props: s, children: r } = e.vnode, i = $r(e);
  yo(e, s, i, t), wo(e, r, n || t);
  const o = i ? Ko(e, t) : void 0;
  return t && An(!1), o;
}
function Ko(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, no);
  const { setup: s } = n;
  if (s) {
    Re();
    const r = e.setupContext = s.length > 1 ? ko(e) : null, i = Pt(e), o = At(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = $s(o);
    if (Fe(), i(), (l || e.sp) && !bt(e) && pr(e), l) {
      if (o.then(bs, bs), t)
        return o.then((f) => {
          xs(e, f);
        }).catch((f) => {
          en(f, e, 0);
        });
      e.asyncDep = o;
    } else
      xs(e, o);
  } else
    Nr(e);
}
function xs(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = ir(t)), Nr(e);
}
function Nr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Te);
  {
    const r = Pt(e);
    Re();
    try {
      so(e);
    } finally {
      Fe(), r();
    }
  }
}
const Uo = {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function ko(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ir(wi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xt)
        return xt[n](e);
    },
    has(t, n) {
      return n in t || n in xt;
    }
  })) : e.proxy;
}
function Vo(e) {
  return I(e) && "__vccOpts" in e;
}
const Wo = (e, t) => /* @__PURE__ */ Ai(e, t, Et), Bo = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pn;
const vs = typeof window < "u" && window.trustedTypes;
if (vs)
  try {
    Pn = /* @__PURE__ */ vs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Lr = Pn ? (e) => Pn.createHTML(e) : (e) => e, qo = "http://www.w3.org/2000/svg", Go = "http://www.w3.org/1998/Math/MathML", Pe = typeof document < "u" ? document : null, ws = Pe && /* @__PURE__ */ Pe.createElement("template"), Jo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Pe.createElementNS(qo, e) : t === "mathml" ? Pe.createElementNS(Go, e) : n ? Pe.createElement(e, { is: n }) : Pe.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Pe.createTextNode(e),
  createComment: (e) => Pe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      ws.innerHTML = Lr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ws.content;
      if (s === "svg" || s === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, zo = /* @__PURE__ */ Symbol("_vtc");
function Yo(e, t, n) {
  const s = e[zo];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ss = /* @__PURE__ */ Symbol("_vod"), Xo = /* @__PURE__ */ Symbol("_vsh"), Zo = /* @__PURE__ */ Symbol(""), Qo = /(?:^|;)\s*display\s*:/;
function el(e, t, n) {
  const s = e.style, r = J(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ut(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ut(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Ut(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Zo];
      o && (n += ";" + o), s.cssText = n, i = Qo.test(n);
    }
  } else t && e.removeAttribute("style");
  Ss in e && (e[Ss] = i ? s.display : "", e[Xo] && (s.display = "none"));
}
const Cs = /\s*!important$/;
function Ut(e, t, n) {
  if (P(n))
    n.forEach((s) => Ut(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = tl(e, t);
    Cs.test(n) ? e.setProperty(
      Ze(s),
      n.replace(Cs, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ts = ["Webkit", "Moz", "ms"], _n = {};
function tl(e, t) {
  const n = _n[t];
  if (n)
    return n;
  let s = ae(t);
  if (s !== "filter" && s in e)
    return _n[t] = s;
  s = Ks(s);
  for (let r = 0; r < Ts.length; r++) {
    const i = Ts[r] + s;
    if (i in e)
      return _n[t] = i;
  }
  return t;
}
const Es = "http://www.w3.org/1999/xlink";
function Os(e, t, n, s, r, i = Qr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Es, t.slice(6, t.length)) : e.setAttributeNS(Es, t, n) : n == null || i && !ks(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ee(n) ? String(n) : n
  );
}
function As(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Lr(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ks(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function nl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ps = /* @__PURE__ */ Symbol("_vei");
function rl(e, t, n, s, r = null) {
  const i = e[Ps] || (e[Ps] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, f] = il(t);
    if (s) {
      const d = i[t] = cl(
        s,
        r
      );
      nl(e, l, d, f);
    } else o && (sl(e, l, o, f), i[t] = void 0);
  }
}
const Ms = /(?:Once|Passive|Capture)$/;
function il(e) {
  let t;
  if (Ms.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ms); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let yn = 0;
const ol = /* @__PURE__ */ Promise.resolve(), ll = () => yn || (ol.then(() => yn = 0), yn = Date.now());
function cl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Oe(
      fl(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ll(), n;
}
function fl(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ul = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Yo(e, s, o) : t === "style" ? el(e, n, s) : zt(t) ? Yt(t) || rl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, s, o)) ? (As(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Os(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (dl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !J(s))) ? As(e, ae(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Os(e, t, s, o));
};
function al(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Is(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Is(t) && J(n) ? !1 : t in e;
}
function dl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ae(t);
  return Array.isArray(n) ? n.some((r) => ae(r) === s) : Object.keys(n).some((r) => ae(r) === s);
}
const hl = /* @__PURE__ */ X({ patchProp: ul }, Jo);
let Rs;
function pl() {
  return Rs || (Rs = Co(hl));
}
const gl = ((...e) => {
  const t = pl().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = _l(s);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, ml(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function ml(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _l(e) {
  return J(e) ? document.querySelector(e) : e;
}
const yl = { class: "country-item" }, bl = ["src", "alt"], xl = { class: "country-details" }, vl = { class: "country-name" }, wl = { class: "country-meta" }, Sl = /* @__PURE__ */ hr({
  __name: "CountryCard",
  props: {
    country: {}
  },
  setup(e) {
    const t = (n) => {
      n.currentTarget instanceof HTMLImageElement && (n.currentTarget.style.opacity = "0");
    };
    return (n, s) => (Ne(), Je("li", yl, [
      oe("img", {
        class: "country-flag",
        src: e.country.flag,
        alt: `Flag of ${e.country.name}`,
        onError: t
      }, null, 40, bl),
      oe("div", xl, [
        oe("span", vl, ze(e.country.name), 1),
        oe("span", wl, ze(e.country.capital) + " · " + ze(e.country.population.toLocaleString("en-US")) + " · " + ze(e.country.region), 1)
      ])
    ]));
  }
}), Cl = { class: "vue-widget-section" }, Tl = { class: "widget-framework-header" }, El = {
  key: 0,
  role: "status",
  "aria-label": "Loading country data"
}, Ol = { class: "country-list" }, Al = {
  key: 1,
  role: "alert",
  class: "country-error"
}, Pl = {
  key: 2,
  class: "country-list"
}, Fs = 5, Ml = /* @__PURE__ */ hr({
  __name: "App",
  props: {
    sdk: {}
  },
  setup(e) {
    const t = /* @__PURE__ */ $t(e.sdk.getProps()), n = e.sdk.on("propsChanged", (l) => {
      t.value = l;
    });
    qt(n);
    const s = /* @__PURE__ */ $t([]), r = /* @__PURE__ */ $t(!0), i = /* @__PURE__ */ $t(null);
    let o = !1;
    return new window.WidgetServiceSDK().connectors.execute({ permalink: "rest-countries", method: "GET" }).then((l) => {
      o || (s.value = [...l].sort((f, d) => d.population - f.population).slice(0, Fs).map((f) => {
        var d;
        return { name: f.name.common, capital: ((d = f.capital) == null ? void 0 : d[0]) ?? "N/A", population: f.population, flag: f.flags.png, region: f.region };
      }), r.value = !1);
    }).catch((l) => {
      o || (i.value = l instanceof Error ? l.message : "Failed to load", r.value = !1);
    }), qt(() => {
      o = !0;
    }), (l, f) => (Ne(), Je("section", Cl, [
      oe("p", Tl, ze(t.value.title ?? ""), 1),
      r.value ? (Ne(), Je("div", El, [
        oe("ul", Ol, [
          (Ne(), Je(ue, null, fs(Fs, (d) => oe("li", {
            key: d,
            "aria-hidden": "true",
            class: "country-item country-item--skeleton"
          }, [...f[0] || (f[0] = [
            oe("div", { class: "country-flag country-flag--skeleton" }, null, -1),
            oe("div", { class: "country-details" }, [
              oe("div", { class: "country-skeleton-line country-skeleton-line--name" }),
              oe("div", { class: "country-skeleton-line country-skeleton-line--meta" })
            ], -1)
          ])])), 64))
        ])
      ])) : i.value ? (Ne(), Je("div", Al, [
        oe("p", null, ze(i.value), 1)
      ])) : (Ne(), Je("ul", Pl, [
        (Ne(!0), Je(ue, null, fs(s.value, (d) => (Ne(), Mo(Sl, {
          key: d.name,
          country: d
        }, null, 8, ["country"]))), 128))
      ]))
    ]));
  }
});
let Il = kr;
const Ds = /* @__PURE__ */ new Set();
async function Fl(e) {
  await e.whenReady();
  const t = document.createElement("style");
  t.textContent = Il, Ds.add(t), e.shadowRoot.insertBefore(t, e.shadowRoot.firstChild);
  const n = gl(Ml, { sdk: e });
  n.mount(e.getContainer()), e.on("destroy", () => {
    Ds.delete(t), t.remove(), n.unmount();
  });
}
export {
  Fl as init
};
