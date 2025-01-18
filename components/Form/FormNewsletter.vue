<script setup lang="ts">
import { LucideSend } from "lucide-vue-next";

const request = ref<"idle" | "pending">("idle");
const state = ref<"idle" | "success" | "error">("idle");

const onSubmit: (_: Event) => void = async (e: Event) => {
	request.value = "pending";

	const target = e.target as HTMLFormElement;
	const formdata = new FormData(target);
	const body = {
		name: formdata.get("name"),
		phone: formdata.get("phone"),
		email: formdata.get("email"),
	};

	try {
		await $fetch("/api/email", {
			method: "POST",
			body,
		});

		state.value = "success";
	}
	catch {
		state.value = "error";
	}

	request.value = "idle";
};
</script>

<template>
	<form class="form-newsletter" @submit.prevent="onSubmit">
		<p class="form-newsletter__heading">
			Rejoignez la communauté MyPsy et recevez des ressources, invitations à des webinaires et news sur l'avancée de la plateforme.
		</p>

		<p v-if="state !== 'idle'" class="p" :state>
			<template v-if="state === 'error'">
				Oups, le mail n'as pas pu être envoyé :(
			</template>
			<template v-else>
				Le mail a bien été envoyé !
			</template>
		</p>

		<FormNewsletterInputs :disabled="state === 'success' || request === 'pending'" />

		<div class="form-newsletter__consent">
			<input id="consent" type="checkbox" name="consent" required :disabled="state === 'success' || request === 'pending'">
			<label for="consent" class="p-secondary" :disabled="state === 'success' || request === 'pending'">
				Oui, je consens à recevoir des communications par email et/ou SMS de la part de MyPsy concernant les actualités, services et événements.
			</label>
		</div>

		<UIButton type="submit" class="form-newsletter__submit" :disabled="state === 'success' || request === 'pending'">
			<span class="form-newsletter__submit-text" :data-hide="request === 'pending'">
				Envoyer mes coordonnées <LucideSend stroke="var(--beige)" stroke-width="2" />
			</span>

			<UISpinningLoader class="form-newsletter__submit-loading" :data-hide="request === 'idle'" />
		</UIButton>

		<p class="form-newsletter__legal">
			<small>
				En partageant vos coordonnées avec MyPsy, vous nous permettez de vous envoyer des informations pratiques sur le burnout, des invitations à nos prochains webinaires, ainsi que notre newsletter pour rester informé des actualités de la plateforme. Les adresses e-mail recueillies sont utilisées exclusivement à des fins informatives et ne seront jamais partagées ou revendues à des tiers. Nous garantissons la confidentialité et la sécurité de vos données.
			</small>
		</p>
	</form>
</template>

<style scoped lang="scss">
.form-newsletter {
	display: flex;
	flex-direction: column;
	gap: rem(24);

	padding: rem(40);

	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 0 1px var(--extra-light-green);

	backdrop-filter: var(--blur);

	border-radius: 10px;

	max-width: rem(448);

	@media not #{$desktop} {
		padding-inline: rem(20);
		padding-block: rem(30);
		max-width: unset;
	}

	p[state="success"] {
		color: var(--green);
		font-weight: 600;
	}

	p[state="error"] {
		color: red;
		font-weight: 600;
	}

	&__heading {
		font-weight: bold !important;
	}

	&__consent {
		display: flex;
		gap: rem(10);

		input[type="checkbox"] {
			flex-shrink: 0;
			cursor: pointer;
			width: rem(17);
			height: rem(17);
			background-color: var(--white);
			border-radius: 3px;
			box-shadow: 0 0 0 1px var(--fake-black);

			appearance: none;

			&:checked {
				background-color: var(--green);
			}

			&[disabled] {
				background-color: var(--medium-grey);
				cursor: not-allowed;
			}
		}

		label {
			cursor: pointer;
			color: var(--fake-black);

			&[disabled="true"] {
				font-style: italic;
				cursor: not-allowed;
			}
		}
	}

	&__submit {
		position: relative;
		width: fit-content;
		background-color: var(--green);
		color: var(--beige);

		[data-hide="true"] {
			visibility: hidden;
		}

		@media not #{$desktop} {
			width: 100%;
			justify-content: center;
		}

		&-text {
			display: flex;
			align-items: center;
			gap: rem(10);
		}

		&-loading {
			position: absolute;

			left: calc(50% - rem(12));
		}
	}

	&__legal {
		color: var(--fake-black);
	}
}
</style>
