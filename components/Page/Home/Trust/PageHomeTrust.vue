<template>
	<UIContainer class="page-home-trust">
		<PageHomeTrustHeading />
		<PageHomeTrustContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-trust {
	@media not #{$desktop} {
		gap: rem(80) !important;
	}
}
</style>
