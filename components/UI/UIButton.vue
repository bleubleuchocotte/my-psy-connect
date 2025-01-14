<script setup lang="ts">
type ButtonHTMLAttributes = {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: string
	formmethod?: string
	formnovalidate?: boolean
	formtarget?: string
	name?: string
	type?: "submit" | "reset" | "button"
	value?: string | ReadonlyArray<string> | number
};

type ComponentProps = {
	variant?: "default" | "small"
};

const props = withDefaults(defineProps<ButtonHTMLAttributes & ComponentProps>(), {
	type: "button",
	disabled: false,
	variant: "default",
});
</script>

<template>
	<button class="ui-button" v-bind="props" :data-variant="variant">
		<slot />
	</button>
</template>

<style scoped lang="scss">
.ui-button {
	cursor: pointer;

	display: flex;
	align-items: center;
	border-style: solid;
	border-width: 2px;
	border-color: transparent;

	@include font("cta");
	@include prop("max-height", 54);

	@include gap(10);
	@include prop("border-radius", 50);
	@include prop("padding-block", 15);

	&[data-variant="default"] {
		@include prop("padding-inline", 25);
	}
	&[data-variant="small"] {
		@include prop("padding-inline", 10);
	}

	&[disabled] {
		cursor: not-allowed !important;
	}
}
</style>
