<template>
	<UIContainer direction="row" class="page-home-advantages-group">
		<PageHomeAdvantagesGroupHeading class="page-home-advantages-group__heading" />
		<PageHomeAdvantagesGroupContent class="page-home-advantages-group__content" />
	</UIContainer>
</template>

<style scoped lang="scss">
.page-home-advantages-group {
	background-color: var(--dark-blue);

	flex-wrap: nowrap;

	@media not #{$desktop} {
		flex-direction: column !important;
		gap: rem(80) !important;
	}

	&__heading {
		flex: 1;
		align-items: flex-start;
		text-align: left;
	}

	&__content {
		flex: 1.25;
	}
}
</style>
