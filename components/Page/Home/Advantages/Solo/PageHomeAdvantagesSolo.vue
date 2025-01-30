<script setup lang="ts">
const isInViewport = ref(false);
</script>

<template>
	<UIIntersectionObserver @is-visible="isInViewport = $event">
		<UIContainer direction="row-reverse" class="page-home-advantages-solo">
			<PageHomeAdvantagesSoloHeading class="page-home-advantages-solo__heading" :viewport="isInViewport" animation="fade-in-translate-in-from-left" />
			<PageHomeAdvantagesSoloContent class="page-home-advantages-solo__content" :viewport="isInViewport" animation="fade-in-translate-in-from-left" />
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
}
</style>
