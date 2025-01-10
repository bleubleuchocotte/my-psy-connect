<template>
	<div class="ui-table">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.ui-table {
	display: flex;
	flex-direction: column;
	gap: rem(25);

	padding: rem(40);

	border-radius: 10px;

	@media not #{$desktop} {
		gap: rem(20);
		padding-inline: rem(20);
	}
}
</style>
