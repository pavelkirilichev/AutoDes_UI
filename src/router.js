import { createWebHistory, createRouter } from "vue-router";
import LK from "./routes/LK";
import Constructor from "./routes/Constructor";
import ConstructorModal from "./routes/ConstructorModal";
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
