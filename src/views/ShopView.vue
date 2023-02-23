<template>
	<main class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1>Shop</h1>
			</div>
		</div>
		<div class="row">
			<div v-show="loading" class="col-sm-12">
				<p>Loading...</p>
			</div>

			<div v-show="error" class="col-sm-12">
				<p>Error: {{ error }}</p>
			</div>

			<div v-for="product in products" :key="product.id" class="col-sm-3">
				<ProductCard :product="product" />
			</div>
		</div>
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import axios from 'axios';

const products = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(() => {
	axios
		.get('https://fakestoreapi.com/products')
		.then((data) => (products.value = data.data))
		.catch((error) => (error.value = error))
		.finally(() => (loading.value = false));
});
</script>
