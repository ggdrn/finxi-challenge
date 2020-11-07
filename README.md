# Desafio Finxi

## Sobre o Projeto

O projeto tem como objetivo buscar gifs usando a [API Giphy](https://developers.giphy.com/branch/master/docs/api/endpoint/#search), salvar as Gifs encontradas e rendereizar as telas, mostrado de forma intuitiva com auxílio do [Semantic UI VueJs](https://semantic-ui-vue.github.io/#/) e rolagem infinita.

O projeto foi planejado usando um quadro no [Miro](https://miro.com/app/board/o9J_kgXta9Y=/)

O projeto usou a arquitutera flux para ser reativo usando o módulo [Vuex](https://vuex.vuejs.org/)

O projeto foi todo desenvolvido com o Framework JavaScript [VueJs](https://vuejs.org/).

O projeto foi colocado em um contâiner [Docker](https://www.docker.com/products/docker-desktop).

Para inicialização do projeto foi utilizado [CLI](https://cli.vuejs.org/) do VueJS.

## Incializando o projeto

Acesse o [repositório](https://github.com/ggdrn/finxi-challenge) do meu desafio

Execute o comando

```
git clone https://github.com/ggdrn/finxi-challenge
```

Logo em seguida acesse a raiz do diretório para escolher a instalação e execução do desafio.

## Instalação e Execução

### **Com Docker-Composer:**

* **BUILD E SOBE O CONTAINER:** 

```
docker-compose up
```

### **Com Docker:**

* **BUILDAR A IMAGEM:** 

```
docker build -t finxi-challenge-image .
```
* **SUBIR O CONTAINER:** 

```
docker run -d -p 8080:8080 --name finxi-challenge finxi-challenge-image
```

* **INICIAR O CONTAINER:** 

```
docker start finxi-challenge
```

* **PARAR O CONTAINER:** 

```
docker stop -t 0 finxi-challenge
```

### **Node:**

* **INSTALAR AS DEPENDECIAS:** 

```
npm install
```

* **INICIAR O PROJETO:** 
```
npm run serve
```

## Projeto inicializado

Ao inicializar o projeto, este poderá ser acessado em: **http://localhost:8080**

Ou você pode acessar o projeto online em: **https://finxi-challange.web.app/**
