<script setup lang="ts">
import { LucideArrowUpRight } from "lucide-vue-next";
</script>

<template>
	<UIContainerHeading class="page-home-psychologist-heading">
		<template #icon>
			<IconCustomProfile />
		</template>
		<template #title>
			<h2 class="h1">
				Nos psychologues
			</h2>
		</template>
		<template #text>
			<p class="page-home-psychologist-heading__text">
				Chez My psy, nous réunissons des psychologues, sensibles et formés<br>
				à la souffrance au travail et au burn-out.
			</p>
		</template>
		<template #cta>
			<UIButton class="page-home-psychologist-heading__cta">
				Découvrir <LucideArrowUpRight stroke="var(--white)" stroke-width="2" />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.page-home-psychologist-heading {
	&__text {
		color: var(--fake-black);
	}
	&__cta {
		color: var(--white);
		background-color: var(--green);
	}
}
</style>
