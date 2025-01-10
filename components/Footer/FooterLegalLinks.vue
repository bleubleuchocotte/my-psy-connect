<template>
	<div class="footer-legal-links">
		<UILink class="p">
			Politique de Confidentialité
		</UILink>
		<UILink class="p">
			Mentions légales
		</UILink>
		<UILink class="p">
			Politiques des cookies
		</UILink>
	</div>
</template>

<style scoped lang="scss">
.footer-legal-links {
	display: flex;
	align-items: center;
	@include gap(20);

	@media not #{$desktop} {
		flex-direction: column;
	}
}
</style>
