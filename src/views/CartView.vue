<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h1>Cart</h1>
				<router-link to="/shop">Continue Shopping</router-link>
				<p v-show="store.quantity === 0">You have no items in your cart.</p>
				<p v-show="store.quantity === 1">
					You have {{ store.quantity }} item in your cart.
				</p>
				<p v-show="store.quantity > 1">
					You have {{ store.quantity }} items in your cart.
				</p>
			</div>
		</div>
		<div v-show="store.quantity > 0" class="row">
			<div class="col-xs-9">
				<CartItem v-for="item in store.items" :key="item.id" :item="item" />
			</div>
			<div class="col-xs-3">
				<CartSummary />
			</div>
		</div>
	</div>
</template>

<script setup>
import CartItem from '../components/CartItem.vue';
import CartSummary from '../components/CartSummary.vue';
import { useCartStore } from '../stores/cart.js';
const store = useCartStore();
</script>

<style scoped></style>
