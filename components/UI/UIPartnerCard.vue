<script setup lang="ts">
type ComponentProps = {
	href: string
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="ui-partner-card">
		<div class="ui-partner-card__start">
			<h2>
				<slot name="name" />
			</h2>
			<p>
				<slot name="description" />
			</p>
		</div>

		<UILink :href class="ui-partner-card__link">
			<slot name="logo" />
		</UILink>
	</div>
</template>

<style scoped lang="scss">
.ui-partner-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: rem(94);

	padding-inline: rem(64);
	padding-block: rem(94);

	background-color: var(--white);
	box-shadow: var(--box-shadow);

	border-radius: 10px;
	text-align: center;

	@media not #{$desktop} {
		gap: rem(60);
		padding-inline: rem(20);
		padding-block: rem(60);
	}

	&__start {
		display: flex;
		flex-direction: column;
		gap: rem(24);
		text-wrap: balance;

		p {
			color: var(--fake-black);
		}
	}

	&__link {
		height: rem(55);

		@media not #{$desktop} {
			height: rem(45);
		}

		:deep(svg) {
			height: 100%;
			width: 100%;
		}
	}
}
</style>
