<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1 class="logo">Sainte Scène</h1>
      </router-link>
      <button class="menu" @click="trigger"><p>menu</p></button>
    </header>
    <transition name="fade">
      <ssMenu v-on-click-outside="close" @click.native="show = false" v-if="show"></ssMenu>
    </transition>
    <transition name="transite">
      <main @click="show = false">
        <router-view></router-view>
        <button @click="toggle =! toggle" class="button-notif round-give">Donnez ici</button>
        <transition name="fade">
          <a v-if="toggle" href="https://paypal.me/saintescene" target="blank"><button class="button-notif round-give-2">PayPal</button></a>
        </transition>
        <transition name="fade">
          <a v-if="toggle" href="https://www.canadahelps.org/fr/dn/35836" target="blank"><button class="button-notif round-give-3">Cana don</button></a>
        </transition>
      </main>
    </transition>
    <ssFooter v-if="$route.path !== '/jesus'"/>
  </div>
</template>

<script>
import ssFooter from '@/components/ss-footer'
import ssMenu from '@/components/ss-menu'

export default {
  name: 'app',
  components: {
    ssFooter,
    ssMenu
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
      toggle: false
    }
  },
  methods: {
    trigger () {
      this.show = !this.show
    },
    close () {
      this.show = false
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
    background: red;
    height: 30px;
    width: 100vw;
  }
  .alert small {
    color: white;
    font-size: 0.9rem;
  }
  .round-give {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 25px;
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
  .annonce {
    margin: auto;
    text-align: center;
    color: white;
  }
  .menu {
    width: 75px;
    height: 30px;
    border-color: white;
    border-width: 2px;
    border-radius: 100px;
    background: none;
    color: white;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-flow: column;
    align-content: center;
    align-items: center;
  }
  .menu p {
    color: white;
    line-height: 1.2rem;
  }
</style>
