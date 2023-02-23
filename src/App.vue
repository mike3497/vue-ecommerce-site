<template>
	<Header />
	<main>
		<RouterView />
	</main>
	<Footer />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
	--white: #fff;
	--black: #212529;

	--gray100: #f8f9fa;
	--gray200: #e9ecef;
	--gray300: #dee2e6;
	--gray400: #ced4da;
	--gray500: #adb5bd;
	--gray600: #6c757d;
	--gray700: #495057;
	--gray800: #495057;
	--gray900: #343a40;

	--primary: #48749d;
	--primaryDark: #355675;
}

* {
	box-sizing: border-box;
}

body {
	background-color: var(--gray100);
	margin: 0;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}

p {
	margin: 0;
}

h1 {
	font-size: 4rem;
}

h2 {
	font-size: 3.5rem;
}

h3 {
	font-size: 3rem;
}

h4 {
	font-size: 2.5rem;
}

h5 {
	font-size: 2rem;
}

h6 {
	font-size: 1.5rem;
}

.w-100 {
	width: 100%;
}
</style>
