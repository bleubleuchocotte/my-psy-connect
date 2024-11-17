<script setup lang="ts">
type ComponentProps = {
	blur?: boolean
};

withDefaults(defineProps<ComponentProps>(), {
	blur: false,
});
</script>

<template>
	<div class="ui-container-content-card" :class="{ blur }">
		<slot name="icon" />
		<slot name="title" />
		<slot name="text" />
	</div>
</template>

<style scoped lang="scss">
.ui-container-content-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;

	background-color: var(--white);
	border: 1px solid var(--light-green);

	&.blur {
		background-color: rgba(255, 255, 255, 0.8);
		backdrop-filter: var(--blur);
	}

	@include gap(24);
	@include padding(24);
	@include prop("border-radius", 10);
}
</style>
