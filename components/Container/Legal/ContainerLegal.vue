<template>
	<UIContainer direction="row" class="container-legal">
		<ContainerLegalHeading class="container-legal__heading" />
		<ContainerLegalContent class="container-legal__content" />
	</UIContainer>
</template>

<style scoped lang="scss">
.container-legal {
	background-color: var(--extra-light-green);

	&__heading {
		flex: 0.5;
	}
	&__content {
		flex: 1;
	}
}
</style>
