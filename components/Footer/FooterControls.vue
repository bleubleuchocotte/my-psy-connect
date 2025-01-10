<script setup lang="ts">
import { LucideMail, LucideSmilePlus } from "lucide-vue-next";
</script>

<template>
	<div class="footer-controls">
		<UIButton class="footer-controls__join">
			Rejoignez-nous <LucideSmilePlus stroke="var(--white)" stroke-width="2" />
		</UIButton>
		<UIButton class="footer-controls__ask">
			Une question ? <LucideMail stroke="var(--dark-blue)" stroke-width="2" />
		</UIButton>
	</div>
</template>

<style scoped lang="scss">
.footer-controls {
	display: flex;
	gap: rem(24);

	@media not #{$desktop} {
		flex-direction: column;

		button {
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
