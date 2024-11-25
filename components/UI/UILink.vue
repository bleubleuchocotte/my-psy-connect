<script setup lang="ts">
import type { NuxtLinkProps } from "#app/components/nuxt-link";

const props = withDefaults(defineProps<NuxtLinkProps>(), {
	noPrefetch: undefined,
	prefetch: true,
});
</script>

<template>
	<NuxtLink v-bind="props" class="link">
		<slot />
	</NuxtLink>
</template>

<style scoped lang="scss">
.link {
	@include font("fs-16-500");

	&:visited,
	&:link {
		color: unset;
	}

	&:any-link {
		text-decoration: unset;
	}

	&.router-link-active {
		color: var(--green);
	}
}
</style>
