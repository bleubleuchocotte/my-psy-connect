<template>
	<UIContainer class="page-home-post-hero">
		<UIBackgroundFixedSVG path="type-1" hide="mobile" />
		<PageHomePostHeroHeading />
		<PageHomePostHeroContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-post-hero {
	@media #{$desktop} {
		gap: rem(90) !important;
	}
}
</style>
