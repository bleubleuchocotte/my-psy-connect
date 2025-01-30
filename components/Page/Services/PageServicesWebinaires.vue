<script setup lang="ts">
import { LucideGoal, LucidePersonStanding, LucideShieldCheck, LucideSpeech } from "lucide-vue-next";

const isInViewport = ref(false);
</script>

<template>
	<section class="page-services-webinaires">
		<div class="page-services-webinaires__start">
			<NuxtImg preload src="/images/services/webinaires.png" alt="" loading="lazy" />

			<div class="page-services-webinaires__start-text">
				<IconCustomHeadset />
				<h2 class="h1">
					Webinaires
				</h2>
				<p>
					Découvrez nos webinaires thématiques, spécialement conçus pour accompagner les personnes en situation de burnout. Ces sessions en ligne, animées par des psychologues expérimentés, offrent un espace sécurisé et informatif pour aborder des questions essentielles liées à votre bien-être et à vos droits.<br><br>
					En plus d'apporter des réponses concrètes, ces webinaires incluent une session de questions/réponses en direct, vous permettant d'aborder vos problématiques personnelles et de repartir avec des conseils adaptés à votre situation.
				</p>
			</div>
		</div>

		<div class="page-services-webinaires__end">
			<h3>Chaque webinaire explore des sujets clés tels que</h3>

			<UIIntersectionObserver class="page-services-webinaires__end-cards" @is-visible="isInViewport = $event">
				<UIContainerContentCard blur :viewport="isInViewport" position="1" animation="fade-in-translate-in-from-bottom">
					<template #icon>
						<LucideGoal stroke="var(--dark-blue)" stroke-width="2" />
					</template>
					<template #title>
						<h4 class="p-secondary">
							Reconnaître et comprendre le burnout : signes, impacts et étapes pour se reconstruire.
						</h4>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard blur :viewport="isInViewport" position="2" animation="fade-in-translate-in-from-bottom">
					<template #icon>
						<LucideShieldCheck stroke="var(--dark-blue)" stroke-width="2" />
					</template>
					<template #title>
						<h4 class="p-secondary">
							Vos droits et démarches : arrêt maladie, soutien médical et reconnaissance professionnelle.
						</h4>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard blur :viewport="isInViewport" position="3" animation="fade-in-translate-in-from-bottom">
					<template #icon>
						<LucideSpeech stroke="var(--dark-blue)" stroke-width="2" />
					</template>
					<template #title>
						<h4 class="p-secondary">
							Faire face au harcèlement au travail : identifier les comportements toxiques et savoir comment réagir.
						</h4>
					</template>
				</UIContainerContentCard>
				<UIContainerContentCard blur :viewport="isInViewport" position="4" animation="fade-in-translate-in-from-bottom">
					<template #icon>
						<LucidePersonStanding stroke="var(--dark-blue)" stroke-width="2" />
					</template>
					<template #title>
						<h4 class="p-secondary">
							Retrouver un équilibre de vie : stratégies pour reprendre le contrôle et renforcer votre résilience.
						</h4>
					</template>
				</UIContainerContentCard>
			</UIIntersectionObserver>
		</div>
	</section>
</template>

<style scoped lang="scss">
.page-services-webinaires {
	display: flex;
	flex-direction: column;
	gap: rem(94);

	padding-inline: rem(118);
	padding-block: rem(94);

	border-radius: 10px;

	background-color: var(--beige);

	@media not #{$desktop} {
		padding: rem(20);
		padding-bottom: rem(80);
	}

	&__start {
		display: flex;
		gap: rem(94);

		@media not #{$desktop} {
			flex-direction: column;
			gap: rem(40);
		}

		img {
			width: 100%;
			max-width: rem(520);
			object-fit: cover;
			border-radius: 10px;

			@media not #{$desktop} {
				max-width: none;
				aspect-ratio: 1.4;
			}
		}

		&-text {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: rem(24);

			@media not #{$desktop} {
				gap: rem(20);
			}

			svg {
				flex-shrink: 0;
				color: var(--green);
				height: rem(80);
				width: rem(80);

				@media not #{$desktop} {
					height: rem(60);
					width: rem(60);
				}
			}

			p {
				color: var(--fake-black);
			}
		}
	}

	&__end {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: rem(30);
		text-align: center;

		&-cards {
			display: flex;
			justify-content: space-between;
			gap: rem(24);

			@media not #{$desktop} {
				width: 100%;
				flex-direction: column;
			}

			& > div {
				flex: 1;
				background-color: rgba(255, 255, 255, 0.5) !important;
				outline-color: var(--extra-light-green);
			}
		}
	}
}
</style>
