<template>
	<footer class="footer">
		<div class="footer__top">
			<div class="footer__top-left">
				<FooterControls />
				<FooterSocials />
			</div>
			<FooterLegalLinks />
		</div>

		<FooterCopyright />
	</footer>
</template>

<style scoped lang="scss">
.footer {
	display: flex;
	flex-direction: column;

	@include gap(60);
	@include prop("margin-top", 24);
	@include prop("padding-block", 94);
	@include prop("padding-inline", 118);

	@media not #{$desktop} {
		padding-inline: rem(20);
		padding-top: rem(80);
		padding-bottom: rem(40);
	}

	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@include gap(24);

		@media not #{$desktop} {
			flex-direction: column;
			gap: rem(60);
		}

		&-left {
			display: flex;
			flex-direction: column;
			gap: rem(40);

			@media not #{$desktop} {
				width: 100%;
				gap: rem(30);
			}
		}
	}
}
</style>
