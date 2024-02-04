var R = Object.defineProperty;
var z = (t, e, n) => e in t ? R(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var a = (t, e, n) => (z(t, typeof e != "symbol" ? e + "" : e, n), n);
function p() {
}
function L(t) {
  return t();
}
function O() {
  return /* @__PURE__ */ Object.create(null);
}
function y(t) {
  t.forEach(L);
}
function T(t) {
  return typeof t == "function";
}
function F(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function H(t) {
  return Object.keys(t).length === 0;
}
function g(t, e) {
  t.appendChild(e);
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function B(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function $(t) {
  return document.createElement(t);
}
function I(t) {
  return document.createTextNode(t);
}
function U() {
  return I(" ");
}
function V(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function x(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function q(t) {
  return Array.from(t.childNodes);
}
function D(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
let k;
function _(t) {
  k = t;
}
const d = [], A = [];
let h = [];
const j = [], G = /* @__PURE__ */ Promise.resolve();
let w = !1;
function J() {
  w || (w = !0, G.then(P));
}
function v(t) {
  h.push(t);
}
const b = /* @__PURE__ */ new Set();
let f = 0;
function P() {
  if (f !== 0)
    return;
  const t = k;
  do {
    try {
      for (; f < d.length; ) {
        const e = d[f];
        f++, _(e), K(e.$$);
      }
    } catch (e) {
      throw d.length = 0, f = 0, e;
    }
    for (_(null), d.length = 0, f = 0; A.length; )
      A.pop()();
    for (let e = 0; e < h.length; e += 1) {
      const n = h[e];
      b.has(n) || (b.add(n), n());
    }
    h.length = 0;
  } while (d.length);
  for (; j.length; )
    j.pop()();
  w = !1, b.clear(), _(t);
}
function K(t) {
  if (t.fragment !== null) {
    t.update(), y(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(v);
  }
}
function Q(t) {
  const e = [], n = [];
  h.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), h = e;
}
const W = /* @__PURE__ */ new Set();
function X(t, e) {
  t && t.i && (W.delete(t), t.i(e));
}
function Y(t, e, n) {
  const { fragment: r, after_update: i } = t.$$;
  r && r.m(e, n), v(() => {
    const l = t.$$.on_mount.map(L).filter(T);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : y(l), t.$$.on_mount = [];
  }), i.forEach(v);
}
function Z(t, e) {
  const n = t.$$;
  n.fragment !== null && (Q(n.after_update), y(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), J(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, r, i, l, c, m = [-1]) {
  const s = k;
  _(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: p,
    not_equal: i,
    bound: O(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: O(),
    dirty: m,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  c && c(o.root);
  let E = !1;
  if (o.ctx = n ? n(t, e.props || {}, (u, S, ...C) => {
    const N = C.length ? C[0] : S;
    return o.ctx && i(o.ctx[u], o.ctx[u] = N) && (!o.skip_bound && o.bound[u] && o.bound[u](N), E && tt(t, u)), S;
  }) : [], o.update(), E = !0, y(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = q(e.target);
      o.fragment && o.fragment.l(u), u.forEach(B);
    } else
      o.fragment && o.fragment.c();
    e.intro && X(t.$$.fragment), Y(t, e.target, e.anchor), P();
  }
  _(s);
}
class nt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    a(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    a(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Z(this, 1), this.$destroy = p;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!T(n))
      return p;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !H(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rt);
function ot(t) {
  let e, n, r, i, l, c, m;
  return {
    c() {
      e = $("div"), n = $("p"), r = I(
        /*text*/
        t[0]
      ), i = U(), l = $("input"), x(l, "type", "button"), l.value = "Fly to the Sapporo", x(e, "class", "maplibregl-ctrl maplibregl-ctrl-group svelte-1t16lwb"), x(e, "id", "mapmapviewer-control");
    },
    m(s, o) {
      M(s, e, o), g(e, n), g(n, r), g(e, i), g(e, l), c || (m = V(
        l,
        "click",
        /*flyToSapporo*/
        t[1]
      ), c = !0);
    },
    p(s, [o]) {
      o & /*text*/
      1 && D(
        r,
        /*text*/
        s[0]
      );
    },
    i: p,
    o: p,
    d(s) {
      s && B(e), c = !1, m();
    }
  };
}
function it(t, e, n) {
  let { map: r } = e, { text: i = "hello, world!" } = e;
  function l() {
    r.flyTo({
      center: [141.34, 43.07],
      zoom: 10,
      speed: 0.8
    });
  }
  return t.$$set = (c) => {
    "map" in c && n(2, r = c.map), "text" in c && n(0, i = c.text);
  }, [i, l, r];
}
let lt = class extends nt {
  constructor(e) {
    super(), et(this, e, it, ot, F, { map: 2, text: 0 });
  }
};
const ct = {
  text: "Hello, world!"
};
class at {
  constructor(e) {
    a(this, "text");
    a(this, "container");
    a(this, "map");
    this.text = (e == null ? void 0 : e.text) || ct.text, this.map = null;
  }
  onAdd(e) {
    return this.container = document.createElement("div"), this.map = e, new lt({
      target: this.container,
      props: {
        map: this.map,
        text: this.text
      }
    }), this.container;
  }
  onRemove() {
    var e;
    (e = this.container.parentNode) == null || e.removeChild(this.container), this.map = null;
  }
}
export {
  at as SampleControl
};
//# sourceMappingURL=maplibre-gl-sample-svelte-control.js.map
