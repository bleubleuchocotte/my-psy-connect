<script setup lang="ts">
import { LucideMail } from "lucide-vue-next";

const { y } = useWindowScroll();
</script>

<template>
	<header class="header">
		<div class="header__absolute">
			<IconLogoWithText class="header__absolute-logo" />

			<UIButton class="header__absolute-cta">
				<span>
					Rejoignez-nous
				</span>
				<LucideMail stroke="var(--beige)" stroke-width="2" />
			</UIButton>
		</div>

		<div class="header__navigation" :data-scroll="y > 10">
			<TheNavigationBar />
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	--padding-inline: 118;

	@media screen and (max-width: 1400px) {
		--padding-inline: 64;
	}
	@media screen and (max-width: 1200px) {
		--padding-inline: 16;
	}

	position: relative;

	@include wrapper(1440px, var(--padding-inline));

	&__absolute {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		left: 0;
		width: 100%;
		@include prop("top", 24);
		@include prop("padding-inline", var(--padding-inline));

		&-cta {
			background-color: var(--dark-blue);
			color: var(--beige);

			span {
				@media screen and (max-width: 1250px) {
					display: none;
				}
			}
		}
	}

	&__navigation {
		position: fixed;
		z-index: 999;

		left: 50%;
		transform: translateX(-50%);

		transition: top 0.4s ease-out;

		&[data-scroll="true"] {
			--top: 24;
		}
		&[data-scroll="false"] {
			--top: 48;
		}

		@include prop("top", var(--top));
	}
}
</style>
