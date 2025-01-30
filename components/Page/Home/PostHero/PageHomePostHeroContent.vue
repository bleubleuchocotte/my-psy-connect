<script setup lang="ts">
import { LucideBrain, LucideHeartHandshake, LucideLaugh, LucideMessageSquare } from "lucide-vue-next";

const isInViewport = ref(false);
</script>

<template>
	<UIIntersectionObserver class="page-home-post-hero-content" @is-visible="isInViewport = $event">
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="1" animation="fade-in-translate-in-from-bottom">
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
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="2" animation="fade-in-translate-in-from-bottom">
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
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="3" animation="fade-in-translate-in-from-bottom">
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
		<UIContainerContentCard :blur="true" class="page-home-post-hero-content__card" :viewport="isInViewport" position="4" animation="fade-in-translate-in-from-bottom">
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

		p {
			@include font("p");
		}
	}
}
</style>
