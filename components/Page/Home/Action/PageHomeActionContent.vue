<script setup lang="ts">
import { LucideFileLock2, LucideHand, LucideMessageSquare, LucidePersonStanding, LucideSpeech } from "lucide-vue-next";

const isInViewport = ref(false);
</script>

<template>
	<UIContainerContent>
		<template #title>
			<h3>Ce que vous allez y trouver</h3>
		</template>
		<template #content>
			<div class="page-home-action">
				<UIBackgroundFixedSVG class="page-home-action__background" path="type-2" hide="mobile" />

				<UIIntersectionObserver class="page-home-action__cards" @is-visible="isInViewport = $event">
					<UIContainerContentCard :blur="true" :viewport="isInViewport" position="1" animation="fade-in-translate-in-from-bottom">
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
								<strong>Transformez vos peurs en force.</strong>Grâce aux échanges en groupe, développez votre capacité à vous exprimer librement et à oser prendre la parole, même en public, dans un <strong>environnement sécurisant.</strong>
							</p>
						</template>
					</UIContainerContentCard>
					<UIContainerContentCard :blur="true" :viewport="isInViewport" position="2" animation="fade-in-translate-in-from-bottom">
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
								Apprenez à <strong>dépasser votre peur de l'engagement,</strong> qu'il s'agisse d'une relation, d'un projet ou d'une étape de vie.
								<br>Rejoignez un groupe où vous pourrez partager vos appréhensions et découvrir des stratégies pour <strong>aller de l'avant.</strong>
							</p>
						</template>
					</UIContainerContentCard>
					<UIContainerContentCard :blur="true" :viewport="isInViewport" position="3" animation="fade-in-translate-in-from-bottom">
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
								Tous nos groupes respectent strictement <strong>la confidentialité et l'anonymat,</strong> pour que vous puissiez vous exprimer sans retenue.
								<br>Ce cadre sécurisé favorise une ouverture <strong>authentique et libératrice.</strong>
							</p>
						</template>
					</UIContainerContentCard>
					<UIContainerContentCard :blur="true" :viewport="isInViewport" position="4" animation="fade-in-translate-in-from-bottom">
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
								Sentir que l'on n'est pas seul face à ses difficultés est essentiel. Nos groupes vous permettront de rencontrer des personnes qui partagent vos préoccupations, pour un soutien mutuel et des <strong>échanges constructifs.</strong>
							</p>
						</template>
					</UIContainerContentCard>
					<UIContainerContentCard :blur="true" :viewport="isInViewport" position="5" animation="fade-in-translate-in-from-bottom">
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
								Apprenez à gérer le stress, l'anxiété, et les émotions difficiles à travers des <strong>exercices concrets</strong> et des <strong>échanges encadrés,</strong> afin de retrouver une sérénité durable.
							</p>
						</template>
					</UIContainerContentCard>
				</UIIntersectionObserver>
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
		gap: rem(24);

		& > div {
			flex: 1;
			min-width: rem(315);
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
