<template>
	<main class="page-mentions-legales">
		<PageHeader>
			<template #title>
				Mentions legales
			</template>
		</PageHeader>

		<section>
			<div class="page-mentions-legales__section">
				<h2>
					1. Informations Générales
				</h2>

				<p>
					Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est porté à la connaissance des utilisateurs du site MypsyConnect les présentes mentions légales.
					<br><br>
					Éditeur du Site :
					<br>
					Nom de l'éditeur : Quentin Joubert
					<br>
					Statut juridique : SASU
					<br>
					Siège social : 263 chemin des Grangettes 38660 Lumbin
					<br>
					SIRET : 93134629000014
					<br>
					RCS : RCS Grenoble
					<br>
					Numéro de TVA intracommunautaire : FR54931346290
					<br>
					Email : quentin.mypsy@gmail.com
					<br>
					Téléphone : +33 6 86 45 85 57
					<br><br>
					Directeur de la publication :
					<br>
					Nom : Quentin Joubert
					<br>
					Contact : quentin.mypsy@gmail.com
					<br><br>
					Hébergeur du Site :
					<br>
					Nom de l'hébergeur : Netlify
					<br>
					Adresse : 2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA).

					<br>
					Site web : https://www.netlify.com/
				</p>
			</div>
			<div class="page-mentions-legales__section">
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
			<div class="page-mentions-legales__section">
				<h2>
					3. Protection des Données Personnelles
				</h2>

				<p>
					Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et de portabilité des données le concernant.
					<br><br>
					Responsable du traitement : Quentin Joubert
					<br><br>
					Finalité des traitements :
					Les données collectées sur le site sont destinées à la newsletter
					<br><br>
					Exercice des droits :
					Pour exercer ces droits, l'utilisateur peut contacter :
					<br><br>
					Par courrier : 263 chemin des Grangettes 38660 Lumbin
					<br><br>
					Par email : quentin.mypsy@gmail.com
				</p>
			</div>
			<div class="page-mentions-legales__section">
				<h2>
					4. Cookies
				</h2>

				<p>
					Ce site utilise des vidéos intégrées depuis YouTube, un service fourni par Google LLC. En accédant à ces vidéos, des données peuvent être collectées par YouTube conformément à leurs Conditions d'utilisation et leur Politique de confidentialité.
					<br><br>
					Les vidéos YouTube intégrées sur ce site sont fournies par un service tiers. En accédant à ces vidéos, l'utilisateur accepte que des données puissent être collectées par YouTube. Ce site n'exerce aucun contrôle sur cette collecte de données.
				</p>
			</div>
			<div class="page-mentions-legales__section">
				<h2>
					5. Droit Applicable et Litiges
				</h2>

				<p>
					Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de règlement amiable, les tribunaux français seront seuls compétents pour en connaître.
				</p>
			</div>
		</section>
	</main>
</template>

<style scoped lang="scss">
.page-mentions-legales {
	section {
		display: flex;
		flex-direction: column;
		gap: rem(94);

		padding-inline: rem(118);
		padding-block: rem(94);
		@media not #{$desktop} {
			padding-inline: rem(20);
		}
	}

	&__section {
		display: flex;
		flex-direction: column;
		gap: rem(40);
	}
}
</style>
