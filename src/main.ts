import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Layui from "@layui/layui-vue";
import "@layui/layui-vue/lib/index.css";

createApp(App).use(Layui).use(store).use(router).mount("#app");
