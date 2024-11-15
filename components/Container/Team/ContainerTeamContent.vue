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
					Psychanalyste et Psychothérapeuthe
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
					Nathalie Bourgeois
				</h3>
			</template>
			<template #job>
				<p>
					Psychanalyste et Psychothérapeuthe
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
					Nathalie Bourgeois
				</h3>
			</template>
			<template #job>
				<p>
					Psychanalyste et Psychothérapeuthe
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
		top: -25%;
	}

	& > div {
		flex: 1;
		@include prop("max-width", 306);
	}

	&__bio {
		@include font("fs-14-500");
	}
}
</style>
