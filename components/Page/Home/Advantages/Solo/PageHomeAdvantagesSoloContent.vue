<script setup lang="ts">
import { LucideBookHeadphones, LucideCalendarRange, LucideLeaf, LucideListChecks, LucidePersonStanding, LucideTvMinimalPlay } from "lucide-vue-next";
</script>

<template>
	<UITable class="page-home-advantages-solo-content">
		<UITableItem>
			<template #icon>
				<LucidePersonStanding stroke="var(--green)" stroke-width="2" />
			</template>
			<template #text>
				Devenir acteur de sa santé mentale avec un plan personnalisé
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideBookHeadphones stroke="var(--green)" stroke-width="2" />
			</template>
			<template #text>
				Bénéficier de l'expertise de professionnels sensibilisés à la souffrance au travail
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideListChecks stroke="var(--green)" stroke-width="2" />
			</template>
			<template #text>
				Recevoir des solutions concrètes adaptées aux réalités du monde professionnel
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideCalendarRange stroke="var(--green)" stroke-width="2" />
			</template>
			<template #text>
				Accéder à un suivi rapide et fexible avec des rendez-vous personnalisés
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideTvMinimalPlay stroke="var(--green)" stroke-width="2" />
			</template>
			<template #text>
				Choisir facilement le professionnel idéal grâce aux vidéos de présentation
			</template>
		</UITableItem>
		<UITableItem>
			<template #icon>
				<LucideLeaf stroke="var(--green)" stroke-width="2" />
			</template>
			<template #text>
				Profiter d'un accompagnement ciblé, diminuant le stress et favorisant un bien-être durable
			</template>
		</UITableItem>
	</UITable>
</template>

<style scoped lang="scss">
.page-home-advantages-solo-content {
	color: var(--dark-blue);

	background-color: rgba(255, 255, 255, 0.4);
	border: 1px solid rgba(255, 255, 255, 1);
}
</style>
