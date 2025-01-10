<script setup lang="ts">
type ComponentProps = {
	path: "type-1" | "type-2"
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="ui-background-fixed-image">
		<IconBackgroundPathType1 v-if="path === 'type-1'" />
		<IconBackgroundPathType2 v-else-if="path === 'type-2'" />
	</div>
</template>

<style scoped lang="scss">
.ui-background-fixed-image {
	width: 100vw;
	left: 0;

	position: absolute;
	z-index: -1;

	svg {
		max-width: none;
		width: 100%;
		height: 100%;
	}
}
</style>
