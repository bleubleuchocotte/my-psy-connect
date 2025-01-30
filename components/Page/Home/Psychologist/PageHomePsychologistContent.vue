<script setup lang="ts">
const isInViewport = ref(false);
</script>

<template>
	<div class="page-home-psychologist-content">
		<UIBackgroundFixedSVG path="type-1" class="page-home-psychologist-content__background" hide="mobile" />

		<UIIntersectionObserver class="page-home-psychologist-content__cards" @is-visible="isInViewport = $event">
			<PageHomePsychologistContentCard class="page-home-psychologist-content__cards-card" :viewport="isInViewport" position="1" animation="fade-in-translate-in-from-bottom">
				<template #avatar>
					<NuxtImg preload src="/images/avatar/guenon.png" alt="" loading="lazy" />
				</template>
				<template #name>
					Isé Guénon
				</template>
				<template #job>
					Psychologue
				</template>
				<template #bio>
					Psychologue passionnée, reconnue pour son approche innovante et son engagement envers le bien-être mental.
				</template>
			</PageHomePsychologistContentCard>
		</UIIntersectionObserver>
	</div>
</template>

<style scoped lang="scss">
.page-home-psychologist-content {
	&__background {
		transform: translateY(-25%);
	}

	&__cards {
		position: relative;
		display: flex;
		justify-content: center;

		gap: rem(24);

		&-card {
			flex: 1;

			@media #{$desktop} {
				max-width: rem(260);
			}
		}

		img {
			height: 100%;
			width: 100%;
		}
	}
}
</style>
