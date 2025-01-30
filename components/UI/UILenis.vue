<script setup lang="ts">
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const useLenis = useState<Lenis | null>("UseLenis", () => null);

onMounted(() => {
	const lenis = new Lenis();

	useLenis.value = lenis;

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
