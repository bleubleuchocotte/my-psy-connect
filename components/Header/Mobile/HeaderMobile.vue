<script setup lang="ts">
import { LucideMail, LucideMenu } from "lucide-vue-next";

const isMenuBurgerOpen = ref(false);

watch(isMenuBurgerOpen, () => {
	if (isMenuBurgerOpen.value) {
		document.body.style.overflow = "hidden";
	}
	else {
		document.body.style.overflow = "auto";
	}
});
</script>

<template>
	<header class="header-mobile">
		<div class="header-mobile__container">
			<IconLogoWithText class="header__absolute-logo" />

			<div class="header-mobile__container-controls">
				<UIButton>
					<LucideMail stroke="var(--beige)" stroke-width="2" />
				</UIButton>

				<UIButton @click="isMenuBurgerOpen = true">
					<LucideMenu stroke="var(--dark-blue)" stroke-width="2" />
				</UIButton>
			</div>
		</div>

		<HeaderMobileMenuBurger v-show="isMenuBurgerOpen" @close="isMenuBurgerOpen = false" />
	</header>
</template>

<style lang="scss" scoped>
.header-mobile {
	position: relative;

	&__container {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;

		padding: rem(20);

		&-controls {
			display: flex;

			gap: rem(10);

			button {
				justify-content: center;

				width: 54px;
				height: 54px;

				padding: 0 !important;

				&:first-of-type {
					background-color: var(--dark-blue);
				}

				&:last-of-type {
					background-color: var(--white);
				}
			}
		}
	}
}
</style>
