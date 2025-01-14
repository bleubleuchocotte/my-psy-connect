export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const runtime = useRuntimeConfig();

	const data = {
		service_id: runtime.emailjsServiceId,
		template_id: runtime.emailjsTemplateId,
		user_id: runtime.emailjsPublicKey,
		accessToken: runtime.emailjsPrivateKey,

		template_params: body,
	};

	const headers = new Headers({
		"content-type": "application/json",
	});

	return await $fetch("https://api.emailjs.com/api/v1.0/email/send", {
		method: "POST",
		body: data,
		headers,
	});
});
