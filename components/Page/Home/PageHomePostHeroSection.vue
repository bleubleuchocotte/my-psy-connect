<template>
	<section class="home-post-hero-section">
		<PageHomePostHeroCard background-src="/images/avatar.png">
			<template #icon>
				<LucideGrid2x2Plus />
			</template>
			<template #title>
				<h2>Séances<br>de groupe</h2>
			</template>
			<template #content>
				<p>
					Nos séances de groupe sont spécialement conçues pour les personnes confrontées à la souffrance au travail, au stress, et au burnout.<br>
					Chaque groupe est limité à 4 participants pour garantir un espace d'échange de qualité, où chacun peut s'exprimer librement et recevoir un soutien adapté.
				</p>
			</template>
		</PageHomePostHeroCard>
		<PageHomePostHeroCard background-src="/images/avatar.png">
			<template #icon>
				<LucideHeadset />
			</template>
			<template #title>
				<h2>Séances<br>individuelles</h2>
			</template>
			<template #content>
				<p>
					Pour ceux qui préfèrent un accompagnement plus personnalisé, MyPsy propose également des séances individuelles avec des psychologues, psychothérapeutes, et psychanalystes qualifiés. Ces séances vous offrent un espace dédié où vous pouvez aborder vos préoccupations en toute confidentialité, à votre rythme.
				</p>
			</template>
		</PageHomePostHeroCard>
		<PageHomePostHeroCard background-src="/images/avatar.png">
			<template #icon>
				<LucideScale />
			</template>
			<template #title>
				<h2>Assistance<br>juridique</h2>
			</template>
			<template #content>
				<p>
					Nous proposons également une assistance juridique, offrant un soutien concret et légal dans les situations de harcèlement ou de manipulation au travail, pour vous aider à reprendre confiance et à envisager sereinement votre avenir professionnel. Nous vous garantissons un accompagnement sécurisé et confidentiel, où votre bien-être est notre priorité.
				</p>
			</template>
		</PageHomePostHeroCard>
	</section>
</template>

<style scoped lang="scss">
.home-post-hero-section {
	display: flex;
	@include gap(24);

	p {
		@include font("p");
	}
}
</style>
