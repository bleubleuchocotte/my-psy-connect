<template>
	<section class="page-home-section-trio-cards">
		<PageHomeSectionTrioCardsCard background-src="/images/background/card-1.png">
			<template #icon>
				<IconCustomGroup />
			</template>
			<template #title>
				<h2>Séances de groupe</h2>
			</template>
			<template #content>
				<p>
					Nos séances de groupe sont spécialement conçues pour les personnes confrontées à la souffrance au travail, au stress, et au burnout.<br>
					Chaque groupe est limité à 4 participants pour garantir un espace d'échange de qualité, où chacun peut s'exprimer librement et recevoir un soutien adapté.
				</p>
			</template>
		</PageHomeSectionTrioCardsCard>
		<PageHomeSectionTrioCardsCard background-src="/images/background/card-2.png">
			<template #icon>
				<IconCustomChatSmall />
			</template>
			<template #title>
				<h2>Séances<br>individuelles</h2>
			</template>
			<template #content>
				<p>
					Pour ceux qui préfèrent un accompagnement plus personnalisé, MyPsy propose également des séances individuelles avec des psychologues qualifiés. Ces séances vous offrent un espace dédié où vous pouvez aborder vos préoccupations en toute confidentialité, à votre rythme.
				</p>
			</template>
		</PageHomeSectionTrioCardsCard>
		<PageHomeSectionTrioCardsCard background-src="/images/background/card-3.png">
			<template #icon>
				<IconCustomHeadset />
			</template>
			<template #title>
				<h2>Webinaires</h2>
			</template>
			<template #content>
				<p>
					Participez à nos webinaires animés par des psychologues  spécialisés pour comprendre le burnout, vos droits et les solutions adaptées à votre situation. Une opportunité pour poser vos questions et obtenir des réponses claires.
				</p>
			</template>
		</PageHomeSectionTrioCardsCard>
	</section>
</template>

<style scoped lang="scss">
.page-home-section-trio-cards {
	display: flex;
	@include gap(24);

	@media not #{$desktop} {
		flex-direction: column;
	}

	p {
		@include font("p");
	}
}
</style>
