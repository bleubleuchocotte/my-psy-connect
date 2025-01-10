<script setup lang="ts">
import { LucideBadgePercent, LucideFlower, LucideHandHeart, LucideHeartHandshake, LucideMonitorPlay, LucidePiggyBank, LucideShapes, LucideSpeech, LucideSun, LucideTrendingUp } from "lucide-vue-next";
</script>

<template>
	<UITable class="page-home-advantages-group-content">
		<UITableItem>
			<template #icon>
				<LucideHandHeart stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Partager et recevoir du soutien collectif
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideSun stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Réduire le stress et gérer le burn-out
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucidePiggyBank stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Accéder à un soutien abordable
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideTrendingUp stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Bénéficier d'engagement et de motivation collective
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideSpeech stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Valider et normaliser son expérience
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideShapes stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Rejoindre des groupes fexibles et accessibles
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideMonitorPlay stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Profiter d'une expérience interactive et sécurisante
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideHeartHandshake stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Renforcer le sentiment de solidarité et de sens
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideBadgePercent stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Bénéficier d'un soutien moins cher mais plus efficace
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideFlower stroke="var(--light-green)" stroke-width="2" />
			</template>
			<template #text>
				Lutter contre l'isolement
			</template>
		</UITableItem>
	</UITable>
</template>

<style scoped lang="scss">
.page-home-advantages-group-content {
	color: var(--white);

	background-color: rgba(255, 255, 255, 0.15);
	border: 1px solid rgba(255, 255, 255, 0.5);

	@media not #{$desktop} {
		gap: rem(20);
		padding-inline: rem(20);
	}
}
</style>
