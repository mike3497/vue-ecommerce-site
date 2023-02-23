<template>
	<div class="product-details">
		<div class="row">
			<div class="col-sm-6">
				<img :src="product.image" :alt="product.title" />
			</div>
			<div class="col-sm-6">
				<p class="category">{{ product.category }}</p>
				<h1 class="title">{{ product.title }}</h1>
				<p class="description">{{ product.description }}</p>
				<p class="price">{{ price }}</p>
				<AddToCartButton :product="product" />
			</div>
		</div>
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
img {
	max-width: 100%;
}

.category {
	text-transform: uppercase;
	font-size: 1rem;
	color: var(--gray600);
	margin-bottom: 1rem;
}

.title {
	margin-bottom: 2rem;
	font-size: 2rem;
}

.description {
	margin-bottom: 1rem;
}

.price {
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 1rem;
}

button {
	border-radius: 2rem;
	border: none;
	padding: 0.5rem 2rem;
	background-color: var(--primary);
	color: var(--white);
	font-size: 1rem;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
}

button:hover {
	cursor: pointer;
	background-color: var(--primaryDark);
}
</style>
