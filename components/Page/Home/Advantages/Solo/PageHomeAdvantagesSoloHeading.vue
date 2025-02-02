<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";
</script>

<template>
	<UIContainerHeading class="page-home-advantages-solo-heading">
		<template #icon>
			<IconCustomHeadset />
		</template>
		<template #title>
			<h2 class="page-home-advantages-solo-heading__title">
				Avantages des séances individuelles MyPsy
			</h2>
		</template>
		<template #text>
			<p class="page-home-advantages-solo-heading__text">
				Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement personnalisé et de qualité, adapté à vos besoins.<br>
				Notre équipe vous assure un soutien professionnel psychologie, avec une approche moderne et bienveillante.
			</p>
		</template>
		<template #cta>
			<NuxtLink class="page-home-advantages-solo-heading__cta reset-ua button" hover="transparent-dark-blue" href="/services">
				En savoir plus
				<LucideArrowUpRight stroke-width="2" />
			</NuxtLink>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.page-home-advantages-solo-heading {
	align-items: flex-start;
	text-align: left;

	&__title {
		align-self: flex-start;
	}

	&__text {
		color: var(--fake-black);
		@include font("p");
	}

	&__cta {
		color: var(--white);
		background-color: var(--dark-blue);
	}
}
</style>
