<template>
  <div>
    <div class="container mt-4">
      <h3 class="text-center mb-4">Visualize aqui os tipos de quartos</h3>
      <hr />

      <!-- quartos -->
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
    
    <!-- Botão voltar à tela inicial -->
    <router-link to="/" class="btn btn-dark mx-">Voltar</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

/*linha vertical */
.room-names {
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  margin-top: 60px; 
  position: relative; /* posicionamento dos nomes */
}

.room-name {
  margin: 0 10px; /*  nomes dos quartos */
  text-align: center; /* Centralizar o texto */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.room-name img {
  width: 250px; 
  height: auto; 
}

.vertical-bar {
  border-left: 1px solid #1f1e1e;
  height: 60vh; 
  margin: 0 100px; 
}
</style>