<template>
	<div class="footer-legal-links">
		<NuxtLink prefetch class="p reset-ua" href="/mentions-legales">
			Mentions légales
		</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
.footer-legal-links {
	display: flex;
	align-items: center;
	color: var(--dark-blue);
	@include gap(20);

	@media not #{$desktop} {
		flex-direction: column;
	}
}
</style>
