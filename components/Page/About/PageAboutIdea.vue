<template>
	<section class="page-about-idea">
		<div class="page-about-idea__start">
			<NuxtImg alt="" src="/images/about/french-tech-2.png" loading="lazy" preload />
			<NuxtImg alt="" src="/images/about/french-tech-1.png" loading="lazy" preload />
		</div>

		<div class="page-about-idea__end">
			<div class="page-about-idea__end-content">
				<IconCustomChat />
				<h2 class="h1">
					L'idee de Mypsy s'est nourrie aussi de son entourage
				</h2>
				<p>
					Le burnout, de plus en plus fréquent mais encore souvent tabou, a touché des proches de Quentin. Il a constaté à quel point il était difficile d'obtenir un soutien adapté et de qualité dans ces moments de vulnérabilité. Ces expériences personnelles et les défis rencontrés par ses proches ont renforcé sa détermination à créer une plateforme différente, axée sur les groupes de soutien encadrés par des professionnels.<br><br>
					Fort de cette vision, Quentin a obtenu une subvention de la Chambre de Commerce de Grenoble. Il a également été lauréat de la French Tech Tremplin de Grenoble et a participé à son programme en étant accompagné pendant plusieurs mois par des professionnels du monde de l'entreprise pour l'aider à structurer un projet solide et opérationnel. Il a également travaillé avec des avocats et des psychologues pour affiner sa plateforme.
				</p>
			</div>

			<div class="page-about-idea__end-founder">
				<NuxtImg alt="" src="/images/avatar/joubert.png" loading="lazy" preload />
				<div class="page-about-idea__end-founder-info">
					<div>
						<h3>Quentin Joubert</h3>
						<p>Fondateur de MyPsy</p>
					</div>
					<NuxtLink class="reset-ua button" href="https://www.linkedin.com/in/quentin-joubert-marketing-commercial/">
						Linkedin <IconLinkedIn />
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.page-about-idea {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: rem(60);

	padding-inline: rem(118);
	padding-block: rem(94);

	border-radius: 10px;

	background-color: var(--dark-blue);

	text-wrap: balance;

	@media not #{$desktop} {
		flex-direction: column;
		padding: rem(20);
		padding-bottom: rem(80);
		gap: rem(40);
	}

	&__start {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: rem(40);

		@media not #{$desktop} {
			width: 100%;

			gap: rem(20);
		}

		img {
			border-radius: 10px;
		}
	}

	&__end {
		flex: 0.75;
		display: flex;
		flex-direction: column;
		gap: rem(60);

		@media not #{$desktop} {
			gap: rem(40);
		}

		&-content {
			display: flex;
			flex-direction: column;
			gap: rem(24);

			color: var(--white);

			@media not #{$desktop} {
				gap: rem(20);
			}

			svg {
				height: rem(80);
				width: rem(80);
				color: var(--green);

				@media not #{$desktop} {
					height: rem(60);
					width: rem(60);
				}
			}
		}

		&-founder {
			display: flex;
			gap: rem(24);

			@media not #{$desktop} {
				gap: rem(21);
			}

			img {
				border-radius: 10px;
			}

			&-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				& > div {
					display: flex;
					flex-direction: column;
					gap: rem(10);
				}

				h3 {
					color: var(--white);
				}

				p {
					color: var(--green);
				}

				a {
					background-color: var(--white);
					color: var(--dark-blue);
				}
			}
		}
	}
}
</style>
