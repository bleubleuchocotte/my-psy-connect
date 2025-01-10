<template>
	<div class="ui-table-item">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.ui-table-item {
	display: flex;
	align-items: center;
	gap: rem(10);
}
</style>
