<template>
	<div class="ui-spinning-loader" />
</template>

<style scoped lang="scss">
.ui-spinning-loader {
	animation: rotate 0.5s linear infinite;

	margin: 0 auto;

	border-radius: 100%;
	border: 2px solid currentColor;
	border-right-color: transparent;

	height: rem(24);
	width: rem(24);

	@keyframes rotate {
		0% {
			rotate: 0deg;
		}

		100% {
			rotate: 360deg;
		}
	}
}
</style>
