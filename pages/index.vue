<script setup lang="ts">
useSeoMeta({
	title: "Page d'accueil",
});
</script>

<template>
	<main class="page-home">
		<ContainerHero />
		<PageHomePostHeroSection />
		<ContainerTrust />
		<ContainerSolution />
		<ContainerTeam />
		<ContainerAdvantagesGroup />
		<ContainerAdvantagesSolo />
		<ContainerLegal />
		<ContainerAction />
	</main>
</template>

<style scoped lang="scss">
.page-home {
	display: flex;
	flex-direction: column;

	@include gap(24);

	&__hero {
		background-color: var(--beige);
	}
}
</style>
