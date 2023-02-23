import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShopView from '../views/ShopView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import CartView from '../views/CartView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/shop',
			name: 'shop',
			component: ShopView,
		},
		{
			path: '/product/:id',
			name: 'product-details',
			props: true,
			component: ProductDetailsView,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/contact',
			name: 'contacts',
			component: ContactView,
		},
	],
});

export default router;
