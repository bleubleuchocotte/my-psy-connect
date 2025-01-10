<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";
</script>

<template>
	<UIContainerHeading class="page-home-advantages-solo-heading">
		<template #icon>
			<IconCustomHeadset class="page-home-advantages-solo-heading__icon" />
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
			<UIButton class="page-home-advantages-solo-heading__cta">
				En savoir plus <LucideArrowUpRight stroke="var(--white)" stroke-width="2" />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.page-home-advantages-solo-heading {
	align-items: flex-start;
	text-align: left;

	&__icon {
		height: rem(80);
		width: rem(80);

		color: var(--green);
		align-self: flex-start;

		@media not #{$desktop} {
			height: rem(60);
			width: rem(60);
		}
	}

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
