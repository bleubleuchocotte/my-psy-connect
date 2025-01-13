<script setup lang="ts">
import { LucideLightbulb, LucideNewspaper } from "lucide-vue-next";
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
