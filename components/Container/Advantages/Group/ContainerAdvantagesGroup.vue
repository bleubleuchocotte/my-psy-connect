<template>
	<UIContainer direction="row" class="container-advantages-group">
		<ContainerAdvantagesGroupHeading class="container-advantages-group__heading" />
		<ContainerAdvantagesGroupContent class="container-advantages-group__content" />
	</UIContainer>
</template>

<style scoped lang="scss">
.container-advantages-group {
	background-color: var(--dark-blue);

	&__heading {
		flex: 0.5;
		align-items: flex-start;
		text-align: left;
	}

	&__content {
		flex: 1;
	}
}
</style>
