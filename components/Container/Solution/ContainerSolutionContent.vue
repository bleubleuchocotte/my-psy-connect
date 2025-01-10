<template>
	<div class="container-solution-content">
		<UIContainerContentCard>
			<template #icon>
				<IconLaugh color="var(--green)" />
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
				<LucideLock color="var(--green)" />
			</template>
			<template #title>
				<h3>
					Sécurité des données
				</h3>
			</template>
			<template #text>
				<p>
					La confidentialité de vos informations est notre priorité. Toutes vos données personnelles sont protégées par des protocoles de sécurité avancés, respectant les normes RGPD.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard>
			<template #icon>
				<LucideIdCard color="var(--green)" />
			</template>
			<template #title>
				<h3>
					Qualité des praticiens
				</h3>
			</template>
			<template #text>
				<p>
					Nos praticiens sont tous des professionnels certifiés, sélectionnés avec soin pour leur expertise et leur engagement. Découvrez leurs profils détaillés et choisissez celui qui vous correspond le mieux.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard>
			<template #icon>
				<LucideCross color="var(--green)" />
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
				<LucideHandCoins color="var(--green)" />
			</template>
			<template #title>
				<h3>
					Initiatives d'entreprises
				</h3>
			</template>
			<template #text>
				<p>
					Certaines entreprises offrent des chèques santé ou des aides financières pour les consultations psychologiques, souvent discrètement dans le cadre de programmes de bien-être au travail.<br>Ces aides sont accessibles sans que les supérieurs hiérarchiques en soient informés, offrant une solution confidentielle pour les employés.
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

	p {
		@include font("p");
	}

	& > div {
		flex: 1;
		@include prop("min-width", 315);
	}
}
</style>
