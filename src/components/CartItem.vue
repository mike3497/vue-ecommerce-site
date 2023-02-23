<template>
	<div class="cart-item">
		<div class="cart-item__image">
			<router-link :to="{ name: 'product-details', params: { id: item.id } }">
				<img :src="item.image" :alt="item.title" />
			</router-link>
		</div>
		<div class="cart-item__cart-item-details cart-item-details">
			<router-link
				class="cart-item-details__title"
				:to="{ name: 'product-details', params: { id: item.id } }"
			>
				<h1>{{ item.title }}</h1>
			</router-link>
			<p class="cart-item-details__price">{{ price }}</p>
			<p>Qty: {{ item.quantity }}</p>
			<button @click="() => store.remove(item)">Remove</button>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
import { computed } from 'vue';
import { formatAsCurrency } from '../utils';

const store = useCartStore();

const props = defineProps({
	item: Object,
});

const price = computed(() => formatAsCurrency(props.item.price));
</script>

<style>
.cart-item {
	display: flex;
	align-items: center;
}

.cart-item__image {
	margin: 0 1rem 0 0;
}

.cart-item__image img {
	display: block;
	width: 4rem;
	height: 4rem;
	object-fit: contain;
}

.cart-item-details__title {
	text-decoration: none;
}

.cart-item-details__title h1 {
	font-size: 1rem;
	font-weight: bold;
	color: var(--black);
}
</style>
