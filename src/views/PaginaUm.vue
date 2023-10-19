<template>
  
  <div> 
      <h1 class="title">Lista de Registros</h1>
    <div class="container c2">  
      <div class="card-row" v-for="registro in registros" :key="registro.id">
        <div class="card">
          <img src="../assets/fototres.jpg" alt="Imagem do Registro" class="card-image" />
          <h2 class="card-title">Quarto: {{ registro.numero }}</h2>
          <p class="card-description">Tipo: {{ registro.tipo }}</p>
          <p class="card-description">descricao: {{ registro.descricao }}</p>
          <p class="card-description">Valor R$:{{ registro.valor }}</p>
          <p class="card-date">Situacao: {{ registro.situacao }}</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      registros: []
    };
  },
  created() {
    const apiUrl = 'http://localhost:8081/quarto/all';

    axios.get(apiUrl)
      .then(response => {
        this.registros = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar registros:', error);
      });
  }
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.c2{
  background-color: rgba(0, 0, 0, 0); 
}
.card-row {
  margin: 10px;
  flex: 0 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  box-sizing: border-box;
}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 20px;
  margin: 10px 0;
}

.card-description {
  font-size: 16px;
  margin: 10px 0;
  color: #333;
}

.card-date {
  font-size: 14px;
  color: #777;
}

</style>