<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";

type ComponentProps = {
	href?: string
	youtube?: string
};
defineProps<ComponentProps>();
</script>

<template>
	<article class="page-ressources-columns-item">
		<div class="page-ressources-columns-item__start">
			<div>
				<slot name="icon" />
			</div>
			<h2 class="h3">
				<slot name="title" />
			</h2>
			<p>
				<slot name="description" />
			</p>
		</div>

		<iframe v-if="youtube" class="page-ressources-columns-item__start-media" width="560" height="315" :src="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />

		<div v-if="$slots.logo || $slots.cta" class="page-ressources-columns-item__end">
			<slot v-if="$slots.logo" name="logo" />
			<NuxtLink v-if="$slots.cta" :href class="reset-ua button" hover="dark-blue-border" target="_blank">
				<slot name="cta" />
				<LucideArrowUpRight stroke-width="2" />
			</NuxtLink>
		</div>
	</article>
</template>

<style scoped lang="scss">
.page-ressources-columns-item {
	display: flex;
	flex-direction: column;
	gap: rem(40);

	padding: rem(64);

	border-radius: 10px;
	box-shadow: var(--box-shadow);

	@media not #{$desktop} {
		padding: rem(40);
	}

	&__start {
		text-wrap: balance;
		display: flex;
		flex-direction: column;
		gap: rem(20);

		@media not #{$desktop} {
			gap: rem(15);
		}

		p {
			color: var(--fake-black);
		}

		&-media {
			border-radius: 10px;
			width: 100%;
		}
	}

	&__end {
		display: flex;
		justify-content: space-between;
		gap: rem(40);

		@media not #{$desktop} {
			flex-direction: column;
		}

		a {
			color: var(--white);
			background-color: var(--green);
		}
	}
}
</style>
