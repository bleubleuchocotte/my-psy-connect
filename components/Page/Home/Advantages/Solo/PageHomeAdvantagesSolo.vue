<template>
	<UIContainer direction="row-reverse" class="page-home-advantages-solo">
		<PageHomeAdvantagesSoloHeading />
		<PageHomeAdvantagesSoloContent />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-advantages-solo {
	background-color: var(--beige);
	flex-wrap: nowrap;

	@media not #{$desktop} {
		flex-direction: column !important;
		gap: rem(60) !important;
	}

	// &__heading {
	// 	flex: 0.5;
	// }
	// &__content {
	// 	flex: 1;
	// }
}
</style>
