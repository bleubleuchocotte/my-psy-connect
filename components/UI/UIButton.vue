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
	variant: "default" | "small"
};

const props = withDefaults(defineProps<ButtonHTMLAttributes & ComponentProps>(), {
	type: "button",
	disabled: false,
	variant: "default",
});
</script>

<template>
	<button class="button" v-bind="props" :data-variant="variant">
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	border-style: solid;
	border-width: 2px;
	border-color: transparent;

	@include gap(10);
	@include prop("border-radius", 50);
	@include prop("padding-block", 15);

	&[data-variant="default"] {
		@include prop("padding-inline", 25);
	}
	&[data-variant="small"] {
		@include prop("padding-inline", 10);
	}

	@include font("fs-16-600");

	&:not([disabled]) {
		cursor: pointer;

		&:hover {
		}

		// focus-visible let the UA determines when it need to apply focus style
		&:focus,
		&:focus-within,
		&:focus-visible {
		}
	}
}
</style>
