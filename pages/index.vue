<template>
	<main class="page-home">
		<PageHomeHero />
		<PageHomePostHero />
		<PageHomeTrioCards />
		<PageHomeTrust />
		<PageHomeSolution />
		<PageHomePsychologist />
		<PageHomeAdvantagesGroup />
		<PageHomeAdvantagesSolo />
		<PageHomeAction />

		<ContainerFaq />
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
