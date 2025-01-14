<script setup lang="ts">
import { LucideMail, LucideSmilePlus } from "lucide-vue-next";

const route = useRoute();
</script>

<template>
	<div class="footer-controls">
		<NuxtLink v-if="route.name !== 'formulaire'" class="footer-controls__join reset-ua button" href="/formulaire">
			Rejoignez-nous <LucideSmilePlus stroke="var(--white)" stroke-width="2" />
		</NuxtLink>

		<NuxtLink class="footer-controls__ask reset-ua button" href="mailto:quentin.mypsy@gmail.com">
			Une question ? <LucideMail stroke="var(--dark-blue)" stroke-width="2" />
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
.footer-controls {
	display: flex;
	gap: rem(24);

	@media not #{$desktop} {
		flex-direction: column;

		a {
			width: 100%;
			justify-content: center;
		}
	}

	&__join {
		color: var(--white);
		background-color: var(--dark-blue);
	}

	&__ask {
		background-color: transparent;
		color: var(--dark-blue);
		box-shadow: 0 0 0 2px var(--dark-blue);
	}
}
</style>
