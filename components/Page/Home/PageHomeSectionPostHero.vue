<template>
	<UIContainer class="page-home-section-post-hero">
		<UIBackgroundFixedSVG path="type-1" hide="mobile" />
		<PageHomeSectionPostHeroHeading />
		<PageHomeSectionPostHeroContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-section-post-hero {
	@media #{$desktop} {
		gap: rem(90) !important;
	}
}
</style>
