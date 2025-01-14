export default defineNuxtConfig({
	compatibilityDate: "2024-08-29",
	devtools: { enabled: true },

	modules: [
		"@vueuse/nuxt",
		"@nuxtjs/seo",
		"@nuxt/image",
		"nuxt-marquee",
	],

	css: ["@/assets/styles/reset.css", "@/assets/styles/_base-default.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
					additionalData: `@use "/assets/styles/settings/main.scss" as *;`,

				},
			},
		},
	},

	runtimeConfig: {
		emailjsPublicKey: "",
		emailjsPrivateKey: "",
		emailjsServiceId: "",
		emailjsTemplateId: "",
	},
});
