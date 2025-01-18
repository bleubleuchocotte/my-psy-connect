<script setup lang="ts">
import { LucideBrain, LucideHeartHandshake, LucideLaugh, LucideMessageSquare } from "lucide-vue-next";

const isInViewport = ref(false);
</script>

<template>
	<UIIntersectionObserver class="page-home-post-hero-content" @is-visible="isInViewport = true">
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="1">
			<template #icon>
				<LucideLaugh stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>Retrouver du sens et de la motivation</h3>
			</template>
			<template #text>
				<p>Vous aspirez à vous reconnecter à vos valeurs et à redonner un sens à votre travail.</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="2">
			<template #icon>
				<LucideBrain stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>Atténuer la fatigue mentale et physique</h3>
			</template>
			<template #text>
				<p>Vous cherchez des moyens concrets pour apaiser votre épuisement et retrouver de l'énergie.</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="3">
			<template #icon>
				<LucideMessageSquare stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>Sortir de l'isolement social et émotionnel</h3>
			</template>
			<template #text>
				<p>Vous souhaitez briser la solitude et trouver un soutien humain et bienveillant.</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="4">
			<template #icon>
				<LucideHeartHandshake stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>Recevoir reconnaissance et accompagnement</h3>
			</template>
			<template #text>
				<p>Vous avez besoin d'un environnement qui valorise vos efforts et offre un véritable appui.</p>
			</template>
		</UIContainerContentCard>
	</UIIntersectionObserver>
</template>

<style scoped lang="scss">
.page-home-post-hero-content {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: rem(24);

	@media not #{$desktop} {
		flex-direction: column;
	}

	&__card {
		flex: 1;

		--position: 1;
		&[position="2"] {
			--position: 2;
		}
		&[position="3"] {
			--position: 3;
		}
		&[position="4"] {
			--position: 4;
		}

		transition:
			opacity linear 0.4s 0.2s,
			transform ease-out 0.4s calc(0.1s * var(--position));

		&[viewport="false"] {
			opacity: 0;
			transform: translateY(50px);
		}
		&[viewport="true"] {
			opacity: 1;
			transform: translateY(0px);
		}

		p {
			@include font("p");
		}
	}
}
</style>
