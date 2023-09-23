<template>
  <div class="container mt-4">
    <h3 class="text-center mb-4">Realize aqui a reserva do cliente</h3>
    <hr />

    <!-- Nome e CPF -->
    <div class="d-flex justify-content-between mb-3">
      <div class="w-30">
        <label for="nome">Nome:</label>
        <input class="form-control" type="text" name="nome" id="nome" placeholder="Digite o nome aqui">
      </div>
      <div class="w-30">
        <label for="cpf">CPF:</label>
        <input class="form-control" type="text" name="cpf" id="cpf" placeholder="000.000.000-00" inputmode="numeric" pattern="[0-9]*">
      </div>
    </div>
    <hr />

    <!-- Dados do Acompanhante -->
    <h4 class="text-center mb-4 custom-heading">Dados do Acompanhante</h4>
    <div class="d-flex justify-content-between mb-3">
      <div class="w-30">
        <label for="nome2">Nome do Acompanhante:</label>
        <input class="form-control" type="text" name="Acompanhante" id="Acompanhante" placeholder="Digite aqui o nome do acompanhante">
      </div>
      <div class="w-30">
        <label for="cpf2">CPF:</label>
        <input class="form-control" type="text" name="cpf" id="cpf" placeholder="000.000.000-00" inputmode="numeric" pattern="[0-9]*">
      </div>
    </div>
    <hr />

     <!-- Quarto escolhido e Check in -->
      <h4 class="text-center mb-4 custom-heading">Quarto Escolhido</h4>
        <div class="d-flex justify-content-between mb-3">

      <!-- Campo do número do quarto -->
        <div class="w-30">
          <label for="numeroQuarto">Quarto 1, 2 ou 3:</label>
      <input class="form-control" type="text" name="numeroQuarto" id="numeroQuarto" placeholder="Digite aqui o número do quarto" inputmode="numeric" pattern="[0-9]*">
     </div>

     

       <!-- Campo de Check in -->
        <div class="w-30">
            <b-form-group>
            <b-form-checkbox-group v-model="form.status">
        <b-form-checkbox value="active">Check in</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</div>


    <!-- Botões -->
    <div class="d-flex justify-content-between mt-4">
      <router-link to="/" class="btn btn-dark mx-2">Voltar</router-link>
      <button type="button" class="btn btn-dark mx-auto" @click="salvarFormulario">Salvar Reserva</button>
    </div>
  </div>
</template>
 
 <script>
 export default {
   data() {
     return {
       exibirMensagem: false,
       form: {
         // propriedades do formulario
       }
     };
   },
   methods: {
     salvarFormulario() {
       //  simular o salvamento aqui
       this.onSubmit();
 
       // mensagem de sucesso
       this.exibirMensagem = true;
 
       
       setTimeout(() => {
         this.exibirMensagem = false;
       }, 3000); // Esconde após 3 segundos 
     },
     onSubmit() {
       // Salvamento do formulário
       alert("Reserva Realizada!");
     }
   }
 };
 </script>
 
 <style>
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