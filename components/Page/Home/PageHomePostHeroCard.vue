<script setup lang="ts">
type ComponentProps = {
	backgroundSrc: string
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="home-card-post-hero" :style="`background: linear-gradient(#0c1b3300 0%, #0c1b33 100%), url('${backgroundSrc}')`">
		<slot name="icon" />
		<slot name="title" />
		<slot name="content" />

		<UIButton class="home-card-post-hero__cta">
			En savoir plus <LucideArrowUpRight />
		</UIButton>
	</div>
</template>

<style scoped lang="scss">
.home-card-post-hero {
	flex: 1;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	color: var(--white);
	background-position: center !important;
	background-size: cover !important;
	background-repeat: no-repeat !important;

	@include gap(15);
	@include padding(40);
	@include prop("border-radius", 10);
	@include prop("padding-top", 180);

	&__cta {
		width: fit-content;
		@include prop("margin-top", 15);
	}
}
</style>
