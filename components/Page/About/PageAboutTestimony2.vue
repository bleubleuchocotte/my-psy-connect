<template>
	<UIContainer class="page-about-testimony-2">
		<UIContainerHeading class="page-about-testimony-2__heading">
			<template #title>
				<h2>
					« Je me suis effondré » :<br>
					témoignage d'un burn out
				</h2>
			</template>
			<template #text>
				<p>
					Crédits : Welcome to the Jungle Media
				</p>
			</template>
		</UIContainerHeading>
		<UIContainerContent class="page-about-testimony-2__content">
			<template #content>
				<iframe width="920" height="315" src="https://www.youtube.com/embed/j1Sli7ocyrQ?si=dyMzkMd7ljsQJrfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
			</template>
		</UIContainerContent>
	</UIContainer>
</template>

<style scoped lang="scss">
.page-about-testimony-2 {
	background-color: var(--extra-light-green);

	&__heading {
		p {
			color: var(--fake-black);
		}
	}

	&__content {
		width: 100%;
		align-self: center;

		iframe {
			margin: 0 auto;
			aspect-ratio: 16/9;
			width: 100%;
			height: 100%;

			border-radius: 10px;
		}
	}
}
</style>
