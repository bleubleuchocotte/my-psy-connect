<template>
	<div class="home-hero-icon-reveal">
		<IconTextBlueCircleSun />
		<IconTextGreenCircleSprout class="home-hero-icon-reveal__sprout" />
	</div>
</template>

<style lang="scss" scoped>
.home-hero-icon-reveal {
	position: relative;

	@include prop("width", 122);
	@include prop("height", 82);

	svg {
		position: absolute;
	}

	&__sprout {
		right: 0;
	}
}
</style>
