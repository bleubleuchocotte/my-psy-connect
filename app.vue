<script setup lang="ts">
const { origin } = useRequestURL();

updateSiteConfig({
	name: "MyPsyConnect",
	url: origin,
});

useHead({
	// Toutes les options seront incluses dans toutes les pages
	title: "MyPsyConnect",
	htmlAttrs: {
		lang: "fr",
	},
	link: [{
		rel: "icon",
		type: "image/png",
		href: `${origin}/favicon-32x32.ico`,
	}],
});

useSeoMeta({
	// Flat
	title: "MyPsyConnect",
	description: "",
	applicationName: "",
	themeColor: "",
	creator: "Bleubleu chocotte",
	charset: "utf-8",
	viewport: "width=device-width, initial-scale=1.0",

	// OG
	ogUrl: "",
	ogType: "website",
	ogLocale: "",
	ogTitle: "",
	ogDescription: "",
	ogImage: {
		url: `${origin}/images/og-image.png`, // Must be an absolute path,
		type: "image/png",
	},

	// Twitter
	twitterTitle: "",
	twitterDescription: "",
	twitterImage: {
		url: `${origin}/images/og-image.png`, // Must be an absolute path,
		type: "image/png",
	},
	twitterCard: "summary_large_image",
});
</script>

<template>
	<NuxtLoadingIndicator :throttle="0" color="repeating-linear-gradient(90deg, var(--green) 0%, var(--dark-blue) 100%, var(--green) 200%)" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
