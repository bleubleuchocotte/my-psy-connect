<template>
	<UIContainer class="container-hero">
		<ContainerHeroHeading class="container-hero__heading" />
		<ContainerHeroContent class="container-hero__content" />
	</UIContainer>
</template>

<style scoped lang="scss">
.container-hero {
	justify-content: flex-start;
	background: url("/assets/images/background-hero.svg");

	@include gap(40, !important);

	&__heading {
		align-self: flex-start;
		max-width: unset;

		@include prop("padding-top", 102);
	}

	&__content {
		align-self: flex-start;
		max-width: 55ch;
		@include gap(40);
	}
}
</style>
