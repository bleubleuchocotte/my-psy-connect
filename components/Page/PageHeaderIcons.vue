<template>
	<div class="page-header-icons">
		<div class="page-header-icons__left">
			<slot name="icon-1" />
		</div>
		<div class="page-header-icons__right">
			<slot name="icon-2" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.page-header-icons {
	position: relative;

	&__left,
	&__right {
		display: flex;
		align-items: center;
		justify-content: center;

		color: var(--white);
		height: rem(82);
		width: rem(82);

		padding: rem(15);

		border-radius: 100%;

		@media not #{$desktop} {
			height: rem(40);
			width: rem(40);

			padding: rem(5);
		}

		:deep(svg) {
			height: 100%;
			width: 100%;
		}
	}

	&__left {
		background-color: var(--dark-blue);
	}
	&__right {
		position: absolute;
		right: -50%;
		top: 0;
		background-color: var(--light-green);
	}
}
</style>
