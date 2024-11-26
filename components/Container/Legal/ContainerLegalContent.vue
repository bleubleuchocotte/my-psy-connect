<template>
	<UIContainerContent class="container-legal-content">
		<template #content>
			<UITable class="container-legal-content__table" variant="darker">
				<UITableItem>
					<template #icon>
						<LucideHeadset color="var(--green)" />
					</template>
					<template #text>
						<p>
							Bénéficier d'une assistance en cas de harcèlement, pressions abusives, discrimination ou non-respect de l'état de santé
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideFileLock2 color="var(--green)" />
					</template>
					<template #text>
						<p>
							Accéder à un espace sécurisé garantissant la confidentialité et le respect du RGPD
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideMessageSquare color="var(--green)" />
					</template>
					<template #text>
						<p>
							Partager ses expériences en toute sécurité, soutenu par des experts en droit du travail
						</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<LucideScale color="var(--green)" />
					</template>
					<template #text>
						<p>Faire valoir ses droits dans un cadre légal rigoureux </p>
					</template>
				</UITableItem>
			</UITable>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.container-legal-content {
	width: 100%;

	&__table {
		color: var(--dark-blue);
		width: 100%;
		background-color: rgba(255, 255, 255, 0.3);
		border: 1px solid rgba(255, 255, 255, 1);
	}
}
</style>
