<template>
	<UIContainer class="container-solution">
		<UIContainerHeading>
			<template #icon>
				<IconChat />
			</template>
			<template #title>
				<h2>Votre solution sécurisée, sur mesure, avec des aides à portée de main</h2>
			</template>
		</UIContainerHeading>

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
