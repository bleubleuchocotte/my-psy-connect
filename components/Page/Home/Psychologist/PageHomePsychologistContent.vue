<template>
	<div class="page-home-psychologist-content">
		<UIBackgroundFixedSVG path="type-1" class="page-home-psychologist-content__background" hide="mobile" />

		<div class="page-home-psychologist-content__card">
			<PageHomePsychologistContentCard>
				<template #avatar>
					<NuxtImg preload src="/images/avatar/guenon.png" alt="" loading="lazy" />
				</template>
				<template #name>
					Isé Guénon
				</template>
				<template #job>
					Psychologue
				</template>
				<template #bio>
					Psychologue passionnée, reconnue pour son approche innovante et son engagement envers le bien-être mental.
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

		gap: rem(24);

		img {
			height: 100%;
			width: 100%;
		}

		& > div {
			flex: 1;

			@media #{$desktop} {
				max-width: rem(260);
			}
		}
	}
}
</style>
