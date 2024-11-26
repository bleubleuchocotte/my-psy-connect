<template>
	<UIContainer direction="row-reverse" class="container-advantages-solo">
		<ContainerAdvantagesSoloHeading class="container-advantages-solo__heading" />
		<ContainerAdvantagesSoloContent class="container-advantages-solo__content" />
	</UIContainer>
</template>

<style scoped lang="scss">
.container-advantages-solo {
	background-color: var(--beige);

	&__heading {
		flex: 0.5;
	}
	&__content {
		flex: 1;
	}
}
</style>
