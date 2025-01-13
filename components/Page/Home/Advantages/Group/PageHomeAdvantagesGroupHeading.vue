<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";
</script>

<template>
	<UIContainerHeading class="page-home-advantages-heading">
		<template #icon>
			<IconCustomPuzzle />
		</template>
		<template #title>
			<h2 class="page-home-advantages-heading__title">
				Avantages des<br>séances de groupe MyPsy
			</h2>
		</template>
		<template #text>
			<p class="page-home-advantages-heading__text">
				Chez MyPsy, nous réunissons des experts pour vous offrir un accompagnement pour vous offrir un accompagnement interactif avec une écoute, une compréhension et un soutien mutuel.
			</p>
		</template>
		<template #cta>
			<UIButton class="page-home-advantages-heading__cta">
				En savoir plus <LucideArrowUpRight />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.page-home-advantages-heading {
	&__title,
	&__text {
		align-self: flex-start;
		color: var(--white);
	}

	&__text {
		@include font("p");
	}

	&__cta {
		color: var(--white);
		background-color: var(--green);
	}
}
</style>
