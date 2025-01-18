<script setup lang="ts">
const isInViewport = ref(false);
</script>

<template>
	<UIIntersectionObserver @is-visible="isInViewport = true">
		<UIContainer direction="row-reverse" class="page-home-advantages-solo">
			<PageHomeAdvantagesSoloHeading class="page-home-advantages-solo__heading" :viewport="isInViewport" />
			<PageHomeAdvantagesSoloContent class="page-home-advantages-solo__content" :viewport="isInViewport" />
		</UIContainer>
	</UIIntersectionObserver>
</template>

<style scoped lang="scss">
.page-home-advantages-solo {
	background-color: var(--beige);
	flex-wrap: nowrap;

	@media not #{$desktop} {
		flex-direction: column !important;
		gap: rem(60) !important;
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
			transform: translateX(50px);
		}
	}
	&__content {
		&[viewport="false"] {
			transform: translateX(-50px);
		}
	}
}
</style>
