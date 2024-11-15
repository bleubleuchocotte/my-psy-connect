<template>
	<UIContainer class="container-solution">
		<template #heading>
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
		</template>
	</UIContainer>
</template>

<style scoped lang="scss">
.container-solution {
	background-color: var(--extra-light-green);
}
</style>
