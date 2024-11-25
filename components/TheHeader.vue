<template>
	<header class="header">
		<TheHeaderLogo class="header__logo" />

		<div class="header__navigation">
			<TheNavigationBar />
		</div>

		<UIButton class="header__cta">
			Rejoignez-nous
			<LucideMail />
		</UIButton>
	</header>
</template>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: absolute;
	left: 0;

	@include wrapper(1440, 118);
	@include prop("top", 48);

	&__navigation {
		position: fixed;
		z-index: 999;

		left: 50%;
		transform: translateX(-50%);

		@include prop("top", 48);
	}
}
</style>
