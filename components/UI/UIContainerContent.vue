<template>
	<div class="ui-container-content">
		<slot name="title" />
		<slot name="content" />
	</div>
</template>

<style scoped lang="scss">
.ui-container-content {
	display: flex;
	flex-direction: column;

	@include gap(30);
}
</style>
