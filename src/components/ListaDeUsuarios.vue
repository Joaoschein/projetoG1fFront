<template>
    <div class="tabela">
      <h1>Lista de Usuários</h1>
      <table class="user-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>Situação</th>
            <th>Quarto Reservado</th>
            <th>Data de Check-in</th>
            <th>Data de Check-Out</th>
            <th>Valor a Pagar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.nome }}</td>
            <td>{{ user.cpf }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.endereco }}</td>
            <td>{{ user.situacao }}</td>
            <td>{{ user.quartoReservado }}</td>
            <td>{{ user.checkin }}</td>
            <td>{{ user.checkout }}</td>
            <td>{{ user.pagamento }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$axios.get("http://localhost:8081/cliente/all")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      });
  },
};
</script> 
  
  <style scoped>

  .tabela {
    color: black;
  }
  .user-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .user-table th {
    border: 2px solid black;
    text-align: left;
    color: white;
    padding: 10px;
  }
  
  .user-table td {
    border: 2px solid black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    color: white;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: white;
  }
  </style>