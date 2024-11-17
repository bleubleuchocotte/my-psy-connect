<template>
	<UIContainerContent class="container-advantages-group-content">
		<template #content>
			<UITable class="container-advantages-group-content__table">
				<UITableItem>
					<template #icon>
						<IconHandHeart />
					</template>
					<template #text>
						<p>Partagez et recevez du soutien collectif</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconSun />
					</template>
					<template #text>
						<p>Réduisez votre stress et gérez le burn-out</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconPig />
					</template>
					<template #text>
						<p>Accédez à un soutien abordable</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconGrow />
					</template>
					<template #text>
						<p>
							Bénéficiez d'engagement et de motivation collective
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconSpeech />
					</template>
					<template #text>
						<p>
							Validez et normalisez votre expérience
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconShapes />
					</template>
					<template #text>
						<p>
							Rejoignez des groupes flexibles et accessibles
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconTV />
					</template>
					<template #text>
						<p>
							Profitez d'une expérience interactive et sécurisante
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconHandHeart />
					</template>
					<template #text>
						<p>
							Renforcez votre sentiment de solidarité et de sens
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconPercent />
					</template>
					<template #text>
						<p>
							Bénéficiez d'un soutien moins cher mais plus efficace.
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconFlower />
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
