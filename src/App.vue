<template>
  <div id="app">
    <nav>
      <router-link to="/paginaUm">Visualização de Quartos</router-link>
      <router-link to="/paginaDois">Reservar Quartos</router-link>
      <router-link to="/cadastroForm">Formulário de Cadastro</router-link>
      <router-link to="/paginaTres">Administração</router-link>
    </nav>

    <div class="container mt-4">
      <!-- Conteúdo do componente  -->
      <router-view></router-view>
    </div>

    <!-- Conteúdo da página inicial, condicionado à página atual -->
    <div class="centered-image" v-if="$route.path === '/'">
    <img src="@/assets/logo.jpg" alt="Imagem de boas-vindas" class="fullscreen-image" />
    <h3 class="text-center mb-4 welcome-message-top">Bem-vindo ao Hotel Anywhere </h3>
  </div>
  </div>
</template>

<style>
/* Estilos para a imagem em tela cheia */
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Coloca a imagem atrás do conteúdo */
}

/* Estilos para a mensagem "Bem-vindo" */
.welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  padding: 20px;
  border-radius: 5px;
  z-index: 1; /* Coloca a mensagem sobre a imagem */
}

/* Estilos para a barra de navegação */
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 40px;

  .welcome-message-top {
  margin-top: 40px; /* Ajuste o valor de acordo com sua preferência */
}
}
</style>
