<template>
	<section class="container page-form-hero">
		<FormNewsletter />
		<NuxtImg preload alt="" src="/images/about/french-tech-2.png" loading="lazy" />
	</section>
</template>

<style scoped lang="scss">
.page-form-hero {
	display: flex;
	justify-content: center;
	gap: rem(24);
	background-color: var(--beige);
	padding-top: rem(171);

	@media not #{$desktop} {
		flex-direction: column;
		gap: rem(40);
		padding-top: rem(118);
	}

	img {
		max-width: rem(440);
		object-fit: cover;
		border-radius: 10px;

		@media not #{$desktop} {
			max-width: unset;
		}
	}
}
</style>
