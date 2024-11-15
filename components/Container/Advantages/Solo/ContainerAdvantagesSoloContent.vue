<template>
	<UIContainerContent class="container-advantages-solo-content">
		<template #content>
			<UITable class="container-advantages-solo-content__table">
				<UITableItem>
					<template #icon>
						<IconMan />
					</template>
					<template #text>
						<p>Devenez acteur de votre santé mentale avec un plan personnalisé</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconFormation />
					</template>
					<template #text>
						<p>Bénéficiez de l'expertise de professionnels sensibilisés à la souffrance au travail</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconSolutions />
					</template>
					<template #text>
						<p>Recevez des solutions concrètes adaptées aux réalités du monde professionnel</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconCalendar />
					</template>
					<template #text>
						<p>Accédez à un suivi rapide et flexible avec des rendez-vous personnalisés</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconTV />
					</template>
					<template #text>
						<p>Choisissez facilement le professionnel idéal grâce aux vidéos de présentation</p>
					</template>
				</UITableItem>
				<UITableItem>
					<template #icon>
						<IconLeaf />
					</template>
					<template #text>
						<p>Profitez d'un accompagnement ciblé, diminuant votre stress et favorisant un bien-être durable</p>
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
	}
}
</style>
