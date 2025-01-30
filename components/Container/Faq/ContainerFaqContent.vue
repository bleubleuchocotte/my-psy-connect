<script setup lang="ts">
const questions = [
	{
		title: "Quels sont les prix des séances ?",
		content: "Les tarifs varient en fonction du praticien et de la durée des séances. Les prix sont clairement affichés sur chaque profil de psychologue.",
	},
	{
		title: "Quelle est la différence entre un psychologue, un psychothérapeute, et un psychanalyste ?",
		content: "Un psychologue est titulaire d'un diplôme d'État en psychologie. Un psychothérapeute est formé à des méthodes spécifiques de thérapie (EMDR, TCC, CNV, hypnothérapie…). Un psychanalyste est formé en psychanalyse, souvent selon l'approche freudienne ou lacanienne. MyPsy propose des professionnels certifiés dans chaque domaine pour répondre à vos besoins.",
	},
	{
		title: "Qu'est-ce que MyPsy et à qui s'adresse cette plateforme ?",
		content: "MyPsy est une plateforme dédiée au soutien psychologique, spécialement conçue pour les cadres,responsables, et employés confrontés au stress, au burnout, et à la souffrance au travail. Notre objectif est de vous accompagner vers un meilleur équilibre mental grâce à des solutions adaptées à vos besoins professionnels.",
	},
	{
		title: "Quelles sont les principales fonctionnalités proposées par MyPsy ?",
		content: "MyPsy offrira des séances de groupe en ligne mais aussi des consultations individuelles, toutes encadrées par des psychologues ou psychothérapeutes qualifiés. Les utilisateurs pourront également bénéficier d'une assistance juridique pour les problèmes liés au harcèlement au travail.",
	},
	{
		title: "Quand MyPsy sera-t-il opérationnel ?",
		content: "Le site MyPsy est actuellement en phase de présentation et de développement. Nous travaillons activement pour lancer la plateforme opérationnelle prochainement. Inscrivez-vous à notre newsletter pour être informé dès que MyPsy sera disponible.",
	},
	{
		title: "Comment puis-je rester informé des avancées de MyPsy ?",
		content: "Vous pouvez rester informé en vous inscrivant à notre newsletter. Vous recevrez des mises à jour régulières sur le lancement de la plateforme, les nouvelles fonctionnalités, et des conseils sur le bien-être mental.",
	},
	{
		title: "Comment savoir si je suis proche d'un burn-out ?",
		content: "Vous pouvez faire le test en ligne proposé par ANAPREV, expert de la souffrance au travail et des conditions de travail auprès des CSE, certifié Qualianor.\nhttps://www.souffrance-et-travail.com/travailleurs/auto-evaluation-epuisement-professionnel/",
	},
	{
		title: "Comment puis-je savoir si MyPsy est fait pour moi ?",
		content: "MyPsy s'adresse à toute personne qui ressent le besoin d'un soutien psychologique face aux défis du monde professionnel. Que vous soyez en pleine phase de burnout, que vous cherchiez à prévenir le stress, ou que vous ayez besoin d'un accompagnement juridique, MyPsy sera là pour vous offrir des solutions adaptées. N'hésitez pas à vous inscrire à notre newsletter pour en savoir plus et découvrir si MyPsy répond à vos besoins.",
	},
];

const isInViewport = ref(false);
</script>

<template>
	<UIContainerContent class="container-faq-content">
		<template #content>
			<UIIntersectionObserver class="container-faq-content__content" @is-visible="isInViewport = $event">
				<ContainerFaqContentItem v-for="(item, index) in questions" :key="item.title" :position="index + 1" animation="fade-in-translate-in-from-bottom" :viewport="isInViewport">
					<template #title>
						{{ item.title }}
					</template>
					<template #content>
						{{ item.content }}
					</template>
				</ContainerFaqContentItem>
			</UIIntersectionObserver>
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
