<template>
	<div class="container-team-content-card">
		<div class="container-team-content-card__avatar">
			<slot name="avatar" />
		</div>
		<div class="container-team-content-card__id">
			<slot name="name" />
			<div class="container-team-content-card__id-job">
				<slot name="job" />
			</div>
		</div>

		<div class="container-team-content-card__bar">
			<slot name="bio" />
			<div class="container-team-content-card__bar-link">
				<slot name="link" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container-team-content-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;

	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid var(--extra-light-green);

	backdrop-filter: var(--blur);

	@include prop("border-radius", 10);
	@include gap(24);
	@include padding(40);

	&__avatar {
		overflow: hidden;
		border-radius: 100%;

		width: rem(80);
		height: rem(80);
	}

	&__id {
		display: flex;
		flex-direction: column;

		@include gap(5);

		&-job {
			color: var(--green);
			@include prop("height", 42);
		}
	}

	&__bar {
		display: flex;
		flex-direction: column;

		@include gap(10);

		&-link {
			color: var(--green);
			text-decoration: underline;
		}
	}
}
</style>
