<template>
	<UIContainer direction="row" class="container-advantages-group">
		<UIContainerHeading class="container-advantages-group__heading">
			<template #icon>
				<IconChat class="container-advantages-group__heading-icon" />
			</template>
			<template #title>
				<h2 class="container-advantages-group__heading-title">
					Avantages des séances de groupe MyPsy
				</h2>
			</template>
			<template #text>
				<p class="container-advantages-group__heading-text">
					Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>Notre équipe vous assure un soutien professionnel en psychanalyse, psychothérapie et psychopraticie, avec une approche moderne et bienveillante.
				</p>
			</template>
			<template #cta>
				<UIButton class="container-advantages-group__heading-cta">
					En savoir plus <IconArrowTopLeft />
				</UIButton>
			</template>
		</UIContainerHeading>
		<UIContainerContent>
			<template #content>
				<UITable>
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
	</UIContainer>
</template>

<style scoped lang="scss">
.container-advantages-group {
	background-color: var(--dark-blue);

	&__heading {
		align-items: flex-start;
		text-align: left;

		&-icon {
			align-self: flex-start;
		}

		&-title,
		&-text {
			color: var(--white);
		}

		&-cta {
			color: var(--white);
			background-color: var(--green);
		}
	}
}
</style>
