<template>
	<UIContainerHeading class="container-team-heading">
		<template #icon>
			<IconChat />
		</template>
		<template #title>
			<h2 class="h1">
				Notre équipe<br>de professionnels
			</h2>
		</template>
		<template #text>
			<p class="container-team-heading__text">
				Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>Notre équipe vous assure un soutien professionnel en psychanalyse, psychothérapie et psychopraticie, avec une approche moderne et bienveillante.
			</p>
		</template>
		<template #cta>
			<UIButton class="container-team-heading__cta">
				Découvrir <LucideArrowUpRight />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-team-heading {
	&__text {
		color: var(--fake-black);
	}
	&__cta {
		color: var(--white);
		background-color: var(--green);
	}
}
</style>
