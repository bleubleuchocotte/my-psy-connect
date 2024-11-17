<template>
	<UIContainerContent class="container-legal-content">
		<template #content>
			<UITable class="container-legal-content__table">
				<UITableItem>
					<template #icon>
						<IconHandHeart />
					</template>
					<template #text>
						<p>Bénéficiez d'une assistance en cas de harcèlement, pressions abusives, discrimination ou non-respect de l'état de santé</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconSun />
					</template>
					<template #text>
						<p>Accédez à un espace sécurisé garantissant la confidentialité et le respect du RGPD</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconPig />
					</template>
					<template #text>
						<p>Partagez vos expériences en toute sécurité, soutenu par des experts en droit du travail</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconGrow />
					</template>
					<template #text>
						<p>Faites valoir vos droits dans un cadre légal rigoureux</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconSpeech />
					</template>
					<template #text>
						<p>Retrouver une sérénité au travail grâce à un soutien discret et professionnel</p>
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
