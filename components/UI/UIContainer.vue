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
	flex-wrap: wrap;

	&[data-direction="row"] {
		flex-direction: row;
		gap: rem(142);
	}
	&[data-direction="row-reverse"] {
		flex-direction: row-reverse;
		gap: rem(142);
	}
	&[data-direction="column"] {
		flex-direction: column;
		gap: rem(60);
	}

	border-radius: 10px;

	padding-block: rem(94);
	padding-inline: rem(118);

	@media not #{$desktop} {
		padding-inline: rem(20);
		padding-block: rem(80);
	}
}
</style>
