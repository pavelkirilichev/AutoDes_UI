import { createWebHistory, createRouter } from "vue-router";
import LK from "./routes/LK";
import Constructor from "./routes/Constructor";
import ConstructorModal from "./routes/ConstructorModal";
import Projects from "./routes/Projects";
import LK_Modal from "./routes/LK_Modal";

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
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/lk_modal",
    name: "LK_Modal",
    component: LK_Modal,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
