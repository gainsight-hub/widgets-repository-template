const Lr = ".vue-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:#a2ebd4;box-shadow:inset 5px 0 #29d69f,0 1px 3px #0000001a,0 1px 2px #0000000f;color:#1e1e2e;box-sizing:border-box}.vue-widget-title{margin:0 0 .75rem;font-size:1.25rem;font-weight:700;letter-spacing:-.015em}.country-status{margin:0;font-size:.875rem;opacity:.7}.country-error{color:#c0392b;opacity:1}.country-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem}.country-item{display:flex;align-items:center;gap:.5rem;font-size:.875rem}.country-flag{width:1.5rem;height:1rem;object-fit:cover;border-radius:2px;flex-shrink:0}.country-name{font-weight:600;flex:1}.country-capital{opacity:.7}";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const V = {}, et = [], Ce = () => {
}, Fn = () => !1, Yt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xt = (e) => e.startsWith("onUpdate:"), Z = Object.assign, Ms = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, $r = Object.prototype.hasOwnProperty, j = (e, t) => $r.call(e, t), P = Array.isArray, tt = (e) => At(e) === "[object Map]", Dn = (e) => At(e) === "[object Set]", tn = (e) => At(e) === "[object Date]", I = (e) => typeof e == "function", z = (e) => typeof e == "string", Te = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", jn = (e) => (N(e) || I(e)) && I(e.then) && I(e.catch), Hn = Object.prototype.toString, At = (e) => Hn.call(e), Kr = (e) => At(e).slice(8, -1), Nn = (e) => At(e) === "[object Object]", Is = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gt = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Ur = /-\w/g, fe = Zt(
  (e) => e.replace(Ur, (t) => t.slice(1).toUpperCase())
), Vr = /\B([A-Z])/g, ze = Zt(
  (e) => e.replace(Vr, "-$1").toLowerCase()
), Ln = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), os = Zt(
  (e) => e ? `on${Ln(e)}` : ""
), Se = (e, t) => !Object.is(e, t), ls = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, $n = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let sn;
const Qt = () => sn || (sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = z(n) ? Jr(n) : Rs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (z(e) || N(e))
    return e;
}
const Br = /;(?![^(]*\))/g, qr = /:([^]+)/, Gr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const t = {};
  return e.replace(Gr, "").split(Br).forEach((s) => {
    if (s) {
      const n = s.split(qr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Fs(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = Fs(e[s]);
      n && (t += n + " ");
    }
  else if (N(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yr = /* @__PURE__ */ Ps(zr);
function Kn(e) {
  return !!e || e === "";
}
function Xr(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = Ds(e[n], t[n]);
  return s;
}
function Ds(e, t) {
  if (e === t) return !0;
  let s = tn(e), n = tn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = Te(e), n = Te(t), s || n)
    return e === t;
  if (s = P(e), n = P(t), s || n)
    return s && n ? Xr(e, t) : !1;
  if (s = N(e), n = N(t), s || n) {
    if (!s || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !Ds(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Un = (e) => !!(e && e.__v_isRef === !0), ht = (e) => z(e) ? e : e == null ? "" : P(e) || N(e) && (e.toString === Hn || !I(e.toString)) ? Un(e) ? ht(e.value) : JSON.stringify(e, Vn, 2) : String(e), Vn = (e, t) => Un(t) ? Vn(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[cs(n, i) + " =>"] = r, s),
    {}
  )
} : Dn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => cs(s))
} : Te(t) ? cs(t) : N(t) && !P(t) && !Nn(t) ? String(t) : t, cs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Te(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class Zr {
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
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ie;
      try {
        return ie = this, t();
      } finally {
        ie = s;
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
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
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
function Qr() {
  return ie;
}
let U;
const fs = /* @__PURE__ */ new WeakSet();
class Wn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nn(this), Gn(this);
    const t = U, s = ue;
    U = this, ue = !0;
    try {
      return this.fn();
    } finally {
      Jn(this), U = t, ue = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, nn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bs(this) && this.run();
  }
  get dirty() {
    return bs(this);
  }
}
let Bn = 0, _t, mt;
function qn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mt, mt = e;
    return;
  }
  e.next = _t, _t = e;
}
function js() {
  Bn++;
}
function Hs() {
  if (--Bn > 0)
    return;
  if (mt) {
    let t = mt;
    for (mt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; _t; ) {
    let t = _t;
    for (_t = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Gn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ns(n), kr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === St) || (e.globalVersion = St, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = U, n = ue;
  U = e, ue = !0;
  try {
    Gn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Se(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = s, ue = n, Jn(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Ns(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function kr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ue = !0;
const Yn = [];
function Ie() {
  Yn.push(ue), ue = !1;
}
function Re() {
  const e = Yn.pop();
  ue = e === void 0 ? !0 : e;
}
function nn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = U;
    U = void 0;
    try {
      t();
    } finally {
      U = s;
    }
  }
}
let St = 0;
class ei {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ls {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !ue || U === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== U)
      s = this.activeLink = new ei(U, this), U.deps ? (s.prevDep = U.depsTail, U.depsTail.nextDep = s, U.depsTail = s) : U.deps = U.depsTail = s, Xn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = U.depsTail, s.nextDep = void 0, U.depsTail.nextDep = s, U.depsTail = s, U.deps === s && (U.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, St++, this.notify(t);
  }
  notify(t) {
    js();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function Xn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
), wt = /* @__PURE__ */ Symbol(
  ""
);
function Q(e, t, s) {
  if (ue && U) {
    let n = ys.get(e);
    n || ys.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ls()), r.map = n, r.key = s), r.track();
  }
}
function Me(e, t, s, n, r, i) {
  const o = ys.get(e);
  if (!o) {
    St++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (js(), t === "clear")
    o.forEach(l);
  else {
    const f = P(e), d = f && Is(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === wt || !Te(w) && w >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(wt)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(qe)), tt(e) && l(o.get(xs)));
          break;
        case "delete":
          f || (l(o.get(qe)), tt(e) && l(o.get(xs)));
          break;
        case "set":
          tt(e) && l(o.get(qe));
          break;
      }
  }
  Hs();
}
function Ye(e) {
  const t = /* @__PURE__ */ D(e);
  return t === e ? t : (Q(t, "iterate", wt), /* @__PURE__ */ ce(e) ? t : t.map(ae));
}
function kt(e) {
  return Q(e = /* @__PURE__ */ D(e), "iterate", wt), e;
}
function ye(e, t) {
  return /* @__PURE__ */ Fe(e) ? rt(/* @__PURE__ */ Ge(e) ? ae(t) : t) : ae(t);
}
const ti = {
  __proto__: null,
  [Symbol.iterator]() {
    return us(this, Symbol.iterator, (e) => ye(this, e));
  },
  concat(...e) {
    return Ye(this).concat(
      ...e.map((t) => P(t) ? Ye(t) : t)
    );
  },
  entries() {
    return us(this, "entries", (e) => (e[1] = ye(this, e[1]), e));
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
      (s) => s.map((n) => ye(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ae(
      this,
      "find",
      e,
      t,
      (s) => ye(this, s),
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
      (s) => ye(this, s),
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
    return as(this, "includes", e);
  },
  indexOf(...e) {
    return as(this, "indexOf", e);
  },
  join(e) {
    return Ye(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return as(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ae(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return at(this, "pop");
  },
  push(...e) {
    return at(this, "push", e);
  },
  reduce(e, ...t) {
    return rn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return rn(this, "reduceRight", e, t);
  },
  shift() {
    return at(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ae(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return at(this, "splice", e);
  },
  toReversed() {
    return Ye(this).toReversed();
  },
  toSorted(e) {
    return Ye(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ye(this).toSpliced(...e);
  },
  unshift(...e) {
    return at(this, "unshift", e);
  },
  values() {
    return us(this, "values", (e) => ye(this, e));
  }
};
function us(e, t, s) {
  const n = kt(e), r = n[t]();
  return n !== e && !/* @__PURE__ */ ce(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const si = Array.prototype;
function Ae(e, t, s, n, r, i) {
  const o = kt(e), l = o !== e && !/* @__PURE__ */ ce(e), f = o[t];
  if (f !== si[t]) {
    const p = f.apply(e, i);
    return l ? ae(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, w) {
    return s.call(this, ye(e, p), w, e);
  } : s.length > 2 && (d = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = f.call(o, d, n);
  return l && r ? r(a) : a;
}
function rn(e, t, s, n) {
  const r = kt(e), i = r !== e && !/* @__PURE__ */ ce(e);
  let o = s, l = !1;
  r !== e && (i ? (l = n.length === 0, o = function(d, a, p) {
    return l && (l = !1, d = ye(e, d)), s.call(this, d, ye(e, a), p, e);
  }) : s.length > 3 && (o = function(d, a, p) {
    return s.call(this, d, a, p, e);
  }));
  const f = r[t](o, ...n);
  return l ? ye(e, f) : f;
}
function as(e, t, s) {
  const n = /* @__PURE__ */ D(e);
  Q(n, "iterate", wt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Vs(s[0]) ? (s[0] = /* @__PURE__ */ D(s[0]), n[t](...s)) : r;
}
function at(e, t, s = []) {
  Ie(), js();
  const n = (/* @__PURE__ */ D(e))[t].apply(e, s);
  return Hs(), Re(), n;
}
const ni = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), Zn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Te)
);
function ri(e) {
  Te(e) || (e = String(e));
  const t = /* @__PURE__ */ D(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class Qn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? pi : sr : i ? tr : er).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let f;
      if (o && (f = ti[s]))
        return f;
      if (s === "hasOwnProperty")
        return ri;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ k(t) ? t : n
    );
    if ((Te(s) ? Zn.has(s) : ni(s)) || (r || Q(t, "get", s), i))
      return l;
    if (/* @__PURE__ */ k(l)) {
      const f = o && Is(s) ? l : l.value;
      return r && N(f) ? /* @__PURE__ */ Ss(f) : f;
    }
    return N(l) ? r ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ Ks(l) : l;
  }
}
class kn extends Qn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    const o = P(t) && Is(s);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Fe(i);
      if (!/* @__PURE__ */ ce(n) && !/* @__PURE__ */ Fe(n) && (i = /* @__PURE__ */ D(i), n = /* @__PURE__ */ D(n)), !o && /* @__PURE__ */ k(i) && !/* @__PURE__ */ k(n))
        return d || (i.value = n), !0;
    }
    const l = o ? Number(s) < t.length : j(t, s), f = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ k(t) ? t : r
    );
    return t === /* @__PURE__ */ D(r) && (l ? Se(n, i) && Me(t, "set", s, n) : Me(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = j(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Me(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Te(s) || !Zn.has(s)) && Q(t, "has", s), n;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      P(t) ? "length" : qe
    ), Reflect.ownKeys(t);
  }
}
class ii extends Qn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const oi = /* @__PURE__ */ new kn(), li = /* @__PURE__ */ new ii(), ci = /* @__PURE__ */ new kn(!0);
const vs = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function fi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ D(r), o = tt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...n), a = s ? vs : t ? rt : ae;
    return !t && Q(
      i,
      "iterate",
      f ? xs : qe
    ), Z(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = d.next();
          return w ? { value: p, done: w } : {
            value: l ? [a(p[0]), a(p[1])] : a(p),
            done: w
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
function ui(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      e || (Se(r, l) && Q(o, "get", r), Q(o, "get", l));
      const { has: f } = jt(o), d = t ? vs : e ? rt : ae;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Q(/* @__PURE__ */ D(r), "iterate", qe), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ D(i), l = /* @__PURE__ */ D(r);
      return e || (Se(r, l) && Q(o, "has", r), Q(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = /* @__PURE__ */ D(l), d = t ? vs : e ? rt : ae;
      return !e && Q(f, "iterate", qe), l.forEach((a, p) => r.call(i, d(a), d(p), o));
    }
  };
  return Z(
    s,
    e ? {
      add: Ht("add"),
      set: Ht("set"),
      delete: Ht("delete"),
      clear: Ht("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ D(this), o = jt(i), l = /* @__PURE__ */ D(r), f = !t && !/* @__PURE__ */ ce(r) && !/* @__PURE__ */ Fe(r) ? l : r;
        return o.has.call(i, f) || Se(r, f) && o.has.call(i, r) || Se(l, f) && o.has.call(i, l) || (i.add(f), Me(i, "add", f, f)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ ce(i) && !/* @__PURE__ */ Fe(i) && (i = /* @__PURE__ */ D(i));
        const o = /* @__PURE__ */ D(this), { has: l, get: f } = jt(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ D(r), d = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), d ? Se(i, a) && Me(o, "set", r, i) : Me(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ D(this), { has: o, get: l } = jt(i);
        let f = o.call(i, r);
        f || (r = /* @__PURE__ */ D(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Me(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ D(this), i = r.size !== 0, o = r.clear();
        return i && Me(
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
    s[r] = fi(r, e, t);
  }), s;
}
function $s(e, t) {
  const s = ui(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    j(s, r) && r in n ? s : n,
    r,
    i
  );
}
const ai = {
  get: /* @__PURE__ */ $s(!1, !1)
}, di = {
  get: /* @__PURE__ */ $s(!1, !0)
}, hi = {
  get: /* @__PURE__ */ $s(!0, !1)
};
const er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap();
function gi(e) {
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
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(Kr(e));
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return /* @__PURE__ */ Fe(e) ? e : Us(
    e,
    !1,
    oi,
    ai,
    er
  );
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  return Us(
    e,
    !1,
    ci,
    di,
    tr
  );
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return Us(
    e,
    !0,
    li,
    hi,
    sr
  );
}
function Us(e, t, s, n, r) {
  if (!N(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = _i(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return /* @__PURE__ */ Fe(e) ? /* @__PURE__ */ Ge(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function D(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ D(t) : e;
}
function bi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && $n(e, "__v_skip", !0), e;
}
const ae = (e) => N(e) ? /* @__PURE__ */ Ks(e) : e, rt = (e) => N(e) ? /* @__PURE__ */ Ss(e) : e;
// @__NO_SIDE_EFFECTS__
function k(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return yi(e, !1);
}
function yi(e, t) {
  return /* @__PURE__ */ k(e) ? e : new xi(e, t);
}
class xi {
  constructor(t, s) {
    this.dep = new Ls(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ D(t), this._value = s ? t : ae(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ce(t) || /* @__PURE__ */ Fe(t);
    t = n ? t : /* @__PURE__ */ D(t), Se(t, s) && (this._rawValue = t, this._value = n ? t : ae(t), this.dep.trigger());
  }
}
function vi(e) {
  return /* @__PURE__ */ k(e) ? e.value : e;
}
const Si = {
  get: (e, t, s) => t === "__v_raw" ? e : vi(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return /* @__PURE__ */ k(r) && !/* @__PURE__ */ k(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function nr(e) {
  return /* @__PURE__ */ Ge(e) ? e : new Proxy(e, Si);
}
class wi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Ls(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = St - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return qn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return zn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t, s = !1) {
  let n, r;
  return I(e) ? n = e : (n = e.get, r = e.set), new wi(n, r, s);
}
const Lt = {}, Vt = /* @__PURE__ */ new WeakMap();
let Be;
function Ti(e, t = !1, s = Be) {
  if (s) {
    let n = Vt.get(s);
    n || Vt.set(s, n = []), n.push(e);
  }
}
function Ei(e, t, s = V) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, d = (O) => r ? O : /* @__PURE__ */ ce(O) || r === !1 || r === 0 ? Le(O, 1) : Le(O);
  let a, p, w, C, H = !1, M = !1;
  if (/* @__PURE__ */ k(e) ? (p = () => e.value, H = /* @__PURE__ */ ce(e)) : /* @__PURE__ */ Ge(e) ? (p = () => d(e), H = !0) : P(e) ? (M = !0, H = e.some((O) => /* @__PURE__ */ Ge(O) || /* @__PURE__ */ ce(O)), p = () => e.map((O) => {
    if (/* @__PURE__ */ k(O))
      return O.value;
    if (/* @__PURE__ */ Ge(O))
      return d(O);
    if (I(O))
      return f ? f(O, 2) : O();
  })) : I(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      Ie();
      try {
        w();
      } finally {
        Re();
      }
    }
    const O = Be;
    Be = a;
    try {
      return f ? f(e, 3, [C]) : e(C);
    } finally {
      Be = O;
    }
  } : p = Ce, t && r) {
    const O = p, Y = r === !0 ? 1 / 0 : r;
    p = () => Le(O(), Y);
  }
  const G = Qr(), B = () => {
    a.stop(), G && G.active && Ms(G.effects, a);
  };
  if (i && t) {
    const O = t;
    t = (...Y) => {
      O(...Y), B();
    };
  }
  let R = M ? new Array(e.length).fill(Lt) : Lt;
  const W = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const Y = a.run();
        if (r || H || (M ? Y.some((je, de) => Se(je, R[de])) : Se(Y, R))) {
          w && w();
          const je = Be;
          Be = a;
          try {
            const de = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              R === Lt ? void 0 : M && R[0] === Lt ? [] : R,
              C
            ];
            R = Y, f ? f(t, 3, de) : (
              // @ts-expect-error
              t(...de)
            );
          } finally {
            Be = je;
          }
        }
      } else
        a.run();
  };
  return l && l(W), a = new Wn(p), a.scheduler = o ? () => o(W, !1) : W, C = (O) => Ti(O, !1, a), w = a.onStop = () => {
    const O = Vt.get(a);
    if (O) {
      if (f)
        f(O, 4);
      else
        for (const Y of O) Y();
      Vt.delete(a);
    }
  }, t ? n ? W(!0) : R = a.run() : o ? o(W.bind(null, !0), !0) : a.run(), B.pause = a.pause.bind(a), B.resume = a.resume.bind(a), B.stop = B, B;
}
function Le(e, t = 1 / 0, s) {
  if (t <= 0 || !N(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ k(e))
    Le(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Le(e[n], t, s);
  else if (Dn(e) || tt(e))
    e.forEach((n) => {
      Le(n, t, s);
    });
  else if (Nn(e)) {
    for (const n in e)
      Le(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Le(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ot(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    es(r, t, s);
  }
}
function Ee(e, t, s, n) {
  if (I(e)) {
    const r = Ot(e, t, s, n);
    return r && jn(r) && r.catch((i) => {
      es(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ee(e[i], t, s, n));
    return r;
  }
}
function es(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || V;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
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
      Ie(), Ot(i, null, 10, [
        e,
        f,
        d
      ]), Re();
      return;
    }
  }
  Ai(e, s, r, n, o);
}
function Ai(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const se = [];
let be = -1;
const st = [];
let Ne = null, Qe = 0;
const rr = /* @__PURE__ */ Promise.resolve();
let Wt = null;
function Oi(e) {
  const t = Wt || rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pi(e) {
  let t = be + 1, s = se.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = se[n], i = Ct(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = Ct(e), s = se[se.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ct(s) ? se.push(e) : se.splice(Pi(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Wt || (Wt = rr.then(lr));
}
function Mi(e) {
  P(e) ? st.push(...e) : Ne && e.id === -1 ? Ne.splice(Qe + 1, 0, e) : e.flags & 1 || (st.push(e), e.flags |= 1), ir();
}
function on(e, t, s = be + 1) {
  for (; s < se.length; s++) {
    const n = se[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      se.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function or(e) {
  if (st.length) {
    const t = [...new Set(st)].sort(
      (s, n) => Ct(s) - Ct(n)
    );
    if (st.length = 0, Ne) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, Qe = 0; Qe < Ne.length; Qe++) {
      const s = Ne[Qe];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ne = null, Qe = 0;
  }
}
const Ct = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function lr(e) {
  try {
    for (be = 0; be < se.length; be++) {
      const t = se[be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ot(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; be < se.length; be++) {
      const t = se[be];
      t && (t.flags &= -2);
    }
    be = -1, se.length = 0, or(), Wt = null, (se.length || st.length) && lr();
  }
}
let we = null, cr = null;
function Bt(e) {
  const t = we;
  return we = e, cr = e && e.type.__scopeId || null, t;
}
function Ii(e, t = we, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && mn(-1);
    const i = Bt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Bt(i), n._d && mn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ve(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (Ie(), Ee(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Re());
  }
}
function Ri(e, t) {
  if (ne) {
    let s = ne.provides;
    const n = ne.parent && ne.parent.provides;
    n === s && (s = ne.provides = Object.create(n)), s[e] = t;
  }
}
function $t(e, t, s = !1) {
  const n = Ho();
  if (n || nt) {
    let r = nt ? nt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
const Fi = /* @__PURE__ */ Symbol.for("v-scx"), Di = () => $t(Fi);
function ds(e, t, s) {
  return fr(e, t, s);
}
function fr(e, t, s = V) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = Z({}, s), f = t && n || !t && i !== "post";
  let d;
  if (Et) {
    if (i === "sync") {
      const C = Di();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!f) {
      const C = () => {
      };
      return C.stop = Ce, C.resume = Ce, C.pause = Ce, C;
    }
  }
  const a = ne;
  l.call = (C, H, M) => Ee(C, a, H, M);
  let p = !1;
  i === "post" ? l.scheduler = (C) => {
    re(C, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (C, H) => {
    H ? C() : Ws(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const w = Ei(e, t, l);
  return Et && (d ? d.push(w) : f && w()), w;
}
function ji(e, t, s) {
  const n = this.proxy, r = z(e) ? e.includes(".") ? ur(n, e) : () => n[e] : e.bind(n, n);
  let i;
  I(t) ? i = t : (i = t.handler, s = t);
  const o = Pt(this), l = fr(r, i.bind(n), s);
  return o(), l;
}
function ur(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Hi = /* @__PURE__ */ Symbol("_vte"), Ni = (e) => e.__isTeleport, Li = /* @__PURE__ */ Symbol("_leaveCb");
function Bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function $i(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Z({ name: e.name }, t, { setup: e })
  ) : e;
}
function ar(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ln(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const qt = /* @__PURE__ */ new WeakMap();
function bt(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (M, G) => bt(
        M,
        t && (P(t) ? t[G] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (yt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && bt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? zs(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === V ? l.refs = {} : l.refs, p = l.setupState, w = /* @__PURE__ */ D(p), C = p === V ? Fn : (M) => ln(a, M) ? !1 : j(w, M), H = (M, G) => !(G && ln(a, G));
  if (d != null && d !== f) {
    if (cn(t), z(d))
      a[d] = null, C(d) && (p[d] = null);
    else if (/* @__PURE__ */ k(d)) {
      const M = t;
      H(d, M.k) && (d.value = null), M.k && (a[M.k] = null);
    }
  }
  if (I(f))
    Ot(f, l, 12, [o, a]);
  else {
    const M = z(f), G = /* @__PURE__ */ k(f);
    if (M || G) {
      const B = () => {
        if (e.f) {
          const R = M ? C(f) ? p[f] : a[f] : H() || !e.k ? f.value : a[e.k];
          if (r)
            P(R) && Ms(R, i);
          else if (P(R))
            R.includes(i) || R.push(i);
          else if (M)
            a[f] = [i], C(f) && (p[f] = a[f]);
          else {
            const W = [i];
            H(f, e.k) && (f.value = W), e.k && (a[e.k] = W);
          }
        } else M ? (a[f] = o, C(f) && (p[f] = o)) : G && (H(f, e.k) && (f.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const R = () => {
          B(), qt.delete(e);
        };
        R.id = -1, qt.set(e, R), re(R, s);
      } else
        cn(e), B();
    }
  }
}
function cn(e) {
  const t = qt.get(e);
  t && (t.flags |= 8, qt.delete(e));
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const yt = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function Ki(e, t) {
  hr(e, "a", t);
}
function Ui(e, t) {
  hr(e, "da", t);
}
function hr(e, t, s = ne) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ts(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      dr(r.parent.vnode) && Vi(n, t, s, r), r = r.parent;
  }
}
function Vi(e, t, s, n) {
  const r = ts(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Gt(() => {
    Ms(n[t], r);
  }, s);
}
function ts(e, t, s = ne, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ie();
      const l = Pt(s), f = Ee(t, s, e, o);
      return l(), Re(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const De = (e) => (t, s = ne) => {
  (!Et || e === "sp") && ts(e, (...n) => t(...n), s);
}, Wi = De("bm"), Bi = De("m"), qi = De(
  "bu"
), Gi = De("u"), Ji = De(
  "bum"
), Gt = De("um"), zi = De(
  "sp"
), Yi = De("rtg"), Xi = De("rtc");
function Zi(e, t = ne) {
  ts("ec", e, t);
}
const Qi = /* @__PURE__ */ Symbol.for("v-ndc");
function ki(e, t, s, n) {
  let r;
  const i = s, o = P(e);
  if (o || z(e)) {
    const l = o && /* @__PURE__ */ Ge(e);
    let f = !1, d = !1;
    l && (f = !/* @__PURE__ */ ce(e), d = /* @__PURE__ */ Fe(e), e = kt(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? d ? rt(ae(e[a])) : ae(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (N(e))
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
const ws = (e) => e ? Fr(e) ? zs(e) : ws(e.parent) : null, xt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ws(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Oi.bind(e.proxy)),
    $watch: (e) => ji.bind(e)
  })
), hs = (e, t) => e !== V && !e.__isScriptSetup && j(e, t), eo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (hs(n, t))
          return o[t] = 1, n[t];
        if (r !== V && j(r, t))
          return o[t] = 2, r[t];
        if (j(i, t))
          return o[t] = 3, i[t];
        if (s !== V && j(s, t))
          return o[t] = 4, s[t];
        Cs && (o[t] = 0);
      }
    }
    const d = xt[t];
    let a, p;
    if (d)
      return t === "$attrs" && Q(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (s !== V && j(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = f.config.globalProperties, j(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return hs(r, t) ? (r[t] = s, !0) : n !== V && j(n, t) ? (n[t] = s, !0) : j(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let f;
    return !!(s[l] || e !== V && l[0] !== "$" && j(e, l) || hs(t, l) || j(i, l) || j(n, l) || j(xt, l) || j(r.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : j(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function fn(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Cs = !0;
function to(e) {
  const t = gr(e), s = e.proxy, n = e.ctx;
  Cs = !1, t.beforeCreate && un(t.beforeCreate, e, "bc");
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
    mounted: w,
    beforeUpdate: C,
    updated: H,
    activated: M,
    deactivated: G,
    beforeDestroy: B,
    beforeUnmount: R,
    destroyed: W,
    unmounted: O,
    render: Y,
    renderTracked: je,
    renderTriggered: de,
    errorCaptured: He,
    serverPrefetch: Mt,
    // public API
    expose: $e,
    inheritAttrs: lt,
    // assets
    components: It,
    directives: Rt,
    filters: rs
  } = t;
  if (d && so(d, n, null), o)
    for (const q in o) {
      const $ = o[q];
      I($) && (n[q] = $.bind(s));
    }
  if (r) {
    const q = r.call(s, s);
    N(q) && (e.data = /* @__PURE__ */ Ks(q));
  }
  if (Cs = !0, i)
    for (const q in i) {
      const $ = i[q], Ke = I($) ? $.bind(s, s) : I($.get) ? $.get.bind(s, s) : Ce, Ft = !I($) && I($.set) ? $.set.bind(s) : Ce, Ue = Vo({
        get: Ke,
        set: Ft
      });
      Object.defineProperty(n, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: (he) => Ue.value = he
      });
    }
  if (l)
    for (const q in l)
      pr(l[q], n, s, q);
  if (f) {
    const q = I(f) ? f.call(s) : f;
    Reflect.ownKeys(q).forEach(($) => {
      Ri($, q[$]);
    });
  }
  a && un(a, e, "c");
  function ee(q, $) {
    P($) ? $.forEach((Ke) => q(Ke.bind(s))) : $ && q($.bind(s));
  }
  if (ee(Wi, p), ee(Bi, w), ee(qi, C), ee(Gi, H), ee(Ki, M), ee(Ui, G), ee(Zi, He), ee(Xi, je), ee(Yi, de), ee(Ji, R), ee(Gt, O), ee(zi, Mt), P($e))
    if ($e.length) {
      const q = e.exposed || (e.exposed = {});
      $e.forEach(($) => {
        Object.defineProperty(q, $, {
          get: () => s[$],
          set: (Ke) => s[$] = Ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Ce && (e.render = Y), lt != null && (e.inheritAttrs = lt), It && (e.components = It), Rt && (e.directives = Rt), Mt && ar(e);
}
function so(e, t, s = Ce) {
  P(e) && (e = Ts(e));
  for (const n in e) {
    const r = e[n];
    let i;
    N(r) ? "default" in r ? i = $t(
      r.from || n,
      r.default,
      !0
    ) : i = $t(r.from || n) : i = $t(r), /* @__PURE__ */ k(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function un(e, t, s) {
  Ee(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function pr(e, t, s, n) {
  let r = n.includes(".") ? ur(s, n) : () => s[n];
  if (z(e)) {
    const i = t[e];
    I(i) && ds(r, i);
  } else if (I(e))
    ds(r, e.bind(s));
  else if (N(e))
    if (P(e))
      e.forEach((i) => pr(i, t, s, n));
    else {
      const i = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(i) && ds(r, i, e);
    }
}
function gr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (d) => Jt(f, d, o, !0)
  ), Jt(f, t, o)), N(t) && i.set(t, f), f;
}
function Jt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Jt(e, i, s, !0), r && r.forEach(
    (o) => Jt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = no[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const no = {
  data: an,
  props: dn,
  emits: dn,
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
  watch: io,
  // provide / inject
  provide: an,
  inject: ro
};
function an(e, t) {
  return t ? e ? function() {
    return Z(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ro(e, t) {
  return pt(Ts(e), Ts(t));
}
function Ts(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    fn(e),
    fn(t ?? {})
  ) : t;
}
function io(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Z(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = te(e[n], t[n]);
  return s;
}
function _r() {
  return {
    app: null,
    config: {
      isNativeTag: Fn,
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
let oo = 0;
function lo(e, t) {
  return function(n, r = null) {
    I(n) || (n = Z({}, n)), r != null && !N(r) && (r = null);
    const i = _r(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: oo++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Wo,
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
      mount(a, p, w) {
        if (!f) {
          const C = d._ceVNode || Je(n, r);
          return C.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(C, a, w), f = !0, d._container = a, a.__vue_app__ = d, zs(C.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Ee(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = nt;
        nt = d;
        try {
          return a();
        } finally {
          nt = p;
        }
      }
    };
    return d;
  };
}
let nt = null;
const co = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fe(t)}Modifiers`] || e[`${ze(t)}Modifiers`];
function fo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || V;
  let r = s;
  const i = t.startsWith("update:"), o = i && co(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => z(a) ? a.trim() : a)), o.number && (r = s.map(Wr)));
  let l, f = n[l = os(t)] || // also try camelCase event handler (#2249)
  n[l = os(fe(t))];
  !f && i && (f = n[l = os(ze(t))]), f && Ee(
    f,
    e,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ee(
      d,
      e,
      6,
      r
    );
  }
}
const uo = /* @__PURE__ */ new WeakMap();
function mr(e, t, s = !1) {
  const n = s ? uo : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (d) => {
      const a = mr(d, t, !0);
      a && (l = !0, Z(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (N(e) && n.set(e, null), null) : (P(i) ? i.forEach((f) => o[f] = null) : Z(o, i), N(e) && n.set(e, o), o);
}
function ss(e, t) {
  return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, ze(t)) || j(e, t));
}
function hn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: w,
    setupState: C,
    ctx: H,
    inheritAttrs: M
  } = e, G = Bt(e);
  let B, R;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n, Y = O;
      B = ve(
        d.call(
          Y,
          O,
          a,
          p,
          C,
          w,
          H
        )
      ), R = l;
    } else {
      const O = t;
      B = ve(
        O.length > 1 ? O(
          p,
          { attrs: l, slots: o, emit: f }
        ) : O(
          p,
          null
        )
      ), R = t.props ? l : ao(l);
    }
  } catch (O) {
    vt.length = 0, es(O, e, 1), B = Je(it);
  }
  let W = B;
  if (R && M !== !1) {
    const O = Object.keys(R), { shapeFlag: Y } = W;
    O.length && Y & 7 && (i && O.some(Xt) && (R = ho(
      R,
      i
    )), W = ot(W, R, !1, !0));
  }
  return s.dirs && (W = ot(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && Bs(W, s.transition), B = W, Bt(G), B;
}
const ao = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Yt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ho = (e, t) => {
  const s = {};
  for (const n in e)
    (!Xt(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function po(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? pn(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (br(o, n, w) && !ss(d, w))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? pn(n, o, d) : !0 : !!o;
  return !1;
}
function pn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (br(t, e, i) && !ss(s, i))
      return !0;
  }
  return !1;
}
function br(e, t, s) {
  const n = e[s], r = t[s];
  return s === "style" && N(n) && N(r) ? !Ds(n, r) : n !== r;
}
function go({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = n, e = r), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const yr = {}, xr = () => Object.create(yr), vr = (e) => Object.getPrototypeOf(e) === yr;
function _o(e, t, s, n = !1) {
  const r = {}, i = xr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : /* @__PURE__ */ mi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function mo(e, t, s, n) {
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
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (ss(e.emitsOptions, w))
          continue;
        const C = t[w];
        if (f)
          if (j(i, w))
            C !== i[w] && (i[w] = C, d = !0);
          else {
            const H = fe(w);
            r[H] = Es(
              f,
              l,
              H,
              C,
              e,
              !1
            );
          }
        else
          C !== i[w] && (i[w] = C, d = !0);
      }
    }
  } else {
    Sr(e, t, r, i) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !j(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ze(p)) === p || !j(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Es(
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
  d && Me(e.attrs, "set", "");
}
function Sr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (gt(f))
        continue;
      const d = t[f];
      let a;
      r && j(r, a = fe(f)) ? !i || !i.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : ss(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (i) {
    const f = /* @__PURE__ */ D(s), d = l || V;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Es(
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
function Es(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = j(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && I(f)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = Pt(r);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ze(s)) && (n = !0));
  }
  return n;
}
const bo = /* @__PURE__ */ new WeakMap();
function wr(e, t, s = !1) {
  const n = s ? bo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [w, C] = wr(p, t, !0);
      Z(o, w), C && l.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return N(e) && n.set(e, et), et;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = fe(i[a]);
      gn(p) && (o[p] = V);
    }
  else if (i)
    for (const a in i) {
      const p = fe(a);
      if (gn(p)) {
        const w = i[a], C = o[p] = P(w) || I(w) ? { type: w } : Z({}, w), H = C.type;
        let M = !1, G = !0;
        if (P(H))
          for (let B = 0; B < H.length; ++B) {
            const R = H[B], W = I(R) && R.name;
            if (W === "Boolean") {
              M = !0;
              break;
            } else W === "String" && (G = !1);
          }
        else
          M = I(H) && H.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = M, C[
          1
          /* shouldCastTrue */
        ] = G, (M || j(C, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return N(e) && n.set(e, d), d;
}
function gn(e) {
  return e[0] !== "$" && !gt(e);
}
const qs = (e) => e === "_" || e === "_ctx" || e === "$stable", Gs = (e) => P(e) ? e.map(ve) : [ve(e)], yo = (e, t, s) => {
  if (t._n)
    return t;
  const n = Ii((...r) => Gs(t(...r)), s);
  return n._c = !1, n;
}, Cr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (qs(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = yo(r, i, n);
    else if (i != null) {
      const o = Gs(i);
      t[r] = () => o;
    }
  }
}, Tr = (e, t) => {
  const s = Gs(t);
  e.slots.default = () => s;
}, Er = (e, t, s) => {
  for (const n in t)
    (s || !qs(n)) && (e[n] = t[n]);
}, xo = (e, t, s) => {
  const n = e.slots = xr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Er(n, t, s), s && $n(n, "_", r, !0)) : Cr(t, n);
  } else t && Tr(e, t);
}, vo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = V;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Er(r, t, s) : (i = !t.$stable, Cr(t, r)), o = t;
  } else t && (Tr(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !qs(l) && o[l] == null && delete r[l];
}, re = Eo;
function So(e) {
  return wo(e);
}
function wo(e, t) {
  const s = Qt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: C = Ce,
    insertStaticContent: H
  } = e, M = (c, u, h, b = null, g = null, _ = null, v = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !dt(c, u) && (b = Dt(c), he(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: m, ref: E, shapeFlag: S } = u;
    switch (m) {
      case ns:
        G(c, u, h, b);
        break;
      case it:
        B(c, u, h, b);
        break;
      case gs:
        c == null && R(u, h, b, v);
        break;
      case xe:
        It(
          c,
          u,
          h,
          b,
          g,
          _,
          v,
          x,
          y
        );
        break;
      default:
        S & 1 ? Y(
          c,
          u,
          h,
          b,
          g,
          _,
          v,
          x,
          y
        ) : S & 6 ? Rt(
          c,
          u,
          h,
          b,
          g,
          _,
          v,
          x,
          y
        ) : (S & 64 || S & 128) && m.process(
          c,
          u,
          h,
          b,
          g,
          _,
          v,
          x,
          y,
          ft
        );
    }
    E != null && g ? bt(E, c && c.ref, _, u || c, !u) : E == null && c && c.ref != null && bt(c.ref, null, _, c, !0);
  }, G = (c, u, h, b) => {
    if (c == null)
      n(
        u.el = l(u.children),
        h,
        b
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, B = (c, u, h, b) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      b
    ) : u.el = c.el;
  }, R = (c, u, h, b) => {
    [c.el, c.anchor] = H(
      c.children,
      u,
      h,
      b,
      c.el,
      c.anchor
    );
  }, W = ({ el: c, anchor: u }, h, b) => {
    let g;
    for (; c && c !== u; )
      g = w(c), n(c, h, b), c = g;
    n(u, h, b);
  }, O = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = w(c), r(c), c = h;
    r(u);
  }, Y = (c, u, h, b, g, _, v, x, y) => {
    if (u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), c == null)
      je(
        u,
        h,
        b,
        g,
        _,
        v,
        x,
        y
      );
    else {
      const m = c.el && c.el._isVueCE ? c.el : null;
      try {
        m && m._beginPatch(), Mt(
          c,
          u,
          g,
          _,
          v,
          x,
          y
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, je = (c, u, h, b, g, _, v, x) => {
    let y, m;
    const { props: E, shapeFlag: S, transition: T, dirs: A } = c;
    if (y = c.el = o(
      c.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(y, c.children) : S & 16 && He(
      c.children,
      y,
      null,
      b,
      g,
      ps(c, _),
      v,
      x
    ), A && Ve(c, null, b, "created"), de(y, c, c.scopeId, v, b), E) {
      for (const L in E)
        L !== "value" && !gt(L) && i(y, L, null, E[L], _, b);
      "value" in E && i(y, "value", null, E.value, _), (m = E.onVnodeBeforeMount) && me(m, b, c);
    }
    A && Ve(c, null, b, "beforeMount");
    const F = Co(g, T);
    F && T.beforeEnter(y), n(y, u, h), ((m = E && E.onVnodeMounted) || F || A) && re(() => {
      try {
        m && me(m, b, c), F && T.enter(y), A && Ve(c, null, b, "mounted");
      } finally {
      }
    }, g);
  }, de = (c, u, h, b, g) => {
    if (h && C(c, h), b)
      for (let _ = 0; _ < b.length; _++)
        C(c, b[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Mr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const v = g.vnode;
        de(
          c,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, He = (c, u, h, b, g, _, v, x, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const E = c[m] = x ? Pe(c[m]) : ve(c[m]);
      M(
        null,
        E,
        u,
        h,
        b,
        g,
        _,
        v,
        x
      );
    }
  }, Mt = (c, u, h, b, g, _, v) => {
    const x = u.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: E } = u;
    y |= c.patchFlag & 16;
    const S = c.props || V, T = u.props || V;
    let A;
    if (h && We(h, !1), (A = T.onVnodeBeforeUpdate) && me(A, h, u, c), E && Ve(u, c, h, "beforeUpdate"), h && We(h, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(x, ""), m ? $e(
      c.dynamicChildren,
      m,
      x,
      h,
      b,
      ps(u, g),
      _
    ) : v || $(
      c,
      u,
      x,
      null,
      h,
      b,
      ps(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        lt(x, S, T, h, g);
      else if (y & 2 && S.class !== T.class && i(x, "class", null, T.class, g), y & 4 && i(x, "style", S.style, T.style, g), y & 8) {
        const F = u.dynamicProps;
        for (let L = 0; L < F.length; L++) {
          const K = F[L], J = S[K], X = T[K];
          (X !== J || K === "value") && i(x, K, J, X, g, h);
        }
      }
      y & 1 && c.children !== u.children && a(x, u.children);
    } else !v && m == null && lt(x, S, T, h, g);
    ((A = T.onVnodeUpdated) || E) && re(() => {
      A && me(A, h, u, c), E && Ve(u, c, h, "updated");
    }, b);
  }, $e = (c, u, h, b, g, _, v) => {
    for (let x = 0; x < u.length; x++) {
      const y = c[x], m = u[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dt(y, m) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        y,
        m,
        E,
        null,
        b,
        g,
        _,
        v,
        !0
      );
    }
  }, lt = (c, u, h, b, g) => {
    if (u !== h) {
      if (u !== V)
        for (const _ in u)
          !gt(_) && !(_ in h) && i(
            c,
            _,
            u[_],
            null,
            g,
            b
          );
      for (const _ in h) {
        if (gt(_)) continue;
        const v = h[_], x = u[_];
        v !== x && _ !== "value" && i(c, _, x, v, g, b);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, It = (c, u, h, b, g, _, v, x, y) => {
    const m = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: A } = u;
    A && (x = x ? x.concat(A) : A), c == null ? (n(m, h, b), n(E, h, b), He(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      E,
      g,
      _,
      v,
      x,
      y
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === T.length ? ($e(
      c.dynamicChildren,
      T,
      h,
      g,
      _,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Ar(
      c,
      u,
      !0
      /* shallow */
    )) : $(
      c,
      u,
      h,
      E,
      g,
      _,
      v,
      x,
      y
    );
  }, Rt = (c, u, h, b, g, _, v, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      b,
      v,
      y
    ) : rs(
      u,
      h,
      b,
      g,
      _,
      v,
      y
    ) : Ys(c, u, y);
  }, rs = (c, u, h, b, g, _, v) => {
    const x = c.component = jo(
      c,
      b,
      g
    );
    if (dr(c) && (x.ctx.renderer = ft), No(x, !1, v), x.asyncDep) {
      if (g && g.registerDep(x, ee, v), !c.el) {
        const y = x.subTree = Je(it);
        B(null, y, u, h), c.placeholder = y.el;
      }
    } else
      ee(
        x,
        c,
        u,
        h,
        g,
        _,
        v
      );
  }, Ys = (c, u, h) => {
    const b = u.component = c.component;
    if (po(c, u, h))
      if (b.asyncDep && !b.asyncResolved) {
        q(b, u, h);
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, ee = (c, u, h, b, g, _, v) => {
    const x = () => {
      if (c.isMounted) {
        let { next: S, bu: T, u: A, parent: F, vnode: L } = c;
        {
          const ge = Or(c);
          if (ge) {
            S && (S.el = L.el, q(c, S, v)), ge.asyncDep.then(() => {
              re(() => {
                c.isUnmounted || m();
              }, g);
            });
            return;
          }
        }
        let K = S, J;
        We(c, !1), S ? (S.el = L.el, q(c, S, v)) : S = L, T && ls(T), (J = S.props && S.props.onVnodeBeforeUpdate) && me(J, F, S, L), We(c, !0);
        const X = hn(c), pe = c.subTree;
        c.subTree = X, M(
          pe,
          X,
          // parent may have changed if it's in a teleport
          p(pe.el),
          // anchor may have changed if it's in a fragment
          Dt(pe),
          c,
          g,
          _
        ), S.el = X.el, K === null && go(c, X.el), A && re(A, g), (J = S.props && S.props.onVnodeUpdated) && re(
          () => me(J, F, S, L),
          g
        );
      } else {
        let S;
        const { el: T, props: A } = u, { bm: F, m: L, parent: K, root: J, type: X } = c, pe = yt(u);
        We(c, !1), F && ls(F), !pe && (S = A && A.onVnodeBeforeMount) && me(S, K, u), We(c, !0);
        {
          J.ce && J.ce._hasShadowRoot() && J.ce._injectChildStyle(
            X,
            c.parent ? c.parent.type : void 0
          );
          const ge = c.subTree = hn(c);
          M(
            null,
            ge,
            h,
            b,
            c,
            g,
            _
          ), u.el = ge.el;
        }
        if (L && re(L, g), !pe && (S = A && A.onVnodeMounted)) {
          const ge = u;
          re(
            () => me(S, K, ge),
            g
          );
        }
        (u.shapeFlag & 256 || K && yt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && re(c.a, g), c.isMounted = !0, u = h = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Wn(x);
    c.scope.off();
    const m = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Ws(E), We(c, !0), m();
  }, q = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, mo(c, u.props, b, h), vo(c, u.children, h), Ie(), on(c), Re();
  }, $ = (c, u, h, b, g, _, v, x, y = !1) => {
    const m = c && c.children, E = c ? c.shapeFlag : 0, S = u.children, { patchFlag: T, shapeFlag: A } = u;
    if (T > 0) {
      if (T & 128) {
        Ft(
          m,
          S,
          h,
          b,
          g,
          _,
          v,
          x,
          y
        );
        return;
      } else if (T & 256) {
        Ke(
          m,
          S,
          h,
          b,
          g,
          _,
          v,
          x,
          y
        );
        return;
      }
    }
    A & 8 ? (E & 16 && ct(m, g, _), S !== m && a(h, S)) : E & 16 ? A & 16 ? Ft(
      m,
      S,
      h,
      b,
      g,
      _,
      v,
      x,
      y
    ) : ct(m, g, _, !0) : (E & 8 && a(h, ""), A & 16 && He(
      S,
      h,
      b,
      g,
      _,
      v,
      x,
      y
    ));
  }, Ke = (c, u, h, b, g, _, v, x, y) => {
    c = c || et, u = u || et;
    const m = c.length, E = u.length, S = Math.min(m, E);
    let T;
    for (T = 0; T < S; T++) {
      const A = u[T] = y ? Pe(u[T]) : ve(u[T]);
      M(
        c[T],
        A,
        h,
        null,
        g,
        _,
        v,
        x,
        y
      );
    }
    m > E ? ct(
      c,
      g,
      _,
      !0,
      !1,
      S
    ) : He(
      u,
      h,
      b,
      g,
      _,
      v,
      x,
      y,
      S
    );
  }, Ft = (c, u, h, b, g, _, v, x, y) => {
    let m = 0;
    const E = u.length;
    let S = c.length - 1, T = E - 1;
    for (; m <= S && m <= T; ) {
      const A = c[m], F = u[m] = y ? Pe(u[m]) : ve(u[m]);
      if (dt(A, F))
        M(
          A,
          F,
          h,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      m++;
    }
    for (; m <= S && m <= T; ) {
      const A = c[S], F = u[T] = y ? Pe(u[T]) : ve(u[T]);
      if (dt(A, F))
        M(
          A,
          F,
          h,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      S--, T--;
    }
    if (m > S) {
      if (m <= T) {
        const A = T + 1, F = A < E ? u[A].el : b;
        for (; m <= T; )
          M(
            null,
            u[m] = y ? Pe(u[m]) : ve(u[m]),
            h,
            F,
            g,
            _,
            v,
            x,
            y
          ), m++;
      }
    } else if (m > T)
      for (; m <= S; )
        he(c[m], g, _, !0), m++;
    else {
      const A = m, F = m, L = /* @__PURE__ */ new Map();
      for (m = F; m <= T; m++) {
        const oe = u[m] = y ? Pe(u[m]) : ve(u[m]);
        oe.key != null && L.set(oe.key, m);
      }
      let K, J = 0;
      const X = T - F + 1;
      let pe = !1, ge = 0;
      const ut = new Array(X);
      for (m = 0; m < X; m++) ut[m] = 0;
      for (m = A; m <= S; m++) {
        const oe = c[m];
        if (J >= X) {
          he(oe, g, _, !0);
          continue;
        }
        let _e;
        if (oe.key != null)
          _e = L.get(oe.key);
        else
          for (K = F; K <= T; K++)
            if (ut[K - F] === 0 && dt(oe, u[K])) {
              _e = K;
              break;
            }
        _e === void 0 ? he(oe, g, _, !0) : (ut[_e - F] = m + 1, _e >= ge ? ge = _e : pe = !0, M(
          oe,
          u[_e],
          h,
          null,
          g,
          _,
          v,
          x,
          y
        ), J++);
      }
      const Qs = pe ? To(ut) : et;
      for (K = Qs.length - 1, m = X - 1; m >= 0; m--) {
        const oe = F + m, _e = u[oe], ks = u[oe + 1], en = oe + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ks.el || Pr(ks)
        ) : b;
        ut[m] === 0 ? M(
          null,
          _e,
          h,
          en,
          g,
          _,
          v,
          x,
          y
        ) : pe && (K < 0 || m !== Qs[K] ? Ue(_e, h, en, 2) : K--);
      }
    }
  }, Ue = (c, u, h, b, g = null) => {
    const { el: _, type: v, transition: x, children: y, shapeFlag: m } = c;
    if (m & 6) {
      Ue(c.component.subTree, u, h, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (m & 64) {
      v.move(c, u, h, ft);
      return;
    }
    if (v === xe) {
      n(_, u, h);
      for (let S = 0; S < y.length; S++)
        Ue(y[S], u, h, b);
      n(c.anchor, u, h);
      return;
    }
    if (v === gs) {
      W(c, u, h);
      return;
    }
    if (b !== 2 && m & 1 && x)
      if (b === 0)
        x.beforeEnter(_), n(_, u, h), re(() => x.enter(_), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: A } = x, F = () => {
          c.ctx.isUnmounted ? r(_) : n(_, u, h);
        }, L = () => {
          _._isLeaving && _[Li](
            !0
            /* cancelled */
          ), S(_, () => {
            F(), A && A();
          });
        };
        T ? T(_, F, L) : L();
      }
    else
      n(_, u, h);
  }, he = (c, u, h, b = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: x,
      children: y,
      dynamicChildren: m,
      shapeFlag: E,
      patchFlag: S,
      dirs: T,
      cacheIndex: A,
      memo: F
    } = c;
    if (S === -2 && (g = !1), x != null && (Ie(), bt(x, null, h, c, !0), Re()), A != null && (u.renderCache[A] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const L = E & 1 && T, K = !yt(c);
    let J;
    if (K && (J = v && v.onVnodeBeforeUnmount) && me(J, u, c), E & 6)
      Nr(c.component, h, b);
    else {
      if (E & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      L && Ve(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        h,
        ft,
        b
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== xe || S > 0 && S & 64) ? ct(
        m,
        u,
        h,
        !1,
        !0
      ) : (_ === xe && S & 384 || !g && E & 16) && ct(y, u, h), b && Xs(c);
    }
    const X = F != null && A == null;
    (K && (J = v && v.onVnodeUnmounted) || L || X) && re(() => {
      J && me(J, u, c), L && Ve(c, null, u, "unmounted"), X && (c.el = null);
    }, h);
  }, Xs = (c) => {
    const { type: u, el: h, anchor: b, transition: g } = c;
    if (u === xe) {
      Hr(h, b);
      return;
    }
    if (u === gs) {
      O(c);
      return;
    }
    const _ = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: x } = g, y = () => v(h, _);
      x ? x(c.el, _, y) : y();
    } else
      _();
  }, Hr = (c, u) => {
    let h;
    for (; c !== u; )
      h = w(c), r(c), c = h;
    r(u);
  }, Nr = (c, u, h) => {
    const { bum: b, scope: g, job: _, subTree: v, um: x, m: y, a: m } = c;
    _n(y), _n(m), b && ls(b), g.stop(), _ && (_.flags |= 8, he(v, c, u, h)), x && re(x, u), re(() => {
      c.isUnmounted = !0;
    }, u);
  }, ct = (c, u, h, b = !1, g = !1, _ = 0) => {
    for (let v = _; v < c.length; v++)
      he(c[v], u, h, b, g);
  }, Dt = (c) => {
    if (c.shapeFlag & 6)
      return Dt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), h = u && u[Hi];
    return h ? w(h) : u;
  };
  let is = !1;
  const Zs = (c, u, h) => {
    let b;
    c == null ? u._vnode && (he(u._vnode, null, null, !0), b = u._vnode.component) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, is || (is = !0, on(b), or(), is = !1);
  }, ft = {
    p: M,
    um: he,
    m: Ue,
    r: Xs,
    mt: rs,
    mc: He,
    pc: $,
    pbc: $e,
    n: Dt,
    o: e
  };
  return {
    render: Zs,
    hydrate: void 0,
    createApp: lo(Zs)
  };
}
function ps({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function We({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Co(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ar(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Pe(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Ar(o, l)), l.type === ns && (l.patchFlag === -1 && (l = r[i] = Pe(l)), l.el = o.el), l.type === it && !l.el && (l.el = o.el);
    }
}
function To(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < d ? i = l + 1 : o = l;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Or(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Or(t);
}
function _n(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Pr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Pr(t.subTree) : null;
}
const Mr = (e) => e.__isSuspense;
function Eo(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Mi(e);
}
const xe = /* @__PURE__ */ Symbol.for("v-fgt"), ns = /* @__PURE__ */ Symbol.for("v-txt"), it = /* @__PURE__ */ Symbol.for("v-cmt"), gs = /* @__PURE__ */ Symbol.for("v-stc"), vt = [];
let le = null;
function Xe(e = !1) {
  vt.push(le = e ? null : []);
}
function Ao() {
  vt.pop(), le = vt[vt.length - 1] || null;
}
let Tt = 1;
function mn(e, t = !1) {
  Tt += e, e < 0 && le && t && (le.hasOnce = !0);
}
function Oo(e) {
  return e.dynamicChildren = Tt > 0 ? le || et : null, Ao(), Tt > 0 && le && le.push(e), e;
}
function Ze(e, t, s, n, r, i) {
  return Oo(
    ke(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rr = ({ key: e }) => e ?? null, Kt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || /* @__PURE__ */ k(e) || I(e) ? { i: we, r: e, k: t, f: !!s } : e : null);
function ke(e, t = null, s = null, n = 0, r = null, i = e === xe ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rr(t),
    ref: t && Kt(t),
    scopeId: cr,
    slotScopeIds: null,
    children: s,
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
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: we
  };
  return l ? (Js(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= z(s) ? 8 : 16), Tt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && le.push(f), f;
}
const Je = Po;
function Po(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Qi) && (e = it), Ir(e)) {
    const l = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Js(l, s), Tt > 0 && !i && le && (l.shapeFlag & 6 ? le[le.indexOf(e)] = l : le.push(l)), l.patchFlag = -2, l;
  }
  if (Uo(e) && (e = e.__vccOpts), t) {
    t = Mo(t);
    let { class: l, style: f } = t;
    l && !z(l) && (t.class = Fs(l)), N(f) && (/* @__PURE__ */ Vs(f) && !P(f) && (f = Z({}, f)), t.style = Rs(f));
  }
  const o = z(e) ? 1 : Mr(e) ? 128 : Ni(e) ? 64 : N(e) ? 4 : I(e) ? 2 : 0;
  return ke(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Mo(e) {
  return e ? /* @__PURE__ */ Vs(e) || vr(e) ? Z({}, e) : e : null;
}
function ot(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? Ro(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Rr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Kt(t)) : [i, Kt(t)] : Kt(t)
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
    patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Bs(
    a,
    f.clone(a)
  ), a;
}
function Io(e = " ", t = 0) {
  return Je(ns, null, e, t);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? Je(it) : P(e) ? Je(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ir(e) ? Pe(e) : Je(ns, null, String(e));
}
function Pe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function Js(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Js(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !vr(t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: we }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Io(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ro(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Fs([t.class, n.class]));
      else if (r === "style")
        t.style = Rs([t.style, n.style]);
      else if (Yt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xt(r) && (t[r] = o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function me(e, t, s, n = null) {
  Ee(e, t, 7, [
    s,
    n
  ]);
}
const Fo = _r();
let Do = 0;
function jo(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Fo, i = {
    uid: Do++,
    vnode: e,
    type: n,
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
    scope: new Zr(
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
    propsOptions: wr(n, r),
    emitsOptions: mr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: V,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: V,
    data: V,
    props: V,
    attrs: V,
    slots: V,
    refs: V,
    setupState: V,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fo.bind(null, i), e.ce && e.ce(i), i;
}
let ne = null;
const Ho = () => ne || we;
let zt, As;
{
  const e = Qt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ne = s
  ), As = t(
    "__VUE_SSR_SETTERS__",
    (s) => Et = s
  );
}
const Pt = (e) => {
  const t = ne;
  return zt(e), e.scope.on(), () => {
    e.scope.off(), zt(t);
  };
}, bn = () => {
  ne && ne.scope.off(), zt(null);
};
function Fr(e) {
  return e.vnode.shapeFlag & 4;
}
let Et = !1;
function No(e, t = !1, s = !1) {
  t && As(t);
  const { props: n, children: r } = e.vnode, i = Fr(e);
  _o(e, n, i, t), xo(e, r, s || t);
  const o = i ? Lo(e, t) : void 0;
  return t && As(!1), o;
}
function Lo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eo);
  const { setup: n } = s;
  if (n) {
    Ie();
    const r = e.setupContext = n.length > 1 ? Ko(e) : null, i = Pt(e), o = Ot(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = jn(o);
    if (Re(), i(), (l || e.sp) && !yt(e) && ar(e), l) {
      if (o.then(bn, bn), t)
        return o.then((f) => {
          yn(e, f);
        }).catch((f) => {
          es(f, e, 0);
        });
      e.asyncDep = o;
    } else
      yn(e, o);
  } else
    Dr(e);
}
function yn(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : N(t) && (e.setupState = nr(t)), Dr(e);
}
function Dr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ce);
  {
    const r = Pt(e);
    Ie();
    try {
      to(e);
    } finally {
      Re(), r();
    }
  }
}
const $o = {
  get(e, t) {
    return Q(e, "get", ""), e[t];
  }
};
function Ko(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, $o),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nr(bi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in xt)
        return xt[s](e);
    },
    has(t, s) {
      return s in t || s in xt;
    }
  })) : e.proxy;
}
function Uo(e) {
  return I(e) && "__vccOpts" in e;
}
const Vo = (e, t) => /* @__PURE__ */ Ci(e, t, Et), Wo = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Os;
const xn = typeof window < "u" && window.trustedTypes;
if (xn)
  try {
    Os = /* @__PURE__ */ xn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = Os ? (e) => Os.createHTML(e) : (e) => e, Bo = "http://www.w3.org/2000/svg", qo = "http://www.w3.org/1998/Math/MathML", Oe = typeof document < "u" ? document : null, vn = Oe && /* @__PURE__ */ Oe.createElement("template"), Go = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Oe.createElementNS(Bo, e) : t === "mathml" ? Oe.createElementNS(qo, e) : s ? Oe.createElement(e, { is: s }) : Oe.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Oe.createTextNode(e),
  createComment: (e) => Oe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Oe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      vn.innerHTML = jr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = vn.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Jo = /* @__PURE__ */ Symbol("_vtc");
function zo(e, t, s) {
  const n = e[Jo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Sn = /* @__PURE__ */ Symbol("_vod"), Yo = /* @__PURE__ */ Symbol("_vsh"), Xo = /* @__PURE__ */ Symbol(""), Zo = /(?:^|;)\s*display\s*:/;
function Qo(e, t, s) {
  const n = e.style, r = z(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (z(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Ut(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Ut(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Ut(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Xo];
      o && (s += ";" + o), n.cssText = s, i = Zo.test(s);
    }
  } else t && e.removeAttribute("style");
  Sn in e && (e[Sn] = i ? n.display : "", e[Yo] && (n.display = "none"));
}
const wn = /\s*!important$/;
function Ut(e, t, s) {
  if (P(s))
    s.forEach((n) => Ut(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ko(e, t);
    wn.test(s) ? e.setProperty(
      ze(n),
      s.replace(wn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Cn = ["Webkit", "Moz", "ms"], _s = {};
function ko(e, t) {
  const s = _s[t];
  if (s)
    return s;
  let n = fe(t);
  if (n !== "filter" && n in e)
    return _s[t] = n;
  n = Ln(n);
  for (let r = 0; r < Cn.length; r++) {
    const i = Cn[r] + n;
    if (i in e)
      return _s[t] = i;
  }
  return t;
}
const Tn = "http://www.w3.org/1999/xlink";
function En(e, t, s, n, r, i = Yr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Tn, t.slice(6, t.length)) : e.setAttributeNS(Tn, t, s) : s == null || i && !Kn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Te(s) ? String(s) : s
  );
}
function An(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? jr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Kn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function el(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const On = /* @__PURE__ */ Symbol("_vei");
function sl(e, t, s, n, r = null) {
  const i = e[On] || (e[On] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = nl(t);
    if (n) {
      const d = i[t] = ol(
        n,
        r
      );
      el(e, l, d, f);
    } else o && (tl(e, l, o, f), i[t] = void 0);
  }
}
const Pn = /(?:Once|Passive|Capture)$/;
function nl(e) {
  let t;
  if (Pn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Pn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ze(e.slice(2)), t];
}
let ms = 0;
const rl = /* @__PURE__ */ Promise.resolve(), il = () => ms || (rl.then(() => ms = 0), ms = Date.now());
function ol(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ee(
      ll(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = il(), s;
}
function ll(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Mn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cl = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? zo(e, n, o) : t === "style" ? Qo(e, s, n) : Yt(t) ? Xt(t) || sl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fl(e, t, n, o)) ? (An(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && En(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ul(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !z(n))) ? An(e, fe(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), En(e, t, n, o));
};
function fl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mn(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Mn(t) && z(s) ? !1 : t in e;
}
function ul(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = fe(t);
  return Array.isArray(s) ? s.some((r) => fe(r) === n) : Object.keys(s).some((r) => fe(r) === n);
}
const al = /* @__PURE__ */ Z({ patchProp: cl }, Go);
let In;
function dl() {
  return In || (In = So(al));
}
const hl = ((...e) => {
  const t = dl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = gl(n);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, pl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function pl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gl(e) {
  return z(e) ? document.querySelector(e) : e;
}
const _l = { class: "vue-widget-section" }, ml = { class: "vue-widget-title" }, bl = {
  key: 0,
  class: "country-status"
}, yl = {
  key: 1,
  class: "country-status country-error"
}, xl = {
  key: 2,
  class: "country-list"
}, vl = ["src"], Sl = { class: "country-name" }, wl = { class: "country-capital" }, Cl = /* @__PURE__ */ $i({
  __name: "App",
  props: {
    sdk: {}
  },
  setup(e) {
    const t = /* @__PURE__ */ Nt(e.sdk.getProps()), s = e.sdk.on("propsChanged", (f) => {
      t.value = f;
    });
    Gt(s);
    const n = /* @__PURE__ */ Nt([]), r = /* @__PURE__ */ Nt(!0), i = /* @__PURE__ */ Nt(null);
    let o = !1;
    new window.WidgetServiceSDK().connectors.execute({ permalink: "rest-countries", method: "GET" }).then((f) => {
      o || (n.value = [...f].sort((d, a) => a.population - d.population).slice(0, 5).map((d) => {
        var a;
        return { name: d.name.common, capital: ((a = d.capital) == null ? void 0 : a[0]) ?? "N/A", population: d.population, flag: d.flags.png };
      }), r.value = !1);
    }).catch((f) => {
      o || (i.value = f instanceof Error ? f.message : "Failed to load", r.value = !1);
    }), Gt(() => {
      o = !0;
    });
    const l = (f) => {
      f.target instanceof HTMLImageElement && (f.target.style.display = "none");
    };
    return (f, d) => (Xe(), Ze("section", _l, [
      ke("h3", ml, ht(t.value.title), 1),
      r.value ? (Xe(), Ze("p", bl, "Loading…")) : i.value ? (Xe(), Ze("p", yl, ht(i.value), 1)) : (Xe(), Ze("ul", xl, [
        (Xe(!0), Ze(xe, null, ki(n.value, (a) => (Xe(), Ze("li", {
          key: a.name,
          class: "country-item"
        }, [
          ke("img", {
            src: a.flag,
            alt: "",
            class: "country-flag",
            onError: l
          }, null, 40, vl),
          ke("span", Sl, ht(a.name), 1),
          ke("span", wl, ht(a.capital), 1)
        ]))), 128))
      ]))
    ]));
  }
});
let Tl = Lr;
const Rn = /* @__PURE__ */ new Set();
async function Al(e) {
  await e.whenReady();
  const t = document.createElement("style");
  t.textContent = Tl, Rn.add(t), e.shadowRoot.insertBefore(t, e.shadowRoot.firstChild);
  const s = hl(Cl, { sdk: e });
  s.mount(e.getContainer()), e.on("destroy", () => {
    Rn.delete(t), t.remove(), s.unmount();
  });
}
export {
  Al as init
};
