<template>
	<div class="footer-socials">
		<UILink to="https://google.com" class="footer-socials__link">
			<IconTikTok />
		</UILink>
		<UILink to="https://google.com" class="footer-socials__link">
			<IconTikTok />
		</UILink>
		<UILink to="https://google.com" class="footer-socials__link">
			<IconTikTok />
		</UILink>
		<UILink to="https://google.com" class="footer-socials__link">
			<IconTikTok />
		</UILink>
	</div>
</template>

<style scoped lang="scss">
.footer-socials {
	display: flex;
	@include gap(15);

	&__link {
		@include padding(10);
	}
}
</style>
