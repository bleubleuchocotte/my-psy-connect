<template>
	<main class="page page-formulaire">
		<PageFormHero />
		<PageHomePostHero class="page-formulaire__post-hero" />
		<PageAboutTestimony2 class="page-formulaire__testimony" />
		<ContainerFaq />
	</main>
</template>

<style scoped lang="scss">
.page-formulaire {
	&__testimony {
		background-color: var(--white);
	}
	&__post-hero {
		@media not #{$desktop} {
			padding-bottom: 0;
		}
	}
}
</style>
