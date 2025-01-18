<template>
	<nav class="navigation-bar">
		<UILink to="/">
			Accueil
		</UILink>
		<UILink to="/services">
			Services
		</UILink>
		<UILink to="/partenaires">
			Partenaires
		</UILink>
		<UILink to="/equipe">
			Nos psychologues
		</UILink>
		<UILink to="/ressources">
			Ressources
		</UILink>
		<UILink to="/a-propos">
			À Propos
		</UILink>
	</nav>
</template>

<style scoped lang="scss">
.navigation-bar {
	width: rem(660);

	display: flex;
	justify-content: center;
	align-items: center;
	gap: rem(30);

	padding-block: rem(17);

	backdrop-filter: var(--blur);
	background-color: rgba(255, 255, 255, 0.7);

	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 30px;

	a {
		@include font("p");
	}
}
</style>
