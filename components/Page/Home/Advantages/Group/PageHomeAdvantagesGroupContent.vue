<script setup lang="ts">
import { LucideBadgePercent, LucideFlower, LucideHandHeart, LucideHeartHandshake, LucideMonitorPlay, LucidePiggyBank, LucideShapes, LucideSpeech, LucideSun, LucideTrendingUp } from "lucide-vue-next";
</script>

<template>
	<UITable class="page-home-advantages-group-content">
		<UITableItem>
			<LucideHandHeart stroke="var(--light-green)" stroke-width="2" />
			<p>Partager et recevoir du soutien collectif</p>
		</UITableItem>
		<UITableItem>
			<LucideSun stroke="var(--light-green)" stroke-width="2" />
			<p>Réduire le stress et gérer le burn-out</p>
		</UITableItem>
		<UITableItem>
			<LucidePiggyBank stroke="var(--light-green)" stroke-width="2" />
			<p>Accéder à un soutien abordable</p>
		</UITableItem>
		<UITableItem>
			<LucideTrendingUp stroke="var(--light-green)" stroke-width="2" />
			<p>Bénéficier d'engagement et de motivation collective</p>
		</UITableItem>
		<UITableItem>
			<LucideSpeech stroke="var(--light-green)" stroke-width="2" />
			<p>Valider et normaliser son expérience</p>
		</UITableItem>
		<UITableItem>
			<LucideShapes stroke="var(--light-green)" stroke-width="2" />
			<p>Rejoindre des groupes fexibles et accessibles</p>
		</UITableItem>
		<UITableItem>
			<LucideMonitorPlay stroke="var(--light-green)" stroke-width="2" />
			<p>Profiter d'une expérience interactive et sécurisante</p>
		</UITableItem>
		<UITableItem>
			<LucideHeartHandshake stroke="var(--light-green)" stroke-width="2" />
			<p>Renforcer le sentiment de solidarité et de sens</p>
		</UITableItem>
		<UITableItem>
			<LucideBadgePercent stroke="var(--light-green)" stroke-width="2" />
			<p>Bénéficier d'un soutien moins cher mais plus efficace</p>
		</UITableItem>
		<UITableItem>
			<LucideFlower stroke="var(--light-green)" stroke-width="2" />
			<p>Lutter contre l'isolement</p>
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
