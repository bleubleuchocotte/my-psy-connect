<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";

const isDesktop = useMediaQuery("(min-width: 1024px)", { ssrWidth: 768 });
</script>

<template>
	<div class="page-home-trust-content">
		<NuxtMarquee class="page-home-trust-content__marquee" :auto-fill="true" hide="mobile" tabindex="-1">
			<div class="page-home-trust-content__marquee-item">
				<IconPartnerLaFrenchTech v-if="isDesktop" />
				<IconPartnerAgefiph />
				<IconPartnerCCI />
			</div>
		</NuxtMarquee>

		<div class="page-home-trust-content__fake-marquee" hide="mobile" />

		<div hide="desktop" class="page-home-trust-content__mobile">
			<IconPartnerLaFrenchTech />
			<IconPartnerAgefiph />
			<IconPartnerCCI />
		</div>

		<NuxtLink class="page-home-trust-content__cta reset-ua button" hover="dark-blue" href="/partenaires">
			En savoir plus sur nos partenaires
			<LucideArrowUpRight stroke-width="2" />
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
.page-home-trust-content {
	display: flex;
	flex-direction: column;
	align-items: center;

	@include gap(60);

	@media not #{$desktop} {
		gap: rem(80);
	}

	&__marquee {
		position: absolute;

		&-item {
			display: flex;
			@include gap(94);
			@include prop("margin-left", 94);
		}
	}

	&__fake-marquee {
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		@include prop("height", 40);
	}

	&__mobile {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: rem(60);
	}

	&__cta {
		color: var(--black);
		background: transparent;
		border: 2px solid;
	}
}
</style>
