<template>
	<UIContainerHeading class="container-advantages-group-heading">
		<template #icon>
			<IconChat class="container-advantages-group-heading__icon" />
		</template>
		<template #title>
			<h2 class="container-advantages-group-heading__title">
				Avantages des séances de groupe MyPsy
			</h2>
		</template>
		<template #text>
			<p class="container-advantages-group-heading__text">
				Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>Notre équipe vous assure un soutien professionnel en psychanalyse, psychothérapie et psychopraticie, avec une approche moderne et bienveillante.
			</p>
		</template>
		<template #cta>
			<UIButton class="container-advantages-group-heading__cta">
				En savoir plus <IconArrowTopLeft />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-advantages-group-heading {
	&__icon {
		align-self: flex-start;
	}

	&__title,
	&__text {
		color: var(--white);
	}

	&__text {
		@include font("fs-14-500");
	}

	&__cta {
		color: var(--white);
		background-color: var(--green);
	}
}
</style>
