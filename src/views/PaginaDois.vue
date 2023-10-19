<template>
  <div>
    <h1>Formulário de Reserva de Quarto</h1>
    <form @submit.prevent="submitReservation">
      <div class="form-group">
        <label for="quarto">Número do Quarto:</label>
        <input type="text" id="quarto" v-model="reservationData.quarto" required>
      </div>
      <div class="form-group">
        <label for="cpf">CPF do Cliente:</label>
        <input type="text" id="cpf" v-model="reservationData.cpf" required>
      </div>
      <div class="form-group">
        <label for="chekin">Data de Check-in:</label>
        <input type="date" id="chekin" v-model="reservationData.chekin" required>
      </div>
      <div class="form-group">
        <label for="chekout">Data de Check-out:</label>
        <input type="date" id="chekout" v-model="reservationData.chekout" required>
      </div>
      <button type="submit">Reservar Quarto</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reservationData: {
        quarto: '',
        cpf: '',
        chekin: '',
        chekout: ''   
      }
      
    };
    
  },
  
  methods: {
    submitReservation() {
      console.log('Dados da reserva a ser enviados:', this.reservationData)
      const apiUrl = 'http://localhost:8081/cliente/reservar';

      axios.put(apiUrl, this.reservationData)
        .then(response => {
          console.log('Reserva efetuada com sucesso:', response.data);
          this.reservationData = {
            quarto: '',
            cpf: '',
            chekin: '',
            chekout: ''
          };
        })
        .catch(error => {
          console.error('Erro ao efetuar a reserva:', error);
        });

    }
  }
};
</script>

<style>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>