<template>
	<UIContainerContent class="container-advantages-group-content">
		<template #content>
			<UITable class="container-advantages-group-content__table">
				<UITableItem>
					<template #icon>
						<LucideHandHeart color="var(--light-green)" />
					</template>
					<template #text>
						<p>Partager et recevoir du soutien collectif</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideSun color="var(--light-green)" />
					</template>
					<template #text>
						<p>Réduire le stress et gérer le burn-out</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucidePiggyBank color="var(--light-green)" />
					</template>
					<template #text>
						<p>Accéder à un soutien abordable</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideTrendingUp color="var(--light-green)" />
					</template>
					<template #text>
						<p>Bénéficiez d'engagement et de motivation collective </p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideSpeech color="var(--light-green)" />
					</template>
					<template #text>
						<p>Valider et normaliser son expérience</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideTvMinimalPlay color="var(--light-green)" />
					</template>
					<template #text>
						<p>Profiter d'une expérience interactive et sécurisante</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideHeartHandshake color="var(--light-green)" />
					</template>
					<template #text>
						<p>Renforcer le sentiment de solidarité et de sens</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucidePercent color="var(--light-green)" />
					</template>
					<template #text>
						<p>Bénéficier d'un soutien moins cher mais plus efficace</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideFlower color="var(--light-green)" />
					</template>
					<template #text>
						<p>
							Lutter contre l'isolement
						</p>
					</template>
				</UITableItem>
			</UITable>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.container-advantages-group-content {
	&__table {
		background-color: rgba(255, 255, 255, 0.15);
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
}
</style>
