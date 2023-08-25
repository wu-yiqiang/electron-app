import { d as defineComponent, o as openBlock, c as createElementBlock, _ as _export_sfc, r as ref, a as createBaseVNode, b as createVNode, e as createStaticVNode, p as pushScopeId, f as popScopeId } from "./index-f0e028e1.js";
const _hoisted_1$1 = ["value"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    value: {
      type: [String, Number],
      required: true,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        class: "input-box",
        type: "text",
        value: __props.value
      }, null, 8, _hoisted_1$1);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_4dc8ba09_lang = "";
const eleInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4dc8ba09"]]);
const _withScopeId = (n) => (pushScopeId("data-v-a3423576"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "setting" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title-box" }, "设置", -1));
const _hoisted_3 = { class: "setting-box" };
const _hoisted_4 = { class: "general-box" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="general-title" data-v-a3423576>通用</div><div class="general-box-item" data-v-a3423576><div class="item-title" data-v-a3423576>主题</div></div><div class="general-box-item" data-v-a3423576><div class="item-title" data-v-a3423576>语言</div></div>', 3);
const _hoisted_8 = { class: "general-box-item" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-title" }, "最小化到托盘", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "recevice-box" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "recevice-title" }, "接收"),
  /* @__PURE__ */ createBaseVNode("div", { class: "recevice-box-item" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "item-title" }, "保存目录")
  ])
], -1));
const _hoisted_11 = { class: "network-box" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "network-title" }, "网络", -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "network-box-item" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "item-title" }, "服务器")
], -1));
const _hoisted_14 = { class: "network-box-item" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-title" }, "别名", -1));
const _hoisted_16 = { class: "network-box-item" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-title" }, "IP", -1));
const _hoisted_18 = { class: "network-box-item" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "item-title" }, "端口", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const alias = ref("哈哈哈");
    const port = ref(3393);
    const ip = ref("192.168.0.12");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            createBaseVNode("div", _hoisted_8, [
              _hoisted_9,
              createVNode(eleInput, { value: "YES" })
            ])
          ]),
          _hoisted_10,
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            _hoisted_13,
            createBaseVNode("div", _hoisted_14, [
              _hoisted_15,
              createVNode(eleInput, { value: alias.value }, null, 8, ["value"])
            ]),
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createVNode(eleInput, { value: ip.value }, null, 8, ["value"])
            ]),
            createBaseVNode("div", _hoisted_18, [
              _hoisted_19,
              createVNode(eleInput, { value: port.value }, null, 8, ["value"])
            ])
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_a3423576_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3423576"]]);
export {
  index as default
};
