<script setup lang="ts">
type ComponentProps = {
	variant: "dark-blue" | "light-green" | "beige"
	direction?: "row-reverse"
};

defineProps<ComponentProps>();
</script>

<template>
	<section class="ui-section-text-image" :variant :direction>
		<div class="ui-section-text-image__start">
			<div class="ui-section-text-image__start-icon">
				<slot name="icon" />
			</div>

			<h2 class="h1">
				<slot name="title" />
			</h2>

			<p>
				<slot name="description" />
			</p>
		</div>

		<div class="ui-section-text-image__end">
			<slot name="image" />
		</div>
	</section>
</template>

<style scoped lang="scss">
.ui-section-text-image {
	display: flex;
	gap: rem(24);

	&[direction="row-reverse"] {
		@media #{$desktop} {
			flex-direction: row-reverse;
		}
	}

	&[variant="dark-blue"] {
		--background-color: var(--dark-blue);
		--color: var(--white);
	}
	&[variant="light-green"] {
		--background-color: var(--extra-light-green);
		--color: var(--dark-blue);
	}
	&[variant="beige"] {
		--background-color: var(--beige);
		--color: var(--fake-black);
	}

	@media not #{$desktop} {
		flex-direction: column-reverse;
		gap: rem(80);
		padding: rem(20);
		padding-bottom: rem(80);

		background-color: var(--background-color);
		border-radius: 10px;
	}

	&__start,
	&__end {
		overflow: hidden;
		border-radius: 10px;
		flex: 1;
	}

	&__start {
		text-wrap: balance;
		background-color: var(--background-color);
		color: var(--color);

		padding-inline: rem(118);
		padding-block: rem(94);

		display: flex;
		flex-direction: column;
		gap: rem(24);

		@media not #{$desktop} {
			gap: rem(20);
			padding-inline: 0;
			padding-block: 0;
		}

		&-icon {
			height: rem(80);
			width: rem(80);

			color: var(--green);

			@media not #{$desktop} {
				height: rem(60);
				width: rem(60);
			}

			:deep(svg) {
				width: 100%;
				height: 100%;
			}
		}
	}

	&__end {
		@media not #{$desktop} {
			width: 100%;
			aspect-ratio: 1.58;
		}
		:deep(img) {
			height: 100%;
			width: 100%;

			object-fit: cover;
		}
	}
}
</style>
