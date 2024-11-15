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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@include gap(40);

	&__content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		@include gap(24);
	}
}
</style>
