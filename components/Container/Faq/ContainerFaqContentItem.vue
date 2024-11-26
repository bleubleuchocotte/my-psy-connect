<script setup lang="ts">
import UIAccordion from "@/components/UI/UIAccordion.vue";

const accordion = ref <null | InstanceType<typeof UIAccordion>> (null);

const accordionState = computed(() => {
	if (!accordion.value) {
		return "open";
	}
	return accordion.value?.isOpen ? "open" : "close";
});
</script>

<template>
	<div>
		<UIAccordion ref="accordion" state-key="1" class="container-faq-content-item">
			<template #title>
				<div class="container-faq-content-item__title">
					<span>
						<slot name="title" />
					</span>
					<ContainerFaqContentItemButtonIcon :state="accordionState" />
				</div>
			</template>
			<template #content>
				<p class="container-faq-content-item__content">
					<slot name="content" />
				</p>
			</template>
		</UIAccordion>
	</div>
</template>

<style scoped lang="scss">
.container-faq-content-item {
	background-color: var(--beige);

	@include prop("width", 920);
	@include prop("border-radius", 10);

	&__title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
	}

	&__content {
		color: var(--fake-black);

		@include font("fs-14-500");
		@include prop("padding", 24);
		@include prop("padding-block", 10);
	}
}
</style>
