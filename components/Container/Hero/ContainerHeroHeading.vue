<template>
	<UIContainerHeading>
		<template #title>
			<h1 class="container-hero-heading__title big">
				<span>Votre bien-être <IconTextGreenCircleHuman /></span>
				<span><PageHomeHeroIconReveal /> au travail,</span>
				<span>notre priorité</span>
			</h1>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-hero-heading {
	&__title {
		align-self: start;

		span {
			display: flex;
			align-items: center;
			@include gap(10);
		}

		svg {
			display: inline;
		}
	}
}
</style>
