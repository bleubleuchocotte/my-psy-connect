<template>
	<div class="container-solution-content">
		<UIContainerContentCard>
			<template #icon>
				<IconLaugh />
			</template>
			<template #title>
				<h3>
					Accompagnement personnalisé
				</h3>
			</template>
			<template #text>
				<p>
					Nous vous accompagnons à chaque étape de votre parcours de soins.<br>Nos psychologues sont là pour vous écouter, vous guider, et vous aider à retrouver un équilibre. Chaque session est adaptée à vos besoins spécifiques.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard>
			<template #icon>
				<IconLaugh />
			</template>
			<template #title>
				<h3>
					Accompagnement personnalisé
				</h3>
			</template>
			<template #text>
				<p>
					Nous vous accompagnons à chaque étape de votre parcours de soins.<br>Nos psychologues sont là pour vous écouter, vous guider, et vous aider à retrouver un équilibre. Chaque session est adaptée à vos besoins spécifiques.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard>
			<template #icon>
				<IconLaugh />
			</template>
			<template #title>
				<h3>
					Accompagnement personnalisé
				</h3>
			</template>
			<template #text>
				<p>
					Nous vous accompagnons à chaque étape de votre parcours de soins.<br>Nos psychologues sont là pour vous écouter, vous guider, et vous aider à retrouver un équilibre. Chaque session est adaptée à vos besoins spécifiques.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard>
			<template #icon>
				<IconLaugh />
			</template>
			<template #title>
				<h3>
					Mutuelles et complémentaires santé
				</h3>
			</template>
			<template #text>
				<p>
					les psychologues conventionnés seront en général facilement remboursés par une mutuelle.<br>Les séances avec un psychothérapeute ou un psychanalyste peuvent aussi être remboursées par certaines mutuelles, souvent dans le cadre de packs dédiés aux "médecines douces" ou "thérapies alternatives".
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard>
			<template #icon>
				<IconLaugh />
			</template>
			<template #title>
				<h3>
					Mutuelles et complémentaires santé
				</h3>
			</template>
			<template #text>
				<p>
					les psychologues conventionnés seront en général facilement remboursés par une mutuelle.<br>Les séances avec un psychothérapeute ou un psychanalyste peuvent aussi être remboursées par certaines mutuelles, souvent dans le cadre de packs dédiés aux "médecines douces" ou "thérapies alternatives".
				</p>
			</template>
		</UIContainerContentCard>
	</div>
</template>

<style scoped lang="scss">
.container-solution-content {
	display: flex;
	flex-wrap: wrap;

	@include gap(24);
	@include prop("padding-inline", 60);

	& > div {
		flex: 1;
		@include prop("min-width", 315);
	}
}
</style>
