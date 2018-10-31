<template>
  <div id="Don">
    <Hero class="hero-don">
      <div class="text">
        <h1>Réveil</h1>
        <p><strong>Semaine de jeûne & prières</strong></p>
        <P class="petit-text">Du 28 octobre au 4 novembre 2018</P>
        </br>
        <p>L'église sera ouverte à compter de 7h30 le matin et la fermeture sera à 21h00;</br>donc durant la nuit les locaux seront fermés.</p>
      </div>
    </Hero>
    <div class="container">
      <div> 
        <blockquote>«LA PRIÈRE FERVENTE DU JUSTE POSSÈDE UNE SINGULIÈRE PUISSANCE»</blockquote>
        <p class="petit-text quote-name">-JACQUES 5:16</p>
      </div>
      <p>Réservez une heure, connectez avec Dieu, changeons notre communauté.</p>
      <a href="https://www.24-7prayer.com/signup/0aa8bc" target="blank">
        <button class="button-notif">Réserver une place</button>
      </a>
      <br></br>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/auUleubQbYM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <blockquote>Ressources</blockquote>
      <P>Idées pour votre heure et votre vie de prières.</P>
      <div class="">
        <p>APPRENDRE À ÉCOUTER</p>
        <a href="/pdf/ecoute.pdf" target="blank">
        <button class="button-ressource">Télécharger</button>
      </a>
      <p>DÉCLARATIONS POUR LA VIE DE VOS ENFANTS</p>
      <a href="/pdf/declare.pdf" target="blank">
        <button class="button-ressource">Télécharger</button>
      </a>
      <p>LE JEÛNE</p>
      <a href="/pdf/jeune.pdf" target="blank">
        <button class="button-ressource">Télécharger</button>
      </a>
      <p>ÉTUDES BIBLIQUES SUR LA PRIÈRE</p>
      <a href="/pdf/priere.pdf" target="blank">
        <button class="button-ressource">Télécharger</button>
      </a>
       <p>UNE HEURE DANS LA PRÉSENCE DE DIEU</p>
      <a href="/pdf/uneheure.pdf" target="blank">
        <button class="button-ressource">Télécharger</button>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #Don {
  width: 100%;
  height: 100%;
}

.hero-don {
  background-image: url(../assets/donner.jpg);
  background-position: center !important;
}
.petit-text {
  font-size: 0.95rem;
}
.quote-name {
  text-align: right;
  margin-top: 0;
}
blockquote {
  color: black;
  font-size: 2.5rem;
  font-family: "Barlow", sans-serif;
  font-weight: bolder;
}
.button-ressource {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  background: #fff;
  border-radius: 4px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: white;
  background: #B2152D;
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  cursor: pointer;
}
.button-ressource:hover {
  color: #FA7E7E;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}
</style>
