<template>
	<UIContainer class="container-solution">
		<ContainerSolutionHeading />

		<UIContainerContent>
			<template #content>
				<ContainerSolutionContent />
			</template>
		</UIContainerContent>
	</UIContainer>
</template>

<style scoped lang="scss">
.container-solution {
	background-color: var(--extra-light-green);
}
</style>
