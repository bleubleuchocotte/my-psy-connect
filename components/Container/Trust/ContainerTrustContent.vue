<template>
	<UIContainerContent>
		<template #content>
			<div class="container-trust-content">
				<NuxtMarquee class="container-trust-content__marquee" :auto-fill="true">
					<div class="container-trust-content__marquee-item">
						<IconChambreCommerceIndustrie />
						<IconFederationPsychanalyseContemporaine />
						<IconLaFrenchTech />
						<IconAgefiph />
					</div>
				</NuxtMarquee>

				<div class="container-trust-content__fake-marquee" />

				<UIButton class="container-trust-content__cta">
					En savoir plus sur nos partenaires <IconArrowTopLeft />
				</UIButton>
			</div>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.container-trust-content {
	display: flex;
	flex-direction: column;
	align-items: center;

	@include gap(60);

	&__marquee {
		position: absolute;

		&-item {
			display: flex;
			@include gap(94);
			@include prop("margin-left", 94);
		}
	}

	&__fake-marquee {
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		@include prop("height", 40);
	}

	&__cta {
		color: var(--black);
		background: transparent;
		border-color: currentColor;
		width: fit-content;

		:deep(path) {
			stroke: currentColor;
		}
	}
}
</style>
