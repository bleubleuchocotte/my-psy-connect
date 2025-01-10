<template>
	<div class="ui-table-item">
		<div class="ui-table-item__icon">
			<slot name="icon" />
		</div>

		<p>
			<slot name="text" />
		</p>
	</div>
</template>

<style scoped lang="scss">
.ui-table-item {
	display: flex;
	align-items: center;
	gap: rem(10);

	&__icon {
		flex-shrink: 0;
	}
}
</style>
