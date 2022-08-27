import { defineComponent as p, openBlock as u, createElementBlock as _, createTextVNode as m, toDisplayString as d, createElementVNode as c, ref as f, createVNode as l, unref as r, pushScopeId as y, popScopeId as v } from "vue";
import i from "primevue/button";
const g = /* @__PURE__ */ c("span", {
  class: "icon-heart",
  style: { color: "tomato" }
}, null, -1), x = /* @__PURE__ */ p({
  props: {
    message: null
  },
  setup(e) {
    return (t, o) => (u(), _("div", null, [
      m(" Hello " + d(e.message) + "! ", 1),
      g
    ]));
  }
}), C = (e) => (y("data-v-266dd867"), e = e(), v(), e), b = { class: "flex align-content-center flex-wrap counter" }, j = /* @__PURE__ */ C(() => /* @__PURE__ */ c("label", { class: "flex align-items-center justify-content-center" }, "Counter:", -1)), S = { class: "flex align-items-center justify-content-center count" }, k = /* @__PURE__ */ p({
  setup(e) {
    const t = f(0);
    return (o, n) => (u(), _("div", b, [
      j,
      l(r(i), {
        icon: "pi pi-plus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: n[0] || (n[0] = (s) => t.value++)
      }),
      c("span", S, d(t.value), 1),
      l(r(i), {
        icon: "pi pi-minus",
        class: "p-button-sm flex align-items-center justify-content-center",
        onClick: n[1] || (n[1] = (s) => t.value--)
      })
    ]));
  }
});
const M = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, h = /* @__PURE__ */ M(k, [["__scopeId", "data-v-266dd867"]]), a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponentA: x,
  ComponentB: h
}, Symbol.toStringTag, { value: "Module" }));
const B = 100, A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAGIC_NUM: B
}, Symbol.toStringTag, { value: "Module" }));
function I(e, t) {
  return e + t;
}
const T = {
  add: I
};
function O(e) {
  for (const t in a)
    e.component(t, a[t]);
}
const V = { install: O };
export {
  x as ComponentA,
  h as ComponentB,
  A as MyConstants,
  T as MyUtil,
  V as default
};
