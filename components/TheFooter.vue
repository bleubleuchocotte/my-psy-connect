<template>
	<footer class="footer">
		<div class="footer__information">
			<h3>Tenez-vous informé des actualités de MyPsy</h3>
			<FormNewsletter class="footer__information-newsletter" variant="footer" />
			<div class="footer__information-links">
				<div>
					<UIButton class="footer__information-links-cta">
						Contactez-nous <LucideMail color="var(--dark-blue)" />
					</UIButton>
					<TheFooterSocials />
				</div>

				<TheFooterLegalLinks />
			</div>
		</div>
		<div class="footer__copyright">
			<div class="footer__copyright-content">
				<p>© Copyright MyPsyConnect {{ new Date().getFullYear() }}</p>

				<UILink to="https://bleubleu.studio" class="footer__copyright-content-link">
					<span>Made by</span>
					<IconLogoBleuBleu />
					<span>Bleubleu Chocotte</span>
				</UILink>
			</div>
			<IconLogoWithText />
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	display: flex;
	flex-direction: column;

	@include gap(60);
	@include prop("margin-top", 24);
	@include prop("border-radius", 10);
	@include prop("padding-block", 94);
	@include prop("padding-inline", 118);

	&__information {
		display: flex;
		flex-direction: column;

		@include gap(24);

		h3 {
			@include prop("margin-bottom", 6);
		}

		&-newsletter {
			@include prop("max-width", 566);
		}
		&-links {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& > div {
				display: flex;
				justify-content: space-between;
				align-items: center;

				@include gap(40);
			}

			&-cta {
				background-color: transparent;
				border-color: var(--dark-blue);
			}
		}
	}

	&__copyright {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--medium-grey);
		@include prop("padding-top", 30);

		&-content {
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
}
</style>
