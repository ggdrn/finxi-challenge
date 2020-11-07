<template>
  <div>
    <sui-container textAlign="center">
      <div id="intro">
        A long time ago, in a galaxy far, far away....
      </div>
    </sui-container>
    <div id="logo"></div>
    <div id="scroller">
      <div>
        <p>
          A Aliança Rebelde precisa de você. Nosso infiltrado Jar-Jar Binks
          bolou um plano para acabar com a ameaça de Darth Vader uma vez por
          todas. A Finxi foi contratada – por meios escusos, para não dar pinta
          – para fazer o Lord Sith morrer. De rir. Literalmente.
        </p>
        <p>
          Enquanto nosso setor de ursinhos de pelúcia é pago para produzir um
          trilhão de ursinhos carinhosos, sua missão é desenvolver um MVP para
          divulgação de gifs – e memes – através da API Pública do Giphy.
        </p>
      </div>
    </div>
    <sui-container>
      <sui-button
        @click="skipIntro()"
        inverted
        class="skip-button"
        floated="right"
        icon="fast forward"
        color="yellow"
        >Pular Abertura</sui-button
      >
      <sui-button
        @click="playMusic()"
        inverted
        class="sound-button"
        :icon="volumeIcon"
        color="yellow"
      ></sui-button>
    </sui-container>
  </div>
</template>
<script>
//utils
import { swTheme } from "../../utils";
export default {
  name: "CrawText",
  data: () => ({
    audio: new Audio(swTheme),
    sound: false,
  }),
  methods: {
    skipIntro() {
      this.audio.pause();
      this.$emit("skip-intro", false);
    },
    playMusic() {
      if (!this.sound) {
        this.audio.play();
        this.sound = true
      } else {
        this.audio.pause();
        this.sound = false
      }
    },
  },
  computed: {
    volumeIcon(){
      return this.sound ? "volume off" : "volume up"
    }
  }
};
</script>
<style scoped>
.skip-button {
  position: fixed;
  bottom: 30px;
  right: 50px;
}
.sound-button {
  position: fixed;
  bottom: 30px;
  /* right: 50px; */
}
@import url(https://fonts.googleapis.com/css?family=News+Cycle:400, 700);

#intro {
  opacity: 0;
  position: absolute;
  width: 90%;
  top: 50%;
  padding: 30px;
  transform: translateY(-50%);
  color: rgb(75, 213, 238);
  font-size: 200%;
  animation: intro 100s ease-out infinite;
  /* justify-content: center; */
}

#logo {
  opacity: 0;
  position: absolute;
  width: 50%;
  left: 50%;
  height: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: logo 100s ease-out infinite;
}

#scroller {
  position: absolute;
  width: 60%;
  margin: 0 20% 0 20%;
  height: 100%;
  font-size: 200%;
  text-align: justify;
  color: #ff6;
  transform: perspective(200px) rotateX(30deg);
}

#scroller div {
  position: absolute;
  top: 100%;
  animation: scroller 100s linear infinite;
}

#scroller p {
  margin: 1.8em 0 3.1em 0;
  line-height: 1.35em;
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font: 700 1em "News Cycle", sans-serif;
  letter-spacing: 0.15em;
}

/* ANIMATIONS */

@keyframes intro {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  1.5% {
    opacity: 1;
  }
  5.5% {
    opacity: 1;
  }
  6% {
    opacity: 0;
  }
}

@keyframes logo {
  9% {
    transform: translateX(-50%) translateY(-50%) scale(2);
    opacity: 0;
  }
  9.1% {
    opacity: 1;
  }
  14% {
    opacity: 1;
  }
  18% {
    transform: translateX(-50%) translateY(-50%) scale(0.1);
    opacity: 0;
  }
}

@keyframes scroller {
  0% {
    top: 100%;
    opacity: 0;
  }
  7% {
    top: 100%;
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    top: -250%;
    opacity: 0;
  }
}

/* IMAGES */

#logo {
  background-image: url("./../../assets/logo_sw.png"); /* CUSTOM LOGO */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
</style>
