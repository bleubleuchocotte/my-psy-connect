<script setup lang="ts">
import { LucideInfo, LucideQuote } from "lucide-vue-next";
</script>

<template>
	<main class="page-a-propos">
		<PageHeader>
			<template #title>
				À propos
			</template>

			<template #svg-background>
				<IconCustomChat />
			</template>

			<template #icons>
				<PageHeaderIcons>
					<template #icon-1>
						<LucideQuote stroke="var(--white)" stroke-width="2" />
					</template>
					<template #icon-2>
						<LucideInfo stroke="var(--white)" stroke-width="2" />
					</template>
				</PageHeaderIcons>
			</template>

			<template #description>
				MyPsy est née d'une passion profonde pour la psychologie et d'une volonté d'entreprendre avec une forte dimension sociale . Son fondateur, Quentin, a toujours été fasciné par les dynamiques de l'esprit humain, alimentant cette passion par des lectures, des podcasts, et une exploration personnelle de la santé mentale.
			</template>
		</PageHeader>

		<PageAboutIdea />
	</main>
</template>

<style scoped lang="scss">
.page-a-propos {
	display: flex;
	flex-direction: column;
	gap: rem(24);
}
</style>
