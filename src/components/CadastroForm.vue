<template>
  <div>
    <h1>Formulário de Cadastro</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="formData.nome" required>
      </div>
      <div class="form-group">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="formData.cpf" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" v-model="formData.endereco" required>
      </div>
      <div class="form-group">
        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" v-model="formData.cidade" required>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        nome: '',
        cpf: '',
        email: '',
        endereco: '',
        cidade: ''
      }
    };
  },
  methods: {
    submitForm() {
      const apiUrl = 'http://localhost:8081/cliente/new';

      axios.post(apiUrl, this.formData)
        .then(response => {
          console.log('Dados enviados com sucesso:', response.data);
          this.formData = {
            nome: '',
            cpf: '',
            email: '',
            endereco: '',
            cidade: ''
          };
        })
        .catch(error => {
          console.error('Erro ao enviar os dados:', error);
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