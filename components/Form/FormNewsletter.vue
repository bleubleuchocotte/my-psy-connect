<script setup lang="ts">
import { LucideSend } from "lucide-vue-next";

const onSubmit: (_: Event) => void = (e: Event) => {
	console.warn(e);
};
</script>

<template>
	<form class="form-newsletter" @submit.prevent="onSubmit">
		<p class="form-newsletter__heading">
			Rejoignez la communauté MyPsy et recevez des ressources, invitations à des webinaires et news sur l'avancée de la plateforme.
		</p>

		<FormNewsletterInputs />

		<div class="form-newsletter__consent">
			<input id="consent" type="checkbox" name="consent">
			<label for="consent">
				Oui, je consens à recevoir des emails
			</label>
		</div>

		<UIButton type="submit" class="form-newsletter__submit">
			Envoyer mes coordonnées <LucideSend stroke="var(--beige)" stroke-width="2" />
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

	&__heading {
		font-weight: bold !important;
	}

	&__consent {
		display: flex;
		gap: rem(10);

		input[type="checkbox"] {
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
		}

		label {
			cursor: pointer;
			color: var(--fake-black);
			@include font("p");
		}
	}

	&__submit {
		width: fit-content;
		background-color: var(--green);
		color: var(--beige);
	}

	&__legal {
		color: var(--fake-black);
	}
}
</style>
