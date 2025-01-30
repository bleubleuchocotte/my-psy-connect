<script setup lang="ts">
import { LucideCross, LucideHandCoins, LucideIdCard, LucideLaugh, LucideLock } from "lucide-vue-next";

const isInViewport = ref(false);
</script>

<template>
	<UIIntersectionObserver class="page-home-solution-content" @is-visible="isInViewport = $event">
		<UIContainerContentCard position="1" animation="fade-in-translate-in-from-bottom" :viewport="isInViewport">
			<template #icon>
				<LucideLaugh stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>
					Accompagnement personnalisé
				</h3>
			</template>
			<template #text>
				<p>
					Nous vous accompagnons à chaque étape de votre parcours de soins.<br>
					Nos psychologues sont là pour vous écouter, vous guider, et vous aider à retrouver un équilibre. Chaque session est adaptée à vos besoins spécifiques.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard position="2" animation="fade-in-translate-in-from-bottom" :viewport="isInViewport">
			<template #icon>
				<LucideLock stroke="var(--green)" stroke-width="2" />
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
		<UIContainerContentCard position="3" animation="fade-in-translate-in-from-bottom" :viewport="isInViewport">
			<template #icon>
				<LucideIdCard stroke="var(--green)" stroke-width="2" />
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
		<UIContainerContentCard position="4" animation="fade-in-translate-in-from-bottom" :viewport="isInViewport">
			<template #icon>
				<LucideCross stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>
					Mutuelles et complémentaires santé
				</h3>
			</template>
			<template #text>
				<p>
					Les psychologues conventionnés seront en général facilement remboursés par une mutuelle.
				</p>
			</template>
		</UIContainerContentCard>
		<UIContainerContentCard position="5" animation="fade-in-translate-in-from-bottom" :viewport="isInViewport">
			<template #icon>
				<LucideHandCoins stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				<h3>
					Initiatives d'entreprises
				</h3>
			</template>
			<template #text>
				<p>
					Certaines entreprises offrent des chèques santé ou des aides financières pour les consultations psychologiques, souvent discrètement dans le cadre de programmes de bien-être au travail.<br>
					Ces aides sont accessibles sans que les supérieurs hiérarchiques en soient informés, offrant une solution confidentielle pour les employés.
				</p>
			</template>
		</UIContainerContentCard>
	</UIIntersectionObserver>
</template>

<style scoped lang="scss">
.page-home-solution-content {
	display: flex;
	flex-wrap: wrap;

	@include gap(24);

	p {
		@include font("p");
	}

	& > div {
		flex: 1;
		@include prop("min-width", 315);
	}
}
</style>
