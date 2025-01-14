<template>
	<div class="form-newsletter-inputs">
		<div class="form-newsletter-inputs__start">
			<input id="name" type="text" name="name" placeholder="Prenom Nom" class="reset-ua">
			<UIPhoneNumber />
		</div>
		<input id="email" type="email" name="email" placeholder="Adresse mail" class="reset-ua">
	</div>
</template>

<style scoped lang="scss">
.form-newsletter-inputs {
	display: flex;
	flex-direction: column;

	gap: rem(15);

	&__start {
		display: flex;
		gap: rem(15);

		@media screen and (max-width: 1200px) {
			flex-direction: column;
		}

		input {
			flex: 1;
			width: 100%;
			min-width: calc(100% / 2);

			@media screen and (max-width: 1200px) {
				flex: unset;
			}
		}
	}

	input {
		padding-left: rem(20);
		background-color: var(--white);
		border-radius: 50px;
		box-shadow: 0 0 0 1px var(--white);

		height: rem(40);

		&::placeholder {
			color: var(--fake-black);
			@include font("p");
		}
	}
}
</style>
