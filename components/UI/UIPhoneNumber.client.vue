<script setup>
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
</script>

<template>
	<IntlTelInput
		:options="{
			initialCountry: 'fr',
		}"
		class="reset-ua"
	/>
</template>
