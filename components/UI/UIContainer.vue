<script setup lang="ts">
type ComponentProps = {
	wrapper?: keyof HTMLElementTagNameMap
	direction?: "row" | "row-reverse" | "column"
};

withDefaults(defineProps<ComponentProps>(), {
	wrapper: "section",
	direction: "column",
});
</script>

<template>
	<component :is="wrapper" class="ui-container" :data-direction="direction">
		<slot />
	</component>
</template>

<style scoped lang="scss">
.ui-container {
	display: flex;

	&[data-direction="row"] {
		flex-direction: row;
		@include gap(142);
	}
	&[data-direction="row-reverse"] {
		flex-direction: row-reverse;
		@include gap(142);
	}
	&[data-direction="column"] {
		flex-direction: column;
		@include gap(60);
	}

	@include prop("border-radius", 10);
	@include prop("padding-block", 94);
	@include prop("padding-inline", 118);
}
</style>
