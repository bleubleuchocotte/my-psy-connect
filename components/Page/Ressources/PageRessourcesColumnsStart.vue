<script setup lang="ts">
import { LucideLightbulb, LucideNewspaper, LucideTvMinimalPlay } from "lucide-vue-next";
</script>

<template>
	<div>
		<PageRessourcesColumnsItem href="https://shs.cairn.info/revue-l-information-psychiatrique-2018-7-page-589?lang=fr">
			<template #icon>
				<LucideNewspaper stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				Note clinique sur la question du burn-out
			</template>
			<template #description>
				Cet article explore les aspects cliniques du burn-out, notamment la vulnérabilité des individus face à des situations de duplicité ou de malveillance, et leur tendance à s'effondrer ou à se remettre en cause.
			</template>
			<template #logo>
				<IconRessourcesCairn />
			</template>
			<template #cta>
				Voir la note
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem href="https://sante.gouv.fr/professionnels/ameliorer-les-conditions-d-exercice/qualite-de-vie-au-travail-QVT/observatoire-qvt/article/ressources-pratiques">
			<template #icon>
				<LucideNewspaper stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				Ministère de la Santé et de la Prévention : « Ressources pratiques »
			</template>
			<template #description>
				Cette page offre des ressources pratiques sur la qualité de vie au travail, incluant des guides sur le repérage et la prise en charge du syndrome d'épuisement professionnel.
			</template>
			<template #logo>
				<IconRessourcesMinistere />
			</template>
			<template #cta>
				En savoir plus
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem youtube="https://www.youtube-nocookie.com/embed/zTgt3WBR8BM?si=oPf_SDHGXSft1J4W">
			<template #icon>
				<LucideTvMinimalPlay stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				« La crise du Burn-Out » - ARTE
			</template>
			<template #description>
				Ce documentaire explore les témoignages de personnes dont le travail rêvé s'est transformé en cauchemar, menant à une perte de sens et à l'épuisement professionnel. Il analyse les causes profondes du burn-out et propose des pistes pour y remédier.
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem youtube="https://www.youtube-nocookie.com/embed/9I-VAHFjMgQ?si=hQMkpmYjeTLn7LUS">
			<template #icon>
				<LucideTvMinimalPlay stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				C'est quoi faire un burn out ? | Documentaire
			</template>
			<template #description>
				Le documentaire "C'est quoi faire un burn out ?" réalisé par Tristan Lochon et Julien Demond, explore la banalisation du burn-out dans le monde professionnel. Tristan, après une transition du journalisme vers les start-ups, partage son expérience personnelle d'épuisement malgré sa passion pour son travail.
				À travers des témoignages, notamment celui de Mathilde qui exprime le sentiment de donner sans que cela suffise, le film met en lumière les risques du burn-out sur la santé et son expansion dans la société.<br>
				Ce documentaire invite à une réflexion profonde sur un sujet encore tabou dans le milieu professionnel.
			</template>
		</PageRessourcesColumnsItem>
		<PageRessourcesColumnsItem href="https://www.inrs.fr/risques/bien-etre-travail/ce-qu-il-faut-retenir.html">
			<template #icon>
				<LucideLightbulb stroke="var(--green)" stroke-width="2" />
			</template>
			<template #title>
				INRS : bien-être au travail
			</template>
			<template #description>
				L'Institut National de Recherche et de Sécurité (INRS) propose des ressources sur la mise en place de politiques de bien-être au travail, visant à réduire les risques psychosociaux et à améliorer le climat collectif et la motivation des salariés.
			</template>
			<template #logo>
				<IconRessourcesINRS />
			</template>
			<template #cta>
				En savoir plus
			</template>
		</PageRessourcesColumnsItem>
	</div>
</template>
