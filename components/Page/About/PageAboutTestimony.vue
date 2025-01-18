<template>
	<UIContainer class="page-about-testimony" direction="row">
		<UIContainerHeading class="page-about-testimony__heading">
			<template #icon>
				<IconCustomPath />
			</template>
			<template #title>
				<h2>
					Le témoignage d'Emmanuelle : surmonter le burn-out et retrouver du sens
				</h2>
			</template>
			<template #text>
				<p>
					Après avoir traversé une période de grande solitude et d'incertitude, Emmanuelle partage avec émotion son expérience et son combat pour surmonter le burn-out. Elle raconte l'importance de pouvoir compter sur un réseau de professionnels qualifiés et bienveillants, capables de l'accompagner dans son parcours de guérison.<br><br>
					Avec MyPsyConnect, nous souhaitons offrir des solutions concrètes pour surmonter l'épuisement professionnel, atténuer la fatigue, sortir de l'isolement, et retrouver du sens et de la motivation. Ces solutions incluent des séances de groupe, des séances individuelles, et des webinaires adaptés à vos besoins.<br><br>
					🎥 Découvrez son témoignage sincère dans cette vidéo.
				</p>
			</template>
		</UIContainerHeading>
		<UIContainerContent class="page-about-testimony__content">
			<template #content>
				<iframe width="540" height="960" src="https://www.youtube.com/embed/2jrtuqgsCho?si=SRMpymS53kLEsNvC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
			</template>
		</UIContainerContent>
	</UIContainer>
</template>

<style scoped lang="scss">
.page-about-testimony {
	flex-wrap: nowrap;
	gap: rem(118);

	@media not #{$desktop} {
		gap: rem(40) !important;
		flex-direction: column !important;
	}

	&__heading {
		flex: 1;
		text-align: start;
		text-wrap: auto;
	}

	&__content {
		flex: 1;
		iframe {
			width: 100%;
			border-radius: 10px;
		}
	}
}
</style>
