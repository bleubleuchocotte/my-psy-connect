<template>
	<UIContainerHeading class="container-legal-heading">
		<template #icon>
			<IconChat class="container-legal-heading__icon" />
		</template>
		<template #title>
			<h2 class="container-legal-heading__title">
				Avantages de<br>l'assistance juridique<br>MyPsy
			</h2>
		</template>
		<template #text>
			<p class="container-legal-heading__text">
				Chez MyPsy, nous vous proposons des avocats spécialisés en droit du travail vous permettant de mieux connaitre vos droits en matière de souffrance au travail et éventuellement d'accéder à une reconnaissance judiciaire du harcèlement subi.
			</p>
		</template>
		<template #cta>
			<UIButton class="container-legal-heading__cta">
				En savoir plus <LucideArrowUpRight />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-legal-heading {
	text-align: left;

	&__icon,
	&__title,
	&__cta {
		align-self: flex-start;
	}

	&__text {
		@include font("fs-14-500");
	}

	&__cta {
		background-color: var(--green);
		color: var(--white);
	}
}
</style>
