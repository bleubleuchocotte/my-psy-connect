<template>
	<div class="footer-copyright">
		<div class="footer-copyright__content">
			<p class="p-secondary">
				© Copyright MyPsyConnect {{ new Date().getFullYear() }}
			</p>

			<UILink to="https://bleubleu.studio" class="footer-copyright__content-link">
				<span class="p-secondary">Made by</span>
				<IconLogoBleuBleu />
				<span>Bleubleu Chocotte</span>
			</UILink>
		</div>
		<IconLogoWithText />
	</div>
</template>

<style scoped lang="scss">
	.footer-copyright {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid var(--medium-grey);
	@include prop("padding-top", 30);

	@media not #{$desktop} {
		flex-direction: column;
		gap: rem(30);
	}

	&__content {
		display: flex;
		flex-direction: column;

		@include gap(20);
		p {
			color: var(--dark-grey);
		}

		&-link {
			display: flex;
			align-items: center;
			@include gap(5);

			span:first-of-type {
				color: var(--dark-grey);
			}
			span:last-of-type {
				color: var(--dark-blue);
				text-decoration: underline;
			}
		}
	}
}
</style>
