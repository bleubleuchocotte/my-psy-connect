<script setup lang="ts">
type ComponentProps = {
	state: "open" | "close"
};

defineProps<ComponentProps>();
</script>

<template>
	<IconAccordionOpen v-if="state === 'open'" />
	<IconAccordionClose v-else />
</template>
