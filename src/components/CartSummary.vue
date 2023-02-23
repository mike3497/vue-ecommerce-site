<template>
	<div>
		<h1>Cart Summary</h1>
		<p>Subtotal: {{ subtotal }}</p>
		<p>Shipping: {{ shipping }}</p>
		<p>Tax: {{ tax }}</p>
		<h1>Total: {{ total }}</h1>
		<button type="button">Checkout</button>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart.js';
import { formatAsCurrency } from '../utils';
const store = useCartStore();

const subtotal = computed(() => formatAsCurrency(store.subtotal));
const shipping = computed(() => formatAsCurrency(store.shipping));
const tax = computed(() => formatAsCurrency(store.tax));
const total = computed(() => formatAsCurrency(store.total));
</script>

<style scoped>
h1 {
	font-size: 1rem;
}
</style>
