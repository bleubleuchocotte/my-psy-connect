<template>
	<div class="container-team-content-card">
		<div class="container-team-content-card__avatar">
			<slot name="avatar" />
		</div>
		<div class="container-team-content-card__id">
			<h3>
				<slot name="name" />
			</h3>
			<div class="container-team-content-card__id-job">
				<p>
					<slot name="job" />
				</p>
			</div>
		</div>

		<div class="container-team-content-card__bar">
			<p class="p-secondary ">
				<slot name="bio" />
			</p>

			<div class="container-team-content-card__bar-link">
				<NuxtLink href="/equipe" class="p">
					en savoir plus
				</NuxtLink>
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
	gap: rem(24);

	text-align: center;

	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid var(--extra-light-green);
	border-radius: 10px;

	backdrop-filter: var(--blur);

	padding: rem(40);

	&__avatar {
		overflow: hidden;
		border-radius: 100%;

		width: rem(80);
		height: rem(80);
	}

	&__id {
		display: flex;
		flex-direction: column;
		gap: rem(5);

		&-job {
			color: var(--green);
			height: rem(42);
		}
	}

	&__bar {
		display: flex;
		flex-direction: column;
		gap: rem(10);

		p {
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 4;
			color: var(--fake-black);
		}

		&-link {
			a {
				color: var(--green);
				text-decoration: underline;
			}
		}
	}
}
</style>
