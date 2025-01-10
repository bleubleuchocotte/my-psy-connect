<script setup lang="ts">
type ComponentProps = {
	wrapper?: keyof HTMLElementTagNameMap
};

withDefaults(defineProps<ComponentProps>(), {
	wrapper: "div",
});
</script>

<template>
	<component :is="wrapper" class="ui-wrapper">
		<slot />
	</component>
</template>

<style scoped lang="scss">
.ui-wrapper {
	--padding-inline: 24;

	@media not #{$desktop} {
		--padding-inline: 10;
	}

	@include wrapper(1440px, var(--padding-inline));
}
</style>
