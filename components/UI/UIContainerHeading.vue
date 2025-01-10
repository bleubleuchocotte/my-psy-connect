<template>
	<div class="ui-container-heading">
		<div class="ui-container-heading__content">
			<slot name="icon" />
			<slot name="title" />
			<slot name="text" />
		</div>
		<slot name="cta" />
	</div>
</template>

<style scoped lang="scss">
.ui-container-heading {
	align-self: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	text-wrap: balance;

	@include gap(40);

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;

		@include gap(24);
	}
}
</style>
