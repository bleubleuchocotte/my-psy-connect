<script setup lang="ts">
import { LucideMessagesSquare, LucideUsers2 } from "lucide-vue-next";
</script>

<template>
	<main class="page-team">
		<PageHeader>
			<template #title>
				Nos psychologues
			</template>

			<template #svg-background>
				<IconCustomProfile />
			</template>

			<template #icons>
				<PageHeaderIcons>
					<template #icon-1>
						<LucideMessagesSquare stroke="var(--white)" stroke-width="2" />
					</template>
					<template #icon-2>
						<LucideUsers2 stroke="var(--white)" stroke-width="2" />
					</template>
				</PageHeaderIcons>
			</template>
		</PageHeader>

		<UISectionTextImage variant="dark-blue" direction="row-reverse">
			<template #title>
				Isé Guénon
			</template>
			<template #sub-title>
				Psychologue
			</template>
			<template #description>
				Isé Guénon est une psychologue passionnée, reconnue pour son approche innovante et son
				engagement envers le bien-être mental, particulièrement en milieu rural. Elle a su apporter une dimension unique à sa pratique en offrant des consultations psychologiques au plus près de ses patients, grâce à un cabinet mobile qui parcourt les régions éloignées. Cette approche originale
				fait d'elle une psychologue en phase avec les besoins spécifiques de ceux qui ont difficilement accès à
				des soins psychologiques de qualité.<br><br>
				Isé ne se contente pas de suivre les sentiers battus ; elle est une fervente défenseure de l'accessibilité
				des soins de santé mentale pour tous. Sa passion pour l'innovation la pousse également à offrir des
				consultations en ligne, permettant ainsi à un plus grand nombre de personnes de bénéficier de son
				expertise, quel que soit leur lieu de résidence.
			</template>
			<template #cta>
				<NuxtLink href="https://www.doctolib.fr/psychologue/fontanes/ise-guenon" class="reset-ua page-team__link">
					Doctolib <IconDoctolib />
				</NuxtLink>
			</template>
			<template #image>
				<img alt="" src="/images/team/guenon.png">
			</template>
		</UISectionTextImage>

		<ContainerFaq />
	</main>
</template>

<style scoped lang="scss">
.page-team {
	display: flex;
	flex-direction: column;
	gap: rem(24);

	&__link {
		width: fit-content;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: rem(10);

		background-color: var(--beige);
		color: var(--dark-blue);

		padding-inline: rem(25);
		height: rem(54);

		border-radius: 50px;
		@include font("cta");
	}
}
</style>
