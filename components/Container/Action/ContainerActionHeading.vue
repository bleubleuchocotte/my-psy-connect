<template>
	<UIContainerHeading class="container-action-heading">
		<template #icon>
			<IconChat />
		</template>
		<template #title>
			<h2 class="h1 container-action-heading__title">
				Passez à l'Action,<br><span>Rejoignez un groupe de soutien MyPsy</span>
			</h2>
		</template>
		<template #text>
			<p class="container-action-heading__text">
				Participer à un groupe de soutien MyPsy, c'est l'opportunité de s'entourer de personnes bienveillantes qui traversent les mêmes défis que vous, sous l'accompagnement professionnel d'une psychologue expérimentée. Ensemble, avançons vers un avenir meilleur, en cultivant l'entraide, le partage et la coopération, des valeurs qui animent chacune de nos sessions.
			</p>
		</template>
		<template #cta>
			<UIButton class="container-action-heading__cta">
				Rejoignez-nous <LucideMail />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.container-action-heading {
	&__cta {
		background-color: var(--dark-blue);
		color: var(--white);
	}

	&__title {
		span {
			white-space: nowrap;
		}
	}

	&__text {
		color: var(--fake-black);
	}
}
</style>
