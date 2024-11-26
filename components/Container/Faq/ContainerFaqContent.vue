<script setup lang="ts">
const questions = [
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Quels sont les prix des séances ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
];
</script>

<template>
	<UIContainerContent class="container-faq-content">
		<template #content>
			<div class="container-faq-content__content">
				<ContainerFaqContentItem v-for="(item) in questions" :key="item.title">
					<template #title>
						{{ item.title }}
					</template>
					<template #content>
						{{ item.content }}
					</template>
				</ContainerFaqContentItem>
			</div>
		</template>
	</UIContainerContent>
</template>

<style scoped lang="scss">
.container-faq-content {
	&__content {
		display: flex;
		flex-direction: column;
		@include gap(12);
	}
}
</style>
