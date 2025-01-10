<script setup lang="ts">
import { LucideFileLock2, LucideHand, LucideMessageSquare, LucidePersonStanding, LucideSpeech } from "lucide-vue-next";
</script>

<template>
	<UIContainerContent>
		<template #title>
			<h3>Ce que vous allez y trouver</h3>
		</template>
		<template #content>
			<div class="page-home-action">
				<UIBackgroundFixedSVG class="page-home-action__background" path="type-2" hide="mobile" />

				<div class="page-home-action__cards">
					<UIContainerContentCard :blur="true">
						<template #icon>
							<LucideSpeech stroke="var(--green)" stroke-width="2" />
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
							<LucideHand stroke="var(--green)" stroke-width="2" />
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
							<LucideFileLock2 stroke="var(--green)" stroke-width="2" />
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
							<LucideMessageSquare stroke="var(--green)" stroke-width="2" />
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
							<LucidePersonStanding stroke="var(--green)" stroke-width="2" />
						</template>
						<template #title>
							<h3>
								Retrouver un équilibre émotionnel
							</h3>
						</template>
						<template #text>
							<p>
								Apprenez à gérer le stress, l'anxiété, et les émotions difficiles à travers des exercices concrets et des échanges encadrés, afin de retrouver une sérénité durable.
							</p>
						</template>
					</UIContainerContentCard>
				</div>
			</div>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.page-home-action {
	&__cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		@include gap(24);

		& > div {
			flex: 1;
			@include prop("min-width", 315);
		}

		p {
			text-wrap: balance;
			@include font("p");
		}
	}

	&__background {
		transform: translateY(-25%);
	}
}
</style>
