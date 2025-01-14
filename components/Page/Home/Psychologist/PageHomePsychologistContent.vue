<template>
	<div class="page-home-psychologist-content">
		<UIBackgroundFixedSVG path="type-1" class="page-home-psychologist-content__background" hide="mobile" />

		<div class="page-home-psychologist-content__card">
			<PageHomePsychologistContentCard>
				<template #avatar>
					<NuxtImg preload src="/images/avatar/guenon.png" alt="" loading="lazy" />
				</template>
				<template #name>
					<h3>
						Isé Guénon
					</h3>
				</template>
				<template #job>
					<p>
						Psychologue
					</p>
				</template>
				<template #bio>
					<p class="page-home-psychologist-content__card-bio">
						Psychologue passionnée, reconnue pour son approche innovante et son engagement envers le bien-être mental.
					</p>
				</template>
				<template #link>
					<NuxtLink href="/equipe">
						en savoir plus
					</NuxtLink>
				</template>
			</PageHomePsychologistContentCard>
		</div>
	</div>
</template>

<style scoped lang="scss">
.page-home-psychologist-content {
	&__background {
		transform: translateY(-25%);
	}

	&__card {
		position: relative;
		display: flex;
		justify-content: center;

		@include prop("gap", 24);

		& > div {
			flex: 1;

			@media #{$desktop} {
				max-width: rem(260);
			}
		}

		&-bio {
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 4;
			color: var(--fake-black);
			@include font("p");
		}
	}
}
</style>
