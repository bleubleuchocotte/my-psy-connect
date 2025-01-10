<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";

type ComponentProps = {
	backgroundSrc: string
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="home-card-post-hero" :style="`background: linear-gradient(#0c1b3300 0%, #0c1b33 100%), url('${backgroundSrc}')`">
		<slot name="icon" />
		<slot name="title" />
		<div class="home-card-post-hero__content">
			<slot name="content" />
		</div>

		<UIButton class="home-card-post-hero__cta">
			En savoir plus <LucideArrowUpRight stroke="var(--dark-blue)" stroke-width="2" />
		</UIButton>
	</div>
</template>

<style scoped lang="scss">
.home-card-post-hero {
	flex: 1;

	display: flex;
	flex-direction: column;

	color: var(--white);
	background-position: center !important;
	background-size: cover !important;
	background-repeat: no-repeat !important;

	@include gap(15);
	@include padding(40);
	@include prop("border-radius", 10);
	@include prop("padding-top", 180);

	@media not #{$desktop} {
		padding: pxToRem(20);
		padding-top: pxToRem(120);
	}

	&__cta {
		width: fit-content;
		@include prop("margin-top", 15);
	}

	&__content {
		flex: 1;
	}
}
</style>
