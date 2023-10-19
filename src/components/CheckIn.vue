<template>
  <div class="checkin-card">

    <div class="check">
      <h2>Check-In</h2>
      <form @submit.prevent="performCheckin">
        <div class="form-group">
          <label for="cpf1">CPF:</label>
          <input type="text" id="cpf1" v-model="cpf1" />
        </div>
        <button type="submit">Checkin</button>
      </form>
      <div v-if="checkinSuccess" class="success-message">
        Check-in efetuado com sucesso!
      </div>
    </div>

    <div class="check">
      <h2>Check-Out</h2>
      <form @submit.prevent="performCheckout">
        <div class="form-group">
          <label for="cpf2">CPF:</label>
          <input type="text" id="cpf2" v-model="cpf2" />
        </div>
        <button type="submit">Checkout</button>
      </form>
      <div v-if="checkoutSuccess" class="success-message">
        Check-out efetuado com sucesso!
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf1: "",
      cpf2: "",
      checkinSuccess: false,
      checkoutSuccess: false,
    };
  },
  methods: {
    async performCheckin() {
      try {
        await this.$axios.put(`http://localhost:8081/cliente/checkin/${this.cpf1}`);

        setTimeout(() => {
          this.checkinSuccess = true;
        }, 500);

      } catch (error) {
        console.error("Erro ao realizar check-out:", error);
      }
    },
    async performCheckout() {
      try {
        await this.$axios.put(`http://localhost:8081/cliente/checkout/${this.cpf2}`);

        setTimeout(() => {
          this.checkoutSuccess = true;
        }, 500);

      } catch (error) {
        console.error("Erro ao realizar check-out:", error);
      }
    },
  },
};
</script>

<style scoped>
.checkin-card {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #000;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
}

.check {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
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

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
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