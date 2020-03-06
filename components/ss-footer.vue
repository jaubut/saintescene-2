<template>
  <div id="Footer">
    <div class="social">
      <a href="https://www.youtube.com/channel/UCSX2aF_9i2D-wPd8gb9qfcw" target="_blanck">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="https://www.facebook.com/Sainte-Sc%C3%A8ne-1529585407088599/" target="_blanck">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/saintescene/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="line"></div>
    <h1 class="footer-logo">Sainte Scène</h1>
    <div class="text-group">
      <div class="text">
        <h3>Nous rejoindre</h3>
        <a href="https://www.google.ca/maps/place/369+Rue+MacDonald,+Granby,+QC+J2G+4G5/@45.388251,-72.7347941,17z/data=!4m13!1m7!3m6!1s0x4cc9cfb5275c00ab:0x8fd2646af4df300e!2s369+Rue+MacDonald,+Granby,+QC+J2G+4G5!3b1!8m2!3d45.3884979!4d-72.7347579!3m4!1s0x4cc9cfb5275c00ab:0x8fd2646af4df300e!8m2!3d45.3884979!4d-72.7347579" target="_blank"><p>369 Rue MacDonald, Granby, Qc, J2G 4G5</p></a>
        <a href="mailto:allo@saintescene.com"><p>allo@saintescene.com</p></a>
      </div>
      <div class="text">
        <h3>Prochains Événements</h3>
        <p v-if="currentDate >= 1">Réunion Dimanche <span class="info">10h - 12h</span></p>
        <!--
        <p>Réveil Sainte Scène <span class="info" v-if="currentDate <= 3"><strong>Mercredi</strong> 8h30 </span><span class="info" v-if="currentDate <= 5"><strong>Vendredi</strong> 8h30</span></p>
        -->
      </div>
    </div>
    <img class="footer-coupe" src="../assets/logo-coupe-black.svg" alt="logo coupe rose">
    <div class="footer-right">
      <p>© 2018 sainte Scène <br>All rights reserved. <br>Crafted by <a href="" target="_blank"><span>Jérémie Aubut</span></a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    currentDate () {
      let today = new Date()
      return today.getDay()
    }
  }
}
</script>
<style scoped>
  #Footer {
  height: 100vh;
  display: grid;
  grid-template: 5% 65% 20%/5% 45% 45% 5%;
  padding: 10% 0 0 0;
}
.social {
  grid-area: 1/2/2/4;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 25px;
  margin-top: -25px;
  font-size: 1.2em;
}
.social a {
  cursor: pointer;
  padding: 0 10px;
  transition: all ease-in-out 0.5s;
}
.social a:hover {
  transform: scale(1.5);
}
.line {
  grid-area: 1/2/2/4;
  width: 100%;
  border-top: 4.5px solid black;
}
.footer-logo {
  grid-area: 2/2/3/4;
  font-family: "Germania One", cursive;
  font-size: 1.5rem;
  font-weight: 200;
  margin: 15px;
}
.footer-coupe {
  grid-area: 3/3/4/4;
  height: 42px;
  align-self: end;
  margin-left: auto;
  fill: black;
}
.text-group {
  grid-area: 2/2/3/4;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: left;
  padding: 5%;
}
@media(max-width:748px) {
  .text-group {
    justify-content: flex-start;
  }
}
.text {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 50px;
}
.text p {
  margin: 15px;
  color: black;
  font-size: 0.9rem;
}
.text h3 {
  font-family: "Barlow", sans-serif;
  font-weight: 100;
}
.text .info {
  color: black;
  font-size: 0.9rem;
}
.footer-right {
  align-self: end;
  grid-area: 3/2/4/3;
  margin-right: auto;
}
.footer-right p {
  font-family: "Barlow", sans-serif;
  align-self: center;
  font-size: 0.6rem;
  color: black;
  line-height: inherit;
}
</style>
