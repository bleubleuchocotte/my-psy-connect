<script setup lang="ts">
import Lenis from "lenis";
import "lenis/dist/lenis.css";

onMounted(() => {
	const lenis = new Lenis();

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
});
</script>

<template>
	<slot />
</template>
