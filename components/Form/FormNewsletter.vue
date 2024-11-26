<script setup lang="ts">
type ComponentProps = {
	variant?: "default" | "footer"
};

withDefaults(defineProps<ComponentProps>(), {
	variant: "default",
});

const onSubmit: (_: Event) => void = (e: Event) => {
	console.warn(e);
};
</script>

<template>
	<form class="form-newsletter" :data-variant="variant" @submit.prevent="onSubmit">
		<input type="text" placeholder="S'inscrire à la newsletter" class="form-newsletter__input">
		<UIButton class="form-newsletter__submit" type="submit">
			Envoyer <LucideSend color="var(--beige)" />
		</UIButton>
	</form>
</template>

<style scoped lang="scss">
.form-newsletter {
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: var(--white);

	@include prop("border-radius", 50);

	&__input {
		border: unset;

		@include prop("margin-inline", 20);
	}

	&__submit {
		color: var(--beige);
		background-color: var(--green);
	}

	&[data-variant="footer"] {
		.form-newsletter {
			filter: var(--drop-shadow);
			@include padding(5);
			&__submit {
				background-color: var(--dark-blue);
			}
		}
	}
}
</style>
