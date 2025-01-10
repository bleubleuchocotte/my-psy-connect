<template>
	<UIContainer class="page-home-section-trust">
		<PageHomeSectionTrustHeading />
		<PageHomeSectionTrustContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-section-trust {
	@media not #{$desktop} {
		gap: rem(80) !important;
	}
}
</style>
