<template>
	<nav>
		<div>
			<router-link to="/">
				<img src="../assets/svgs/logoipsum-255.svg" />
			</router-link>
		</div>
		<ul>
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/shop">Shop</router-link>
			</li>
			<li>
				<router-link to="/about">About</router-link>
			</li>
			<li>
				<router-link to="/contact">Contact</router-link>
			</li>
		</ul>
		<ul>
			<li>
				<router-link to="/cart">Cart ({{ store.quantity }}) </router-link>
			</li>
		</ul>
		<p></p>
	</nav>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const store = useCartStore();
</script>

<style scoped>
nav {
	padding: 1rem 0;
	display: flex;
	align-items: center;
	background-color: var(--white);
}

img {
	display: block;
}

ul {
	margin: 0;
	padding: 0;
	list-style-type: none;
}

li {
	display: inline-block;
	padding: 0 1rem;
}

a {
	text-decoration: none;
	color: var(--gray600);
}

a:hover {
	color: var(--gray900);
}
</style>
