<template>
	<div class="product-card">
		<router-link
			class="product-card__image"
			:to="{ name: 'product-details', params: { id: product.id } }"
		>
			<img :src="product.image" :alt="product.title" />
		</router-link>
		<router-link
			class="product-card__title"
			:to="{ name: 'product-details', params: { id: product.id } }"
			:title="product.title"
		>
			{{ product.title }}
		</router-link>
		<p class="product-card__price">{{ price }}</p>
		<AddToCartButton :product="product" />
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { formatAsCurrency } from '../utils';
import AddToCartButton from './AddToCartButton.vue';

const props = defineProps({
	product: Object,
});

const price = computed(() => formatAsCurrency(props.product.price));
</script>

<style scoped>
.product-card {
	background-color: var(--white);
	border-radius: 0.5rem;
	border: 1px solid var(--gray200);
	padding: 1rem;
	margin-bottom: 1rem;
}

.product-card__image img {
	display: block;
	margin: 0 auto 1rem auto;
	max-width: 100%;
	height: 8rem;
}

.product-card__title {
	height: 50px;
	font-size: 1rem;
	margin-bottom: 0.5rem;
	color: var(--black);
	text-decoration: none;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}

.product-card__price {
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	font-weight: bold;
}
</style>
