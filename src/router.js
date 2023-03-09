import { createWebHistory, createRouter } from "vue-router";
import LK from "./routes/LK";
import Constructor from "./routes/Constructor";
import ConstructorModal from "./routes/ConstructorModal";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LK,
  },
  {
    path: "/constructor",
    name: "Constructor",
    component: Constructor,
  },
  {
    path: "/constructor_modal",
    name: "ConstructorModal",
    component: ConstructorModal,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
