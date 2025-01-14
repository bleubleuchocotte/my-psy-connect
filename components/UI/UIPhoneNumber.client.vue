<script setup lang="ts">
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";

defineProps<{ disabled: boolean }>();

const target = ref<{ input: HTMLInputElement } | null>(null);

const errorMap = [
	"Invalid number",
	"Invalid country code",
	"Too short",
	"Too long",
	"Invalid number",
];

const errorCode = ref<number | null>(null);

const isValid = ref<boolean | null>(null);
const number = ref<string | null>(null);

function handleSubmit() {
	const input = target.value?.input;

	if (!isValid.value) {
		const errorMessage = errorMap[errorCode.value || 0] || "Invalid number";
		input?.setCustomValidity(errorMessage);
	}
	else {
		input?.setCustomValidity("");
	}
}

watch(number, handleSubmit);
</script>

<template>
	<IntlTelInput
		ref="target"
		:options="{
			initialCountry: 'fr',
		}"
		class="reset-ua"
		required
		:disabled
		name="phone"
		@change-number="number = $event"
		@change-validity="isValid = $event"
		@change-error-code="errorCode = $event"
	/>
</template>
