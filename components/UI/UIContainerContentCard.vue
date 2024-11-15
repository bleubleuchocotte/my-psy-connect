<template>
	<div class="ui-container-content-card">
		<slot name="icon" />
		<slot name="title" />
		<slot name="text" />
	</div>
</template>

<style scoped lang="scss">
.ui-container-content-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;

	background-color: var(--white);
	border: 1px solid var(--light-green);

	@include gap(24);
	@include padding(24);
	@include prop("border-radius", 10);
}
</style>
