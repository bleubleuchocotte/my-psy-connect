<script setup lang="ts">
const isInViewport = ref(false);
</script>

<template>
	<UIIntersectionObserver @is-visible="isInViewport = $event">
		<UIContainer direction="row" class="page-home-advantages-group">
			<PageHomeAdvantagesGroupHeading class="page-home-advantages-group__heading" :viewport="isInViewport" />
			<PageHomeAdvantagesGroupContent class="page-home-advantages-group__content" :viewport="isInViewport" />
		</UIContainer>
	</UIIntersectionObserver>
</template>

<style scoped lang="scss">
.page-home-advantages-group {
	background-color: var(--dark-blue);

	flex-wrap: nowrap;

	@media not #{$desktop} {
		flex-direction: column !important;
		gap: rem(80) !important;
	}

	&__heading,
	&__content {
		transition:
			opacity linear 0.4s 0.3s,
			transform ease-out 0.4s 0.3s;

		&[viewport="false"] {
			opacity: 0;
		}
		&[viewport="true"] {
			opacity: 1;
			transform: translateX(0px);
		}
	}

	&__heading {
		&[viewport="false"] {
			transform: translateX(-50px);
		}
	}
	&__content {
		&[viewport="false"] {
			transform: translateX(50px);
		}
	}

	&__heading {
		flex: 1;
		align-items: flex-start;
		text-align: left;
	}

	&__content {
		flex: 1.25;
	}
}
</style>
