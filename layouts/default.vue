<template>
  <div id="app">
    <div class="alert">
      <small><a target="_blank" href="https://www.facebook.com/saintescene/">Facebook</a> et <a href="https://www.youtube.com/channel/UCSX2aF_9i2D-wPd8gb9qfcw">Youtube</a> live chaque dimanche matin à 10h</small>
    </div>
    <header>
      <router-link to="/">
        <h1 class="logo">Sainte Scène</h1>
      </router-link>
      <button class="menu" @click="trigger"><p>menu</p></button>
    </header>
    <transition name="fade">
      <ssMenu v-on-click-outside="close" @click.native="show = false" v-if="show"></ssMenu>
    </transition>
    <transition name="fade">
      <ssEtransfer v-on-click-outside="close" @click.native="showtransfer = false" v-if="showtransfer"></ssEtransfer>
    </transition>
    <transition name="transite">
      <main @click="show = false">
        <router-view></router-view>
        <button @click="toggle =! toggle" class="button-notif round-give">Donnez ici</button>
        <transition name="fade">
          <a v-if="toggle" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GE9EHQB7SDSPC&source=url" target="blank"><button class="button-notif round-give-2">PayPal</button></a>
        </transition>
        <transition name="fade">
          <a v-if="toggle" @click="triggerE" target="blank"><button class="button-notif round-give-3">e-Interact</button></a>
        </transition>
      </main>
    </transition>
    <ssFooter v-if="$route.path !== ['/jesus','/annonces']"/>
  </div>
</template>

<script>
import ssFooter from '@/components/ss-footer'
import ssMenu from '@/components/ss-menu'
import ssEtransfer from '@/components/etransfer'

export default {
  name: 'app',
  components: {
    ssFooter,
    ssMenu,
    ssEtransfer
  },
  head () {
    return {
      title: 'Accueil',
      titleTemplate: '%s | Sainte Scène'
    }
  }, 
  data () {
    return {
      show: false,
      toggle: false,
      showtransfer: false
    }
  },
  methods: {
    trigger () {
      this.show = !this.show
    },
    close () {
      this.show = false
    },
    triggerE () {
      this.showtransfer = !this.showtransfer
    },
    closeE () {
      this.showtransfer = false
    }
  }
}
</script>

<style>
  .alert {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(150deg, #ff0000, #d7ff00, #ff00a7, #00e6ff);
    background-size: 800% 800%;
    -webkit-animation: alertgradient 17s ease infinite;
    -moz-animation: alertgradient 17s ease infinite;
    animation: alertgradient 17s ease infinite;
    height: 30px;
    width: 100vw;
  }
  .alert small {
    color: black;
    font-family: "Germania One", cursive;;
    font-size: 0.9rem;
  }
  .round-give {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 25px;
    height: auto;
    width: auto;
    background: #4dbcee;
    color: black !important;
  }
  .round-give-2 {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 25px;
    margin-bottom: 100px;
  }
  .round-give-3 {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 25px;
    margin-bottom: 175px;
  }
  .round-give-4 {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 25px;
    margin-bottom: 250px;
  }
  .annonce {
    margin: auto;
    text-align: center;
    color: white;
  }
  .menu {
    width: 75px;
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
  }
  .menu p {
    color: black;
    line-height: 1.2rem;
  }
  @keyframes alertgradient {
      0%{background-position:0% 13%}
      50%{background-position:100% 88%}
      100%{background-position:0% 13%}
  }
</style>
