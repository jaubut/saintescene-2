<template>
  <div id="evenement">
    <Annonce Month="Mars"></Annonce>
    <Annonce Month="Avril"></Annonce>
    <Annonce Month="Mai"></Annonce>
  </div>
</template>
<script>
import Annonce from '@/components/annonce'

export default {
  name: 'evenement',
  components: {
    Annonce
  },
  computed: {
    currentDate () {
      let today = new Date()
      return today.getDay()
    }
  },
  data() {
    return {
      dimanche: false,
      intercession: false,
      bstudy: false
    }
  },
  head () {
    return {
      title: 'Événements',
      meta: [
        { property: 'og:url', content: 'https://www.saintescene.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sainte Scène' },
        { property: 'og:description', content: 'On de loeuvre de Jésus.' },
        {property: 'og:image', content: '../assets/evenement-bstudy.jpg'}
      ]
    }
  }
}
</script>
<style scoped>
#evenement {
  width: 100%;
  height: 100%;
}
.hero-evenement {
  background-image: url(../assets/evenement-bstudy.jpg);
  background-position: top center !important; 
  grid-column: span 2;
}
.picture {
  grid-area: 1/2/2/4;
  display: flex;
  height: 75px;
  width: 75px;
  border-radius: 100%;
  background: #B2152D;
  border: 3px solid #FA7E7E;
  justify-self: center;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.picture p {
  text-align: center;
  color: white;
  font-size: 0.9rem;
}

.line {
  border-right: 2px solid #B2152D;
  grid-area: 1/2/2/3;
  height: 100%;
  margin: 25% 0 10% 0;
}
.text-desc {
  padding: 5% 20%;
  background: #fafbfc;
}
.text-group {
  display: flex;
  flex-flow: column wrap;
  align-items: left;
  justify-content: center;
  color: black;
  padding: 10% 0%;
}
.text-group h2 {
  font-family: 'Barlow', sans-serif;
  font-size: 2rem;
  margin: 25px;
  padding: 0 20%;
  opacity: .5;
  cursor: pointer;
}
.text-group h2:hover {
  opacity: 1;
}
@media(min-width:468px) {
  .text-group h2 {
    font-size: 5rem;
  }
}
.text-group span {
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  margin-top: -10px;
}
.text-group p {
  margin-top: 10%;
}
.text h1 {
  font-family: 'Barlow', sans-serif;
}
.separator {
  height: 1px;
  background: #fafbfc;
  width: 70%;
}
.hero-event {
  background-image: url(../assets/evenement-bstudy.jpg);
}
.intercession {
  background-image: url(../assets/intercession.jpg);
}
.compassion {
  background-image: url(https://images.unsplash.com/photo-1513640127641-49ba81f8305c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7aa96678613e152a1fa0df75bf390160&auto=format&fit=crop&w=750&q=80);
}
.campus {
  background-image: url(../assets/campus.jpg);
}
.chandail {
  background-image: url(../assets/chandail.jpg);
}
.dejeuner {
  background-image: url(https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0038573a81b1169576b6674a3ce202&auto=format&fit=crop&w=476&q=80);
}
.phone-number {
  color: #FA7E7E;
}
</style>
