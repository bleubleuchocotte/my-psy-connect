<template>
	<UIContainer class="page-home-hero">
		<PageHomeHeroHeading />
		<PageHomeHeroContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-hero {
	background-color: var(--beige);

	@media #{$desktop} {
		padding-top: rem(200) !important;
	}
}
</style>
