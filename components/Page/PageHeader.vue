<template>
	<div class="page-header">
		<div class="page-header__background" hide="mobile">
			<slot name="svg-background" />
		</div>

		<div class="page-header__heading">
			<h1 class="big">
				<slot name="title" />
			</h1>

			<slot name="icons" />
		</div>

		<p>
			<slot name="description" />
		</p>
	</div>
</template>

<style scoped lang="scss">
.page-header {
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: rem(40);

	background-color: var(--beige);

	padding-inline: rem(118);
	padding-top: rem(171);
	padding-bottom: rem(94);

	border-radius: 10px;

	overflow: hidden;

	@media not #{$desktop} {
		padding-inline: rem(20);
		padding-top: rem(118);
		padding-bottom: rem(80);
	}

	&__heading {
		z-index: 0;

		display: flex;
		align-items: center;
		gap: rem(10);

		h1 {
			color: var(--dark-blue);
		}
	}

	p {
		max-width: 75ch;
		text-wrap: balance;
	}

	&__background {
		position: absolute;
		right: 0;
		top: 25%;

		opacity: 0.2;
		color: var(--light-green);
		height: rem(800);
		width: rem(800);

		:deep(svg) {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
