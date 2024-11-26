<template>
	<div class="ui-newsletter">
		<input type="text" placeholder="S'inscrire à la newsletter">
		<UIButton class="ui-newsletter__cta">
			Envoyer <LucideSend colr="var(--beige)" />
		</UIButton>
	</div>
</template>

<style scoped lang="scss">
.ui-newsletter {
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: var(--white);
	filter: var(--drop-shadow);

	@include prop("border-radius", 50);
	@include padding(5);
	&__cta {
		background-color: var(--dark-blue);
		color: var(--beige);
	}
}
</style>
