<script setup lang="ts">
import { LucideHandshake, LucideSmilePlus } from "lucide-vue-next";
</script>

<template>
	<main class="page-partner">
		<PageHeader>
			<template #title>
				Partenaires
			</template>

			<template #svg-background>
				<IconCustomStar />
			</template>

			<template #icons>
				<PageHeaderIcons>
					<template #icon-1>
						<LucideSmilePlus stroke="var(--white)" stroke-width="2" />
					</template>
					<template #icon-2>
						<LucideHandshake stroke="var(--white)" stroke-width="2" />
					</template>
				</PageHeaderIcons>
			</template>

			<template #description>
				Voici une liste des organismes et institutions qui reconnaissent le potentiel de notre solution et nous accompagnent dans notre développement.<br>
				Ces institutions de référence nous offrent un cadre solide pour développer avec efficacité cette plateforme de mise en relation entre professionnels et victimes de burnout.
			</template>
		</PageHeader>

		<PagePartnerCards />
	</main>
</template>

<style scoped lang="scss">
.page-partner {
	display: flex;
	flex-direction: column;
	gap: rem(24);
}
</style>
