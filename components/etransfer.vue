<template>
  <div id="container-menu">
    <div id="transfer">
      <p>email: donner@saintescene.com</p>
      <p>Mot de passe: jedonne</p>
    </div>
    <button class="menu-x"><p>x</p></button>
    <div id="menu-svg">
      <img id="menu-svg-coupe" src="../assets/logo-coupe-black.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      Hover: false
    }
  },
  methods: {
    openHover () {
      this.Hover = true
    },
    closeHover () {
      this.Hover = false
    }
  }
}
</script>
<style scoped>
#container-menu {
  position: fixed;
  z-index: 1;
  background: white;
  height: 100vh;
  width: 100%;
}
#transfer {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content: flex-start;
  line-height: 2rem;
  padding: 2%;
  width: max-content;
}
#transfer p {
  font-family: "Barlow", sans-serif;
  color: black;
  font-size: 2rem;
  line-height: 2.25rem;
  font-weight: bold;
  width: inherit;
}
#transfer p:hover {
  transform: translateX(5px);
  transition: transform 0.5s ease-in-out;
}
.button-notif {
  margin-top: 25px;
}
#menu-svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
#menu-svg-coupe {
  width: 75px;
}
.menu-x {
  position: fixed;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-color: black;
  border-width: 2px;
  border-radius: 100px;
  background: none;
  color: black;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-content: center;
  align-items: center;
  margin: 15px;
}
.menu-x p {
  color: black;
  line-height: 1.2rem;
}
</style>
