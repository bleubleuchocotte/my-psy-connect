<script setup lang="ts">
import { LucideLightbulb, LucideNewspaper } from "lucide-vue-next";

useSeoMeta({
	// Flat
	title: "Ressources MyPsy - Guides, Tests et Articles sur le Burn-Out",
	description: "Explorez nos ressources dédiées : guides pratiques, tests d'auto-évaluation et articles pour mieux comprendre et prévenir le burn-out au travail.",

	// OG
	ogTitle: "Ressources MyPsy - Guides, Tests et Articles sur le Burn-Out",
	ogDescription: "Explorez nos ressources dédiées : guides pratiques, tests d'auto-évaluation et articles pour mieux comprendre et prévenir le burn-out au travail.",

	// Twitter
	twitterTitle: "Ressources MyPsy - Guides, Tests et Articles sur le Burn-Out",
	twitterDescription: "Explorez nos ressources dédiées : guides pratiques, tests d'auto-évaluation et articles pour mieux comprendre et prévenir le burn-out au travail.",
});
</script>

<template>
	<main class="page-ressources">
		<PageHeader>
			<template #title>
				Ressources
			</template>

			<template #svg-background>
				<IconCustomPath />
			</template>

			<template #icons>
				<PageHeaderIcons>
					<template #icon-1>
						<LucideNewspaper stroke="var(--white)" stroke-width="2" />
					</template>
					<template #icon-2>
						<LucideLightbulb stroke="var(--white)" stroke-width="2" />
					</template>
				</PageHeaderIcons>
			</template>
		</PageHeader>

		<PageRessourcesColumns />

		<ContainerFaq />
	</main>
</template>

<style scoped lang="scss">
.page-ressources {
	display: flex;
	flex-direction: column;
	gap: rem(24);
}
</style>
