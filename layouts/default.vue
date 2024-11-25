<template>
	<UIWrapper class="default-layout">
		<TheHeader />
		<slot />
		<TheFooter />
	</UIWrapper>
</template>

<style scoped lang="scss">
.default-layout {
	@include prop("padding-block", 24);
}
</style>
