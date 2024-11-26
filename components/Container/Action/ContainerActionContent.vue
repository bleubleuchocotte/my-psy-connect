<template>
	<UIContainerContent>
		<template #title>
			<h3>Ce que vous allez y trouver</h3>
		</template>
		<template #content>
			<div class="container-action-content">
				<img src="/assets/images/vector-1.svg" class="container-action-content__background">

				<UIContainerContentCard :blur="true">
					<template #icon>
						<LucideSpeech color="var(--green)" />
					</template>
					<template #title>
						<h3>
							Renforcement de la confiance en soi
						</h3>
					</template>
					<template #text>
						<p>
							Transformez vos peurs en force. Grâce aux échanges en groupe, développez votre capacité à vous exprimer librement et à oser prendre la parole, même en public, dans un environnement sécurisant.
						</p>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard :blur="true">
					<template #icon>
						<LucideHand color="var(--green)" />
					</template>
					<template #title>
						<h3>
							S'affranchir de la crainte de l'engagement
						</h3>
					</template>
					<template #text>
						<p>
							Apprenez à dépasser votre peur de l'engagement, qu'il s'agisse d'une relation, d'un projet ou d'une étape de vie.<br>Rejoignez un groupe où vous pourrez partager vos appréhensions et découvrir des stratégies pour aller de l'avant.
						</p>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard :blur="true">
					<template #icon>
						<LucideFileLock2 color="var(--green)" />
					</template>
					<template #title>
						<h3>
							Anonymat garanti et confidentialité
						</h3>
					</template>
					<template #text>
						<p>
							Tous nos groupes respectent strictement la confidentialité et l'anonymat, pour que vous puissiez vous exprimer sans retenue.<br>Ce cadre sécurisé favorise une ouverture authentique et libératrice.
						</p>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard :blur="true">
					<template #icon>
						<LucideMessageSquare color="var(--green)" />
					</template>
					<template #title>
						<h3>
							Dépasser le sentiment d'isolement
						</h3>
					</template>
					<template #text>
						<p>
							Sentir que l'on n'est pas seul face à ses difficultés est essentiel. Nos groupes vous permettront de rencontrer des personnes qui partagent vos préoccupations, pour un soutien mutuel et des échanges constructifs.
						</p>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard :blur="true">
					<template #icon>
						<LucidePersonStanding color="var(--green)" />
					</template>
					<template #title>
						<h3>
							Retrouver un équilibre émotionnel
						</h3>
					</template>
					<template #text>
						<p>
							Apprenez à gérer le stress, l’anxiété, et les émotions difficiles à travers des exercices concrets et des échanges encadrés, afin de retrouver une sérénité durable.
						</p>
					</template>
				</UIContainerContentCard>
			</div>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.container-action-content {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@include gap(24);
	@include prop("padding-inline", 60);

	& > div {
		flex: 1;
		@include prop("min-width", 315);
	}

	p {
		text-wrap: balance;
		@include font("fs-14-500");
	}

	&__background {
		width: 100vw;
		max-width: unset;

		position: absolute;
		z-index: -1;
	}
}
</style>
