<template>
	<div class="ui-container-heading">
		<div class="ui-container-heading__content">
			<div class="ui-container-heading__content-icon">
				<slot name="icon" />
			</div>
			<slot name="title" />
			<slot name="text" />
		</div>
		<slot name="cta" />
	</div>
</template>

<style scoped lang="scss">
.ui-container-heading {
	align-self: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	text-wrap: balance;

	@include gap(40);

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;

		@include gap(24);

		&-icon {
			width: 100%;

			color: var(--green);

			align-self: flex-start;

			:deep(svg.center) {
				margin: 0 auto;
			}

			:deep(svg:not(.center)) {
				height: rem(80);
				width: rem(80);

				@media not #{$desktop} {
					height: rem(60);
					width: rem(60);
				}
			}
		}
	}
}
</style>
