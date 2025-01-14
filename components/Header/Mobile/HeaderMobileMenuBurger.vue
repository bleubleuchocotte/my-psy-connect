<script setup lang="ts">
import { LucideMail, LucideX } from "lucide-vue-next";

defineEmits<{
	close: []
}>();

const links: {
	href: string
	name: string
}[] = [
	{
		href: "/",
		name: "Accueil",
	},
	{
		href: "/services",
		name: "Services",
	},
	{
		href: "/partenaires",
		name: "Partenaires",
	},
	{
		href: "/equipe",
		name: "Nos Psychologues",
	},
	{
		href: "/ressources",
		name: "Ressources",
	},
	{
		href: "/a-propos",
		name: "À Propos",
	},
];
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
			<NuxtLink
				v-for="link in links" :key="link.href"
				class="h2 reset-ua" prefetch :href="link.href" @click="$emit('close')"
			>
				{{ link.name }}
			</NuxtLink>
		</nav>

		<NuxtLink class="header-mobile-menu-burger__contact-us reset-ua button" href="mailto:quentin.mypsy@gmail.com">
			Contactez-nous <LucideMail stroke="var(--beige)" stroke-width="2" />
		</NuxtLink>
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
