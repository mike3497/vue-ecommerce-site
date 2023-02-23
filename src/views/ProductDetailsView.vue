<template>
	<div class="container">
		<div class="row">
			<div v-if="loading" class="col-sm-12">
				<p>Loading...</p>
			</div>

			<div v-if="error" class="col-sm-12">
				<p>Error: {{ error }}</p>
			</div>

			<ProductDetails v-if="product" :product="product" />
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductDetails from '../components/ProductDetails.vue';
import axios from 'axios';

const props = defineProps({
	id: {
		required: true,
	},
});

const product = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(() => {
	axios
		.get(`https://fakestoreapi.com/products/${props.id}`)
		.then((data) => (product.value = data.data))
		.catch((error) => (error.value = error))
		.finally(() => (loading.value = false));
});
</script>

<style scoped></style>
