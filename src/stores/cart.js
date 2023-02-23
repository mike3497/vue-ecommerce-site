import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', () => {
	const items = ref(useLocalStorage('cart', []));
	const shipping = 4.99;

	const increaseQuantity = (product) => {
		const existingItem = items.value.find((item) => item.id === product.id);

		if (existingItem) {
			existingItem.quantity++;
			existingItem.subtotal = existingItem.quantity * product.price;
		} else {
			items.value.push({
				...product,
				quantity: 1,
				subtotal: product.price,
			});
		}
	};
	const decreaseQuantity = (product) => {
		const existingItem = items.value.find((item) => item.id === product.id);

		if (existingItem) {
			if (existingItem.quantity > 1) {
				existingItem.quantity--;
				existingItem.subtotal = existingItem.quantity * product.price;
			} else {
				items.value = items.value.filter((item) => item.id !== product.id);
			}
		}
	};
	const remove = (product) => {
		items.value = items.value.filter((item) => item.id !== product.id);
	};

	const quantity = computed(() =>
		items.value.reduce((quantity, item) => item.quantity + quantity, 0)
	);
	const itemQuantity = computed(
		() => (id) => items.value.find((item) => item.id === id)?.quantity || 0
	);

	const subtotal = computed(() =>
		items.value.reduce((subtotal, item) => item.subtotal + subtotal, 0)
	);
	const tax = computed(() => (subtotal.value + shipping) * 0.08);
	const total = computed(() => subtotal.value + tax.value);

	return {
		items,
		quantity,
		itemQuantity,
		increaseQuantity,
		decreaseQuantity,
		remove,
		subtotal,
		shipping,
		tax,
		total,
	};
});
