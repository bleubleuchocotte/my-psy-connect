<template>
	<UIContainerHeading class="container-advantages-solo-heading">
		<template #icon>
			<IconChat class="container-advantages-solo-heading__icon" />
		</template>
		<template #title>
			<h2 class="container-advantages-solo-heading__title">
				Avantages des<br>séances<br>individuelles MyPsy
			</h2>
		</template>
		<template #text>
			<p class="container-advantages-solo-heading__text">
				Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>Notre équipe vous assure un soutien professionnel en psychanalyse, psychothérapie et psychopraticie, avec une approche moderne et bienveillante.
			</p>
		</template>
		<template #cta>
			<UIButton class="container-advantages-solo-heading__cta">
				En savoir plus <IconArrowTopLeft />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-advantages-solo-heading {
	align-items: flex-start;
	text-align: left;

	&__icon {
		align-self: flex-start;
	}

	&__title {
		align-self: flex-start;
	}

	&__text {
		color: var(--fake-black);
		@include font("p");
	}

	&__cta {
		color: var(--white);
		background-color: var(--dark-blue);
	}
}
</style>
