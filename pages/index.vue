<script setup lang="ts">
useSeoMeta({
	title: "Page d'accueil",
});
</script>

<template>
	<main class="page-home">
		<ContainerSolution />
		<ContainerTeam />
		<ContainerAdvantagesGroup />
		<ContainerAdvantagesSolo />
	</main>
</template>

<style scoped lang="scss">
.page-home {
	display: flex;
	flex-direction: column;

	@include gap(24);
}
</style>
