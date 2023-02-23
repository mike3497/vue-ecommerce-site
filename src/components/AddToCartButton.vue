<template>
	<div v-show="store.itemQuantity(product.id) === 0">
		<button
			class="button w-100"
			type="button"
			@click="() => store.increaseQuantity(product)"
		>
			Add to Cart
		</button>
	</div>

	<div v-show="store.itemQuantity(product.id) > 0" class="add-to-cart-buttons">
		<button
			class="button"
			type="button"
			@click="() => store.decreaseQuantity(product)"
		>
			-
		</button>
		<div>{{ store.itemQuantity(product.id) }} in cart</div>
		<button
			class="button"
			type="button"
			@click="() => store.increaseQuantity(product)"
		>
			+
		</button>
	</div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const store = useCartStore();

defineProps({
	product: Object,
});
</script>

<style>
.button {
	border-radius: 2rem;
	border: none;
	padding: 0.5rem 2rem;
	background-color: var(--primary);
	color: var(--white);
	font-size: 1rem;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
}

.button:hover {
	cursor: pointer;
	background-color: var(--primaryDark);
}

.add-to-cart-buttons {
	display: flex;
	justify-content: center;
	align-items: center;
}

.add-to-cart-buttons .button {
	padding: 0.5rem 1rem;
	margin: 0 0.5rem;
}
</style>
