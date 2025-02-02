<template>
	<main class="page-mentions-legales">
		<PageHeader>
			<template #title>
				Mentions legales
			</template>
		</PageHeader>

		<div>
			<h2>
				1. Informations Générales
			</h2>

			<p>
				Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est porté à la connaissance des utilisateurs du site [Nom du Site] les présentes mentions légales.
				<br><br>
				Éditeur du Site :
				<br>
				Nom de l'éditeur : [Nom de la société ou du responsable]
				<br>
				Statut juridique : [SARL, SAS, Auto-entrepreneur, etc.]
				<br>
				Siège social : [Adresse complète]
				<br>
				SIRET : [Numéro de SIRET]
				<br>
				RCS : [Ville et numéro d'immatriculation]
				<br>
				Numéro de TVA intracommunautaire : [Numéro]
				<br>
				Email : [Adresse email]
				<br>
				Téléphone : [Numéro de téléphone]
				<br><br>
				Directeur de la publication :
				<br>
				Nom : [Nom du responsable]
				<br>
				Contact : [Email ou numéro de téléphone]
				<br><br>
				Hébergeur du Site :
				<br>
				Nom de l'hébergeur : [Nom de l'hébergeur]
				<br>
				Adresse : [Adresse complète de l'hébergeur]
				<br>
				Téléphone : [Numéro de téléphone]
				Site web : [URL]
			</p>
		</div>
		<div>
			<h2>
				2. Conditions Générales d'Utilisation (CGU)
			</h2>

			<p>
				L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
				<br><br>
				Responsabilités :
				<br><br>
				L'éditeur met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, il ne peut garantir l'exhaustivité ou l'absence d'erreurs.
				<br><br>
				L'utilisateur assume l'entière responsabilité de l'utilisation des informations fournies sur le site.
				<br><br>
				Propriété intellectuelle :
				<br><br>
				Tous les contenus présents sur ce site (textes, images, graphismes, logos, vidéos, etc.) sont protégés par les lois relatives à la propriété intellectuelle.
				<br><br>
				Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable écrite.
			</p>
		</div>
		<div>
			<h2>
				3. Protection des Données Personnelles
			</h2>

			<p>
				Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et de portabilité des données le concernant.
				<br><br>
				Responsable du traitement : [Nom ou entité responsable]
				<br><br>
				Finalité des traitements :
				Les données collectées sur le site sont destinées à [indiquer les finalités : gestion des commandes, newsletter, analyse statistique, etc.].
				<br><br>
				Exercice des droits :
				Pour exercer ces droits, l'utilisateur peut contacter :
				<br><br>
				Par courrier : [Adresse]
				<br><br>
				Par email : [Adresse email]
			</p>
		</div>
		<div>
			<h2>
				4. Cookies
			</h2>

			<p>
				Le site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience. En poursuivant la navigation sur le site, l'utilisateur accepte l'utilisation des cookies conformément à notre politique de gestion des cookies [mettre un lien vers la politique de cookies si disponible].
				<br><br>
				Gestion des cookies :
				L'utilisateur peut configurer son navigateur pour refuser ou supprimer les cookies. Toutefois, certaines fonctionnalités du site pourraient être altérées.
			</p>
		</div>
		<div>
			<h2>
				5. Droit Applicable et Litiges
			</h2>

			<p>
				Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de règlement amiable, les tribunaux français seront seuls compétents pour en connaître.
			</p>
		</div>
	</main>
</template>

<style scoped lang="scss">
.page-mentions-legales {
	display: flex;
	flex-direction: column;
	gap: rem(94);

	padding-inline: rem(118);
	padding-block: rem(94);

	@media not #{$desktop} {
		gap: rem(40);
		padding-inline: rem(20);
		padding-block: rem(94);
	}

	div {
		display: flex;
		flex-direction: column;
		gap: rem(40);
	}
}
</style>
