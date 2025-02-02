<script setup lang="ts">
import { LucideLightbulb, LucideListTodo, LucideNewspaper, LucideTvMinimalPlay } from "lucide-vue-next";
</script>

<template>
	<div>
		<PageRessourcesColumnsItem href="https://www.souffrance-et-travail.com/travailleurs/auto-evaluation-epuisement-professionnel/">
			<template #icon>
				<LucideListTodo stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				Questionnaire d'auto-évaluation du burn-out
			</template>
			<template #description>
				Ce test en ligne permet aux utilisateurs d'évaluer leur niveau d'épuisement professionnel en répondant à une série de questions. Il aide à identifier les signes précurseurs du burn-out et à prendre conscience de sa situation personnelle.
			</template>
			<template #logo>
				<IconRessourcesSxT />
			</template>
			<template #cta>
				Passer le test
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem
			href="https://www.lefigaro.fr/conjoncture/l-obsession-de-la-croissance-encouragerait-une-economie-du-burn-out-selon-un-expert-de-l-onu-20241024"
		>
			<template #icon>
				<LucideNewspaper stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				Article du Figaro : « L'obsession de la croissance encouragerait une économie du burn-out »
			</template>
			<template #description>
				Cet article du Figaro explore l'analyse d'un expert de l'ONU qui affirme que la quête incessante de croissance économique pourrait favoriser une culture du burn-out. Selon l'expert, la pression constante pour accroître la productivité conduit à l'épuisement professionnel des employés, notamment dans les environnements de travail où les exigences sont élevées et les marges de manœuvre réduites. L'article met en lumière les conséquences de cette obsession pour la croissance sur la santé mentale des travailleurs, tout en soulignant l'urgence de repenser les modèles économiques pour un bien-être plus durable.
			</template>
			<template #logo>
				<IconRessourcesFigaro />
			</template>
			<template #cta>
				Lire l'article
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem
			href="https://www.anact.fr/le-syndrome-depuisement-professionnel-ou-burnout-mieux-comprendre-pour-mieux-agir"
		>
			<template #icon>
				<LucideNewspaper stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				Guide d'aide à la prévention du burn-out
			</template>
			<template #description>
				Ce guide, élaboré conjointement par la Direction générale du travail (DGT), l'Institut national de recherche et de sécurité (INRS) et l'Agence nationale pour l'amélioration des conditions de travail (Anact), offre une compréhension approfondie du syndrome d'épuisement professionnel. Il propose des actions collectives et individuelles pour prévenir ce syndrome et réagir efficacement face à des cas avérés.
			</template>
			<template #logo>
				<IconRessourcesAnact />
			</template>
			<template #cta>
				Lire l'article
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem youtube="https://www.youtube-nocookie.com/embed/J_WOlzYriBg?si=YRPDRbEWVETVftjG">
			<template #icon>
				<LucideTvMinimalPlay stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				« Burn-out, maladies physiques : quand le travail nous rend malade » - RTS
			</template>
			<template #description>
				Ce reportage de la Radio Télévision Suisse examine comment la pression au travail peut entraîner des maladies physiques et mentales, notamment le burn-out. Il présente des cas concrets et des analyses d'experts pour mieux comprendre ce phénomène.
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem
			href="https://www.anact.fr/le-syndrome-depuisement-professionnel-ou-burnout-mieux-comprendre-pour-mieux-agir"
		>
			<template #icon>
				<LucideLightbulb stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				Mutuelles : forfait soutien psychologique
			</template>
			<template #description>
				De nombreuses mutuelles proposent un forfait sans surcout de cotisation, permettant une prise en charge d’un certain nombre de consultations chez un psychologue par an (de 4 à 8 séances). Ce forfait s'ajoute à la prise en charge des médecines douces et est accessible même avec des contrats santé ne prévoyant pas le remboursement des médecines douces.
			</template>

			<template #logo>
				<div />
			</template>

			<template #cta>
				En savoir plus
			</template>
		</PageRessourcesColumnsItem>
	</div>
</template>
