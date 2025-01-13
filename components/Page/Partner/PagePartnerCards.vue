<template>
	<section class="page-partners-cards">
		<UIPartnerCard href="https://lafrenchtech.gouv.fr/fr/" class="page-partners-cards__card">
			<template #name>
				La french Tech
			</template>
			<template #description>
				MyPsy a été sélectionné et soutenu par La French Tech, un écosystème dynamique d'innovation en France, reconnu pour son accompagnement et son engagement auprès des startups à fort potentiel. Cet accompagnement nous permet de bénéficier d'un réseau d'experts, de mentorat, et de ressources pour accélérer notre croissance.
			</template>
			<template #logo>
				<IconPartnerLaFrenchTech />
			</template>
		</UIPartnerCard>
		<UIPartnerCard href="https://www.grenoble.cci.fr/" class="page-partners-cards__card">
			<template #name>
				Chambre de Commerce et d'Industrie (CCI) de Grenoble
			</template>
			<template #description>
				La Chambre de Commerce et d'Industrie (CCI) de Grenoble a joué un rôle essentiel dans le lancement de MyPsy en nous accordant une subvention pour l'aide à la création d'entreprise. Ils continuent de nous soutenir en nous donnant accès à leur réseau, renforçant ainsi notre crédibilité et nous permettant de connecter avec d'autres acteurs clés du marché de la santé mentale.
			</template>
			<template #logo>
				<IconPartnerCCI />
			</template>
		</UIPartnerCard>
		<UIPartnerCard href="https://www.agefiph.fr/" class="page-partners-cards__card">
			<template #name>
				L'Association de Gestion du Fonds pour l'Insertion des Personnes Handicapées (AGEFIPH)
			</template>
			<template #description>
				L'AGEFIPH (Association de Gestion du Fonds pour l'Insertion des Personnes Handicapées) soutient l'insertion professionnelle des personnes en situation de handicap, notamment par des aides financières, des formations, et un accompagnement adapté. Dans le cadre de mon projet MyPsy, l'AGEFIPH m'a soutenu en proposant une aide à la création d'entreprise, ce qui m'a permis d'obtenir une subvention pour financer le site vitrine de la plateforme.
			</template>
			<template #logo>
				<IconPartnerAgefiph />
			</template>
		</UIPartnerCard>
	</section>
</template>

<style scoped lang="scss">
.page-partners-cards {
	display: flex;
	gap: rem(24);
	flex-wrap: wrap;

	@media not #{$desktop} {
		flex-direction: column;
	}

	& > div {
		flex: 1;
		min-width: calc(100% / 3);
	}
}
</style>
