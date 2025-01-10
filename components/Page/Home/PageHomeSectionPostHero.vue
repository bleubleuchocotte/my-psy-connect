<template>
	<UIContainer class="page-home-section-post-hero">
		<UIBackgroundFixedSVG path="type-1" class="page-home-section-post-hero__background" />
		<PageHomeSectionPostHeroHeading />
		<PageHomeSectionPostHeroContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-section-post-hero {
	@media #{$desktop} {
		gap: pxToRem(90) !important;
	}

	&__background {
		@media not #{$desktop} {
			display: none;
		}
	}
}
</style>
