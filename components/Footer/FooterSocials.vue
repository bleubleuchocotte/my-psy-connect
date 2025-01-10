<template>
	<div class="footer-socials">
		<UILink to="https://google.com" class="footer-socials__link">
			<IconSocialTikTok />
		</UILink>
		<UILink to="https://google.com" class="footer-socials__link">
			<IconSocialInstagram />
		</UILink>
		<UILink to="https://google.com" class="footer-socials__link">
			<IconSocialFacebook />
		</UILink>
		<UILink to="https://google.com" class="footer-socials__link">
			<IconSocialLinkedIn />
		</UILink>
	</div>
</template>

<style scoped lang="scss">
.footer-socials {
	display: flex;
	@include gap(15);

	@media not #{$desktop} {
		justify-content: center;
	}

	&__link {
		@include padding(10);
	}
}
</style>
