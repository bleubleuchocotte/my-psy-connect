<template>
	<div class="ui-table-item">
		<div class="ui-table-item__icon">
			<slot name="icon" />
		</div>
		<slot name="text" />
	</div>
</template>

<style scoped lang="scss">
.ui-table-item {
	display: flex;
	align-items: center;

	@include prop("padding-right", 24);
	@include prop("padding-top", 24);
	@include gap(10);

	&__icon {
		flex-shrink: 0;
	}
}
</style>
