<script setup lang="ts">
const isInViewport = ref(false);
</script>

<template>
	<div class="page-home-psychologist-content">
		<UIBackgroundFixedSVG path="type-1" class="page-home-psychologist-content__background" hide="mobile" />

		<UIIntersectionObserver class="page-home-psychologist-content__cards" @is-visible="isInViewport = $event">
			<PageHomePsychologistContentCard class="page-home-psychologist-content__cards-card" :viewport="isInViewport" position="1">
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
			--position: 1;
			&[position="2"] {
				--position: 2;
			}
			&[position="3"] {
				--position: 3;
			}
			&[position="4"] {
				--position: 4;
			}

			transition:
				opacity linear 0.4s 0.2s,
				transform ease-out 0.4s calc(0.1s * var(--position));

			&[viewport="false"] {
				opacity: 0;
				transform: translateY(50px);
			}
			&[viewport="true"] {
				opacity: 1;
				transform: translateY(0px);
			}

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
