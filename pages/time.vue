<template>
  <div class="time-container">
    <div class="has-text-centered">      
      <div class="timer" :style="'color:' + textColor + ';'" id="timer">
        <span id="minutes">{{ minutes }}</span>
        <span id="middle">:</span>
        <span id="seconds">{{ seconds }}</span>
      </div>

      <div id="buttons">
    <!--     Start TImer -->
        <button 
          id="start" 
          class="button is-dark is-large" 
          v-if="!timer"
          @click="startTimer">
            <i class="far fa-play-circle"></i>
        </button>
    <!--     Pause Timer -->
        <button 
          id="stop" 
          class="button is-dark is-large" 
          v-if="timer"
          @click="stopTimer">
            <i class="far fa-pause-circle"></i>
        </button>
    <!--     Restart Timer -->
        <button 
          id="reset" 
          class="button is-dark is-large" 
          v-if="resetButton"
          @click="resetTimer">
            <i class="fas fa-undo"></i>
        </button>
      </div>
      <input class="input-timer" v-model="totalTime" type="text">
    </div>
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
      s: '',
      time: '00:00:00.000',
      timer: null,
      totalTime: (30 * 60),
      textColor: 'yellow',
      resetButton: false
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
    },
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.title = "Greatness is within sight!!"
      this.textColor = 'yellow'
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      this.title = "Never quit, keep going!!"
    },
    resetTimer: function() {
      this.totalTime = (5 * 60);
      clearInterval(this.timer);
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.textColor = 'red';
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.totalTime >= 1){
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    }
  },  
  mounted: function () {
    setInterval(this.updateClock, 100);
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
}
</script>

<style scoped>
.time-container {
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  height: 100vh;
  background: black;
  justify-content: center;
  align-items: center;
}
.time-h1 {
  font-weight: 400;
  font-size: 10rem;
  padding-left: 100px;
}
.timer {
  font-weight: 800;
  font-size: 15rem;
  font-family: "Barlow", sans-serif;
}
.container {
  width: 100%;
}
.container-column {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.container-row {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.input-timer {
  margin: 0.75rem;
  border: 0;
  height: 1rem;
  border-radius: 3px;
}
</style>
