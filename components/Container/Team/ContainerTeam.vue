<template>
	<UIContainer class="container-team">
		<UIContainerHeading>
			<template #icon>
				<IconChat />
			</template>
			<template #title>
				<h2>
					Notre équipe de professionnels
				</h2>
			</template>
			<template #text>
				<p>
					Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>Notre équipe vous assure un soutien professionnel en psychanalyse, psychothérapie et psychopraticie, avec une approche moderne et bienveillante.
				</p>
			</template>
			<template #cta>
				<UIButton class="container-team__cta">
					Découvrir <IconArrowTopLeft />
				</UIButton>
			</template>
		</UIContainerHeading>
		<UIContainerContent>
			<template #content>
				<ContainerTeamContent />
			</template>
		</UIContainerContent>
	</UIContainer>
</template>

<style scoped lang="scss">
.container-team {
	&__cta {
		color: var(--white);
		background-color: var(--green);
	}
}
</style>
