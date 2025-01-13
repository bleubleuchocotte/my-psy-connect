<script setup lang="ts">
import { LucideHeadset } from "lucide-vue-next";
</script>

<template>
	<main class="page-services">
		<PageHeader>
			<template #title>
				Nos services
			</template>

			<template #svg-background>
				<IconCustomPuzzle />
			</template>

			<template #icons>
				<PageHeaderIcons>
					<template #icon-1>
						<IconCustomChat />
					</template>
					<template #icon-2>
						<LucideHeadset stroke="var(--white)" stroke-width="2" />
					</template>
				</PageHeaderIcons>
			</template>
		</PageHeader>

		<UISectionTextImage variant="dark-blue" direction="row-reverse">
			<template #icon>
				<IconCustomPuzzle />
			</template>
			<template #title>
				Séances de groupe MyPsy : solidarité et soutien collectif
			</template>
			<template #description>
				Les séances de groupe, un avantage distinctif de MyPsy, permettent une forme de thérapie collective unique. Ce cadre encourage les échanges en brisant l'isolement et favorisant la solidarité entre participants.<br><br>
				Encadrés par des psychologues expérimentés, ces groupes offrent un accompagnement dans la durée, permettant à chacun de partager ses expériences et de trouver un soutien collectif.<br><br>
				Les groupes sont homogènes, organisés selon des critères tels que l'âge, le secteur d'activité, ou le stade du burn-out, garantissant des échanges enrichissants avec des personnes traversant des épreuves similaires.<br><br>
				Cette approche vous apporte une reconnaissance et un apaisement précieux, en vous connectant avec des personnes qui vous comprennent, pour que vous puissiez, ensemble, trouver des solutions et regagner un sentiment de bien-être partagé.
			</template>
			<template #image>
				<img alt="" src="/images/services/group.png">
			</template>
		</UISectionTextImage>

		<UISectionTextImage variant="light-green">
			<template #icon>
				<IconCustomChat />
			</template>
			<template #title>
				Séances Individuelles sur MyPsy
			</template>
			<template #description>
				MyPsy propose des séances individuelles conçues pour aller au-delà d'un suivi psychologique classique. Chaque patient est encouragé à devenir acteur de sa propre santé mentale, avec un plan personnalisé et des actions concrètes proposées par le psychologue pour renforcer son autonomie et favoriser des améliorations tangibles.<br><br>
				Nos professionnels sont spécifiquement formés et sensibilisés aux problématiques de souffrance au travail. Ils sont en mesure d'apporter des solutions concrètes adaptées aux réalités du monde professionnel.<br><br>
				Grâce à des vidéos de présentation de nos psychologues, vous pourrez aisément choisir le professionnel qui vous correspond le mieux et ainsi démarrer au plus tôt une thérapie personnalisée.
			</template>
			<template #image>
				<img alt="" src="/images/services/solo.png">
			</template>
		</UISectionTextImage>

		<PageServicesWebinaires />

		<PageHomeAction />

		<ContainerFaq />
	</main>
</template>

<style scoped lang="scss">
.page-services {
	display: flex;
	flex-direction: column;

	gap: rem(24);
}
</style>
