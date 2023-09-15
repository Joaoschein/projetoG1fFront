<template>
  <div class="container mt-4">
    <h3 class="text-center mb-4">Finalize aqui a hospedagem do cliente</h3>
    <hr />

   <!-- Campo do Nome -->
    <div class="d-flex justify-content-between mb-3">
  <div class="w-30">
    <label for="nome">Nome:</label>
    <input class="form-control" type="text" name="nome" id="nome" placeholder="Digite o nome do hóspede aqui">
  </div>

  <!-- Campo do Número do Quarto -->
  <div class="w-30">
    <label for="numeroQuarto">Número do quarto:</label>
    <input class="form-control" type="text" name="numeroQuarto" id="numeroQuarto" placeholder="Digite o número do quarto aqui">
  </div>
      </div>
    <hr />

      <h3 class="text-center mb-4">Consumos</h3>
    <hr />

     <!-- Checking -->
      <b-form-group>
      <b-form-checkbox-group v-model="form.status">
        <b-form-checkbox value="inactive">CheckOut</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <!-- Botões -->
    <div class="d-flex justify-content-between mt-4">
      <router-link to="/" class="btn btn-dark mx-2">Voltar</router-link>
      <button type="button" class="btn btn-dark mx-auto" @click="salvarFormulario">Salvar</button>
    </div>
  </div>
  
  </template>
    
    <script>
    export default {
     data() {
        return {
          exibirMensagem: false,
          form: {
            status: [] 
      }
    };
  },
  methods: {
    salvarFormulario() {
      //  lógica de salvamento aqui
      alert("CheckOut finalizado!");
    }
  }
};
    </script>
    
    <style scoped>
    .w-30 {
     width: 30%;
   }
   
   /* Estilizando o placeholder */
   ::placeholder {
     font-style: italic;
     font-size: 14px; /* Defina o tamanho desejado */
     color: #3d3c3c;
   }
    </style>