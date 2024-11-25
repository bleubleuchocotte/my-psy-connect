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
			Notre Équipe
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
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: var(--blur);
	background-color: rgba(255, 255, 255, 0.7);

	border: 1px solid rgba(255, 255, 255, 0.8);

	@include prop("width", 660);

	@include prop("padding-block", 17);

	@include prop("gap", 30);
	@include prop("border-radius", 30);
}
</style>
