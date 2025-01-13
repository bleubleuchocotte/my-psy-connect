<template>
	<section class="page-ressources-columns">
		<PageRessourcesColumnsStart class="page-ressources-columns__start" />
		<PageRessourcesColumnsEnd class="page-ressources-columns__end" />
	</section>
</template>

<style scoped lang="scss">
.page-ressources-columns {
	display: flex;
	gap: rem(24);
	padding-bottom: rem(94);

	@media not #{$desktop} {
		flex-direction: column;
		gap: rem(20);
	}

	&__start,
	&__end {
		display: flex;
		flex-direction: column;
		gap: rem(24);
		flex: 1;
	}
}
</style>
