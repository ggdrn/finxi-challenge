<template>
  <div>
    <div class="fade"></div>
    <section class="star-wars">
      <div class="crawl">
        <div class="title">
          <p>Desafio Finxi</p>
          <h1>Desenvolvedor Front-End Pleno</h1>
        </div>

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
    </section>
  </div>
</template>
<script>
export default {
	name: "CrawText",
	created(){
		
	},
  methods: {
    skipIntro() {
      this.$emit("skip-intro", false);
    },
  },
};
</script>
<style>
body {
  width: 100%;
  height: 100%;
  /* background: #000; */
  overflow: hidden;
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  /* line-height: 150%; */
  perspective: 700px;
  text-align: justify;
}

.crawl {
  position: relative;
  top: 99999px;
  transform-origin: 50% 100%;
  animation: crawl 60s linear;
}

.crawl > .title {
  font-size: 90%;
  text-align: center;
}

.crawl > .title h1 {
  margin: 0 0 100px;
  text-transform: uppercase;
}

@keyframes crawl {
  0% {
    top: -100px;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
</style>
