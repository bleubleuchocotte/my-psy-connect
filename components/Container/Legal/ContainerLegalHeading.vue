<template>
	<UIContainerHeading class="container-legal-heading">
		<template #icon>
			<IconChat class="container-legal-heading__icon" />
		</template>
		<template #title>
			<h2>
				Avantages de l'assistance juridique MyPsy
			</h2>
		</template>
		<template #text>
			<p>
				Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>Notre équipe vous assure un soutien professionnel en psychanalyse, psychothérapie et psychopraticie, avec une approche moderne et bienveillante.
			</p>
		</template>
		<template #cta>
			<UIButton class="container-legal-heading__cta">
				En savoir plus <IconArrowTopLeft />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-legal-heading {
	align-items: flex-start;
	text-align: left;

	&__icon {
		align-self: flex-start;
	}

	&__cta {
		background-color: var(--green);
		color: var(--white);
	}
}
</style>
