<script setup lang="ts">
import { LucideMail, LucideX } from "lucide-vue-next";

defineEmits<{
	close: []
}>();
</script>

<template>
	<div class="header-mobile-menu-burger">
		<div class="header-mobile-menu-burger__controls">
			<IconLogoWithText class="header__absolute-logo" />
			<UIButton @click="$emit('close')">
				<LucideX stroke="var(--white)" stroke-width="2" />
			</UIButton>
		</div>

		<nav class="header-mobile-menu-burger__navigation">
			<NuxtLink class="h2 reset-ua" prefetch>
				Accueil
			</NuxtLink>
			<NuxtLink class="h2 reset-ua" prefetch>
				Service
			</NuxtLink>
			<NuxtLink class="h2 reset-ua" prefetch>
				Partenaires
			</NuxtLink>
			<NuxtLink class="h2 reset-ua" prefetch>
				Nos Psychologues
			</NuxtLink>
			<NuxtLink class="h2 reset-ua" prefetch>
				Ressources
			</NuxtLink>
			<NuxtLink class="h2 reset-ua" prefetch>
				À Propos
			</NuxtLink>
		</nav>

		<UIButton class="header-mobile-menu-burger__contact-us">
			Contactez-nous <LucideMail stroke="var(--beige)" stroke-width="2" />
		</UIButton>
	</div>
</template>

<style scoped lang="scss">
.header-mobile-menu-burger {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;

	width: 100vw;
	height: 100vh;

	padding: rem(20);

	background-color: var(--beige);

	&__controls {
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			justify-content: center;
			height: 54px;
			width: 54px;

			padding: 0 !important;

			background-color: var(--fake-black);
		}
	}

	&__navigation {
		display: flex;
		flex-direction: column;

		padding: rem(40);

		a {
			padding-block: rem(10);
		}
	}

	&__contact-us {
		width: 100%;
		justify-content: center;
		background-color: var(--dark-blue);
		color: var(--beige);
	}
}
</style>
