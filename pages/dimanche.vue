<template>
  <div id="Implique">
    <Hero class="hero-implique"> <div class="text"><h1>Le dimanche matin</h1></div> </Hero>
    <div class="bloc span-2">
      <div class="texte">
        <p class="text-big">10h - 12h</p>
        <p>Chaque dimanche matin, toute notre communauté se rassemble pour rencontrer Dieu, ensemble.</p>
      </div>
    </div>
    <div class="bloc span-2 grey row">
      <div class="texte">
        <p class="big-text">9h30 - 10h</p>
        <h3>L'accueil</h3>
        <p>Il y a du café, de la musique et de la prière dès 9h30.</p>
      </div>
      <img src="../assets/dimanche/accueil.jpg" alt="">
    </div>
    <div class="bloc span-2">
      <div class="texte">
        <p class="big-text">10h - 11h</p>
        <h3>Louange</h3>
        <p>À chaque semaine, notre équipe de louange nous amène dans l'adoration dans une ambiance chaleureuse et puissante.</p>
      </div>
      <img src="../assets/dimanche/louange.jpg" alt="">
    </div>
    <div class="bloc span-2 row">
      <div class="texte center">
        <img class="mini-scene" src="../assets/dimanche/mini-scene-logo.png" alt="">
        </br>
        <p>Pour les enfants<br>de 3 à 5 ans, un temps <br>de louange est dédié <br>pour eux à l'étage.</p>
      </div>
      <img src="../assets/dimanche/mini-scene.jpg" alt="">
    </div>
    <div class="bloc span-2 grey row">
      <img src="../assets/dimanche/message.png" alt="">
      <div class="texte">
        <p class="big-text">11h - 12h</p>
        <h3>Message</h3>
        <p>Suivant la louange, nous sommes encouragé par un message puisé dans la parole de Dieu et sa révélation encore tellement actuel pour nous aujourd'hui.</p>
      </div>
    </div>
    <div class="bloc span-2 row">
      <div class="texte">
        <p class="big-text">11h - 12h</p>
        <h3>Sainte Scène Junior</h3>
        <p>Pour tous les jeunes de l'âge primaire, nous avons des classes avec des activitées spécialement préparé pour eux !</p>
      </div>
      <img src="../assets/dimanche/classe-garderie.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Implique'
}
</script>
<style scoped>
#implique {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: calc(100vh/1.7);
  width: 100vw;
}
form {
  display: grid;
  grid-template: 1fr 100px 1fr / 1fr 1fr;
}
input {
  border: 2px solid grey;
  border-radius: 5px;
  background: transparent;
  height: auto;
  width: auto;
}
textarea {
  grid-area: 2/1/3/3;
}
.submit {
  grid-area: 3/1/4/3;
}
.texte {
  padding: 5%;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
}
.texte img {
  height: 100px;
}
.mini-scene {
  width: 150px !important;
  height: auto !important; 
  margin: auto !important;
}
.center {
  text-align: center !important;
}
h2 {
  font-size: 3rem;
  padding-bottom: 35px;
}
h3 {
  font-size: 2.2rem;
  font-weight: bold;
}
p {
  font-size: 1.3rem;
  font-weight: 100;
  line-height: 1.5rem;
  padding: 0% 10%;
}
.big-text {
  font-size: 1.5rem;
  font-weight: bold;
}
.bloc {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  grid-column: span 1;
  align-items: center;
  font-family: "Barlow", sans-serif;
  background-color: white;
  background-image: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding: 5%;
  color: black;
}
.green {
  background: #4F5D56 !important;
  color: white !important;
}
.blue {
  background: #4267B2 !important;
}
.span-2 {
  grid-column: span 2 !important;
}
.span-v {
  grid-row: span 2;
}
.row {
  flex-flow: row nowrap !important;
  align-items: flex-start !important;
}
@media(max-width:468px) {
  .row {
    flex-flow: row wrap !important;
  }
}
.row .texte {
  text-align: left;
}
.row .texte img {
  height: 100px;
}
.row .texte p {
  padding: 0;
}
.beige {
  background-color: #F8F3EB !important;
}
.grey {
  background-color: rgba(211, 211, 211, 0.2) !important;
  align-items: center!important;
}
img {
  max-height: 50%;
  max-width: 65vw;
  border-radius: 5px;
}
.dark {
  color: white;
}
.hover {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  margin: 5%;
}
@media (max-width: 468px) {
  #Bloc {
    grid-column: span 2;
  }
  .span-v {
    grid-row: span 1;
  }
}
.hero-implique {
  background-image: url(../assets/dimanche/hero.jpg);
}
.button-slack {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  border: 2px solid grey;
  border-radius: 5px;
  background: transparent;
  height: auto;
  min-width: 100%;
  cursor: pointer;
  padding: 2% 5%;
  transition: all ease-in-out 0.5s;
}
.button-slack:hover {
  transform: scale(1.1);
}
.button-slack p {
  margin: 0;
  padding: 0;
}
.button-slack img {
  height: 35px;
  width: 35px;
}
</style>
