<template>
  <div>
    <div class="container mt-4">
      <h3 class="text-center mb-4">Visualize aqui os tipos de quartos</h3>
      <hr />

      <!-- Nomes dos quartos separados verticalmente -->
      <div class="room-names">
        <span class="room-name"> Quarto 1
          <hr />
          <img src="@/assets/fotoum.jpg" alt="Foto do Quarto 1" />  
          <ul> 
          <li>1 Cama king-size</li>
          <li>1 Cama solteiro</li>
          <li>Ar condicionado</li>
          <li>R$ 250,00/diária</li>
          </ul> 
          </span>
        <span class="vertical-bar"></span>

        <span class="room-name"> Quarto 2
          <hr />
          <img src="@/assets/fotodois.jpg" alt="Foto do Quarto 2" />
          <ul>
          <li>1 Cama king-size</li>
          <li>Ar condicionado</li>
          <li>Possui sacada</li>
          <li>R$ 350,00/diária</li>
          </ul>
          </span>
        <span class="vertical-bar"></span>

        <span class="room-name"> Quarto 3
          <hr />
          <img src="@/assets/fototres.jpg" alt="Foto do Quarto 3" />
          <ul>
          <li>1 Cama king-size</li>
          <li>Ar condicionado</li>
          <li>Possui sacada</li>
          <li>Possui lareira</li>
          <li>R$ 450,00/diária</li>
          </ul>
          
        </span>
      </div>
    </div>
    
    <!-- Botão para voltar à tela inicial -->
    <router-link to="/" class="btn btn-dark mx-">Voltar</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* Estilos se precisar */

/* Estilos para a linha vertical */
.room-names {
  display: flex;
  align-items: flex-start; /* nomes dos quartos na parte superior das barras */
  justify-content: center;
  margin-top: 60px; 
  position: relative; /* posicionamento absoluto dos nomes */
}

.room-name {
  margin: 0 10px; /* Espaço entre os nomes dos quartos */
  text-align: center; /* Centralizar o texto */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.room-name img {
  width: 250px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto; /* Mantenha a proporção da imagem */
}

.vertical-bar {
  border-left: 1px solid #1f1e1e; /* Estilo da linha vertical */
  height: 60vh; /* Altura da linha vertical até quase o final da tela */
  margin: 0 100px; /* Espaço entre a linha vertical e os nomes dos quartos */
}
</style>