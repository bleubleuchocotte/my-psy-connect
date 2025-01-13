<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";

type ComponentProps = {
	backgroundSrc: string
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="home-card-post-hero" :style="`background: linear-gradient(#0c1b3300 0%, #0c1b33 100%), url('${backgroundSrc}')`">
		<div class="home-card-post-hero__icon">
			<slot name="icon" />
		</div>
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
		padding: rem(20);
		padding-top: rem(120);
	}

	&__icon {
		color: var(--white);
		height: rem(24);
		width: rem(24);

		:deep(svg) {
			width: 100%;
			height: 100%;
		}
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
