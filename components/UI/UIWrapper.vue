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
	@include wrapper(1440px, 24);
}
</style>
