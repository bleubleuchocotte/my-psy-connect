<template>
	<UIContainerContent class="container-advantages-solo-content">
		<template #content>
			<UITable class="container-advantages-solo-content__table" variant="darker">
				<UITableItem>
					<template #icon>
						<LucidePersonStanding color="var(--green)" />
					</template>
					<template #text>
						<p>Devenir acteur de sa santé mentale avec un plan personnalisé</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideBookHeadphones color="var(--green)" />
					</template>
					<template #text>
						<p>Bénéficier de l'expertise de professionnels sensibilisés à la souffrance au travail</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideListChecks color="var(--green)" />
					</template>
					<template #text>
						<p>
							Recevoir des solutions concrètes adaptées aux réalités du monde professionnel
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideCalendarRange color="var(--green)" />
					</template>
					<template #text>
						<p>
							Accéder à un suivi rapide et fexible avec des rendez-vous personnalisés
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideTvMinimalPlay color="var(--green)" />
					</template>
					<template #text>
						<p>
							Choisir facilement le professionnel idéal grâce aux vidéos de présentation
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideLeaf color="var(--green)" />
					</template>
					<template #text>
						<p>
							Profiter d'un accompagnement ciblé, diminuant le stress et favorisant un bien-être durable
						</p>
					</template>
				</UITableItem>
			</UITable>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.container-advantages-solo-content {
	width: 100%;

	&__table {
		color: var(--dark-blue);
		width: 100%;
		background-color: rgba(255, 255, 255, 0.4);
		border: 1px solid rgba(255, 255, 255, 1);
	}
}
</style>
