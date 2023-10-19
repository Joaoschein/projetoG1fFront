<template>
  <div class="payment-form">
    <h1>Formulário de Pagamento</h1>
    <form @submit.prevent="pay">
      <div class="form-group">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf" />
      </div>
      <button class="button-pag" type="submit">Pagar</button>
      <button class="button-pag" type="button" @click="fetchClientData">Consultar</button>
    </form>

    <div v-if="paymentSuccess" class="success-message">
      Pagamento efetuado com sucesso!
    </div>

    <div v-if="clientData" class="client-data">
      <h2>Dados do Cliente</h2>
      <p><strong>Nome:</strong> {{ clientData.nome }}</p>
      <p><strong>Total a pagar R$</strong> {{ clientData.pagamento }}</p>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        cpf: "",
        clientData: null,
        paymentSuccess: false,
      };
    },
    methods: {
      async pay() {
      try {
        await this.$axios.put(`http://localhost:8081/cliente/pagar/${this.cpf}`); 

        this.cpf = "";

      } catch (error) {
        console.error("Erro ao processar pagamento:", error);
      }

      setTimeout(() => {
        this.paymentSuccess = true;
      }, 500);
    },
      async fetchClientData() {
        try {
          const response = await this.$axios.get(`http://localhost:8081/cliente/cpf/${this.cpf}`);
          this.clientData = response.data;
        } catch (error) {
          console.error("Erro ao buscar dados do cliente:", error);
        }
      },
    },
  };
  </script>

<style scoped>
.payment-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-pag {
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
}

.client-data {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  color: black;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: 1px solid #388e3c;
  border-radius: 5px;
  text-align: center;
}
</style>