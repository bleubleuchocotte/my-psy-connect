<script setup lang="ts">
import { LucideMail } from "lucide-vue-next";
</script>

<template>
	<UIContainerHeading class="page-home-action-heading">
		<template #icon>
			<IconCustomPath />
		</template>
		<template #title>
			<h2 class="h1">
				Passez à l'action, rejoignez<br>
				un groupe de soutien MyPsy
			</h2>
		</template>
		<template #text>
			<p class="page-home-action-heading__text">
				Participer à un groupe de soutien MyPsy, c'est l'opportunité de s'entourer de personnes bienveillantes qui traversent les mêmes défis que vous, avec l'accompagnement professionnel d'une psychologue expérimenté(e). Ensemble, avançons vers un avenir meilleur, en cultivant l'entraide, le partage et la coopération, des valeurs qui animent chacune de nos sessions.
			</p>
		</template>
		<template #cta>
			<UIButton class="page-home-action-heading__cta">
				Rejoignez-nous <LucideMail stroke="var(--white)" stroke-width="2" />
			</UIButton>
		</template>
	</UIContainerHeading>
</template>

<style scoped lang="scss">
.page-home-action-heading {
	&__cta {
		background-color: var(--dark-blue);
		color: var(--white);
	}

	&__text {
		color: var(--fake-black);
	}
}
</style>
