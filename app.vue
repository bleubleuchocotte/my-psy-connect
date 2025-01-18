<script setup lang="ts">
const { origin } = useRequestURL();

const isDark = usePreferredDark();

if (import.meta.server) {
	updateSiteConfig({
		name: "MyPsyConnect",
		url: origin,
	});
}

useHead({
	// Toutes les options seront incluses dans toutes les pages
	title: "MyPsyConnect",
	titleTemplate: "%s",
	htmlAttrs: {
		lang: "fr",
	},
	link: [
		{
			rel: "icon",
			type: "image/svg+xml",
			href: isDark.value ? `${origin}/favicon/dark-100x100.svg` : `${origin}/favicon/light-100x100.svg`,
		},
	],
});

useSeoMeta({
	// Flat
	title: "MyPsy - Soutien mental et bien-être au travail",
	description: "Découvrez MyPsy : séances individuelles, groupes de soutien et webinaires dédiés au bien-être mental et à la gestion du burn-out.",
	applicationName: "MyPsyConnect",
	themeColor: "#F1F0E9", // var(--beige)
	creator: "Bleubleu chocotte",
	charset: "utf-8",
	viewport: "width=device-width, initial-scale=1.0",

	// OG
	ogUrl: origin,
	ogType: "website",
	ogLocale: "fr",
	ogTitle: "MyPsy - Soutien mental et bien-être au travail",
	ogDescription: "Découvrez MyPsy : séances individuelles, groupes de soutien et webinaires dédiés au bien-être mental et à la gestion du burn-out.",
	ogImage: {
		url: `${origin}/images/og-image.png`, // Must be an absolute path,
		type: "image/png",
	},

	// Twitter
	twitterTitle: "MyPsy - Soutien mental et bien-être au travail",
	twitterDescription: "Découvrez MyPsy : séances individuelles, groupes de soutien et webinaires dédiés au bien-être mental et à la gestion du burn-out.",
	twitterImage: {
		url: `${origin}/images/og-image.png`, // Must be an absolute path,
		type: "image/png",
	},
	twitterCard: "summary_large_image",
});
</script>

<template>
	<UILenis>
		<NuxtLoadingIndicator :throttle="0" color="repeating-linear-gradient(90deg, var(--green) 0%, var(--dark-blue) 100%, var(--green) 200%)" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UILenis>
</template>
