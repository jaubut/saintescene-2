<template>
  <div class="time-container">
    <h1 class="time-h1">{{ h }}:{{ m }}:{{ s }}</h1>
  </div>
</template>

<script>
export default {
  name: 'time',
  data () {
    return { 
      h: '',
      m: '',
      s: ''
    }
  },
  methods: {
    updateClock: function () {
    	let now = new Date();
    	this.h = this.leftPad(''+now.getHours());
      this.m = this.leftPad(''+now.getMinutes());
      this.s = this.leftPad(''+now.getSeconds());
    },
    leftPad: function(str) {
	    const leftPad = '00';
      return leftPad.substring(0, leftPad.length - str.length) + str;
    }
  },
  mounted: function () {
    setInterval(this.updateClock, 100);
  }
}
</script>

<style scoped>
.time-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: black;
  justify-content: center;
  align-items: center;
}
.time-h1 {
  font-weight: 800;
  font-size: 15rem;
}
</style>
