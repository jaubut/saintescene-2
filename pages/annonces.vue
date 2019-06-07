<template>
  <div id="evenement">
    <Annonce Month="Juin"></Annonce>
    <Annonce Month="Juillet"></Annonce>
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
  height: 100vh;
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
</style>
