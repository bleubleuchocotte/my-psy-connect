<template>
	<div class="container-team-content">
		<img src="/assets/images/vector-1.svg" class="container-team-content__background">

		<ContainerTeamContentCard>
			<template #avatar>
				<img src="/assets/images/avatar.png" alt="">
			</template>
			<template #name>
				<h3>
					Nathalie Bourgeois
				</h3>
			</template>
			<template #job>
				<p>
					Psychanalyste
				</p>
			</template>
			<template #bio>
				<p class="container-team-content__bio">
					Directrice de l'Institut de psychanalyse de Lyon Grenoble Annecy - fédaration de psychanalyse contemporaine
				</p>
			</template>
			<template #link>
				en savoir plus
			</template>
		</ContainerTeamContentCard>
		<ContainerTeamContentCard>
			<template #avatar>
				<img src="/assets/images/avatar.png" alt="">
			</template>
			<template #name>
				<h3>
					Ysé Guénon
				</h3>
			</template>
			<template #job>
				<p>
					Psychologue et Psychothérapeuthe
				</p>
			</template>
			<template #bio>
				<p class="container-team-content__bio">
					Psychologue passionnée, reconnue pour son approche innovante et son engagement envers le bien-être mental.
				</p>
			</template>
			<template #link>
				en savoir plus
			</template>
		</ContainerTeamContentCard>
		<ContainerTeamContentCard>
			<template #avatar>
				<img src="/assets/images/avatar.png" alt="">
			</template>
			<template #name>
				<h3>
					Loïc Pouliquen
				</h3>
			</template>
			<template #job>
				<p>
					Avocat spécialiste en<br>Droit du travail
				</p>
			</template>
			<template #bio>
				<p class="container-team-content__bio">
					Reconnu pour son expertise avec plus de 30 ans d'expérience dans le domaine, il accompagne aussi bien les employeurs que les employés sur toutes les problématiques liées aux relations au travail.
				</p>
			</template>
			<template #link>
				en savoir plus
			</template>
		</ContainerTeamContentCard>
	</div>
</template>

<style scoped lang="scss">
.container-team-content {
	position: relative;
	display: flex;
	justify-content: center;

	@include prop("gap", 24);

	&__background {
		width: 100vw;
		max-width: unset;

		position: absolute;
		z-index: -1;
		top: -25%;
	}

	& > div {
		flex: 1;
		@include prop("max-width", 306);
	}

	&__bio {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		color: var(--fake-black);
		@include font("fs-14-500");
	}
}
</style>
