<script setup lang="ts">
useSeoMeta({
	// Flat
	title: "Formulaire MyPsy - Accédez à nos solutions pour le bien-être au travail",
	description: "Inscrivez-vous via le formulaire MyPsy pour accéder à nos solutions dédiées au bien-être mental : séances individuelles , webinaires et ressources adaptées à vos besoins.",

	// OG
	ogTitle: "Formulaire MyPsy - Accédez à nos solutions pour le bien-être au travail",
	ogDescription: "Inscrivez-vous via le formulaire MyPsy pour accéder à nos solutions dédiées au bien-être mental : séances individuelles , webinaires et ressources adaptées à vos besoins.",

	// Twitter
	twitterTitle: "Formulaire MyPsy - Accédez à nos solutions pour le bien-être au travail",
	twitterDescription: "Inscrivez-vous via le formulaire MyPsy pour accéder à nos solutions dédiées au bien-être mental : séances individuelles , webinaires et ressources adaptées à vos besoins.",
});
</script>

<template>
	<main class="page page-formulaire">
		<PageFormHero />
		<PageHomePostHero class="page-formulaire__post-hero" />
		<PageAboutTestimony2 class="page-formulaire__testimony" />
		<ContainerFaq />
	</main>
</template>

<style scoped lang="scss">
.page-formulaire {
	&__testimony {
		background-color: var(--white);
	}
	&__post-hero {
		@media not #{$desktop} {
			padding-bottom: 0;
		}
	}
}
</style>
