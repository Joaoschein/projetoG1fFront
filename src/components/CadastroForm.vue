<template>
    <div id="app"> 
     <div class="container mt-4">
       <h3 class="text-center mb-4">Realize aqui o Formulário de Cadastro do cliente</h3>
       <hr />
   
       <!-- Nome -->
       <div class="d-flex justify-content-between mb-3">
         <div class="w-30">
           <label for="nome">Nome:</label>
           <input class="form-control" type="text" name="nome" id="nome" placeholder="Digite o nome aqui">
         </div>
         <div class="form-group"></div>
   
         <!-- E-mail -->
         <div class="w-30">
           <label for="email">E-mail:</label>
           <input class="form-control" type="text" name="email" id="email" placeholder="Digite o e-mail aqui">
         </div>
         <div class="form-group"></div>
         <div class="w-30">
           
           <!-- Status -->
         <label>Status:</label>
           <b-form-group>
           <b-form-checkbox-group v-model="form.status">
             <b-form-checkbox value="active">Ativo</b-form-checkbox>
             <b-form-checkbox value="inactive">Inativo</b-form-checkbox>
           </b-form-checkbox-group>
         </b-form-group>
       </div>
       </div>
   
       <!-- CPF -->
       <div class="d-flex justify-content-between mb-3">
         <div class="w-30">
           <label for="cpf">CPF:</label>
           <input class="form-control" type="text" name="cpf" id="cpf" placeholder="000.000.000-00" inputmode="numeric" pattern="[0-9]*">
         </div>
         <div class="form-group"></div>
   
         <!-- RG -->
         <div class="w-30">
           <label for="rg">RG:</label>
           <input class="form-control" type="text" name="rg" id="rg" placeholder="0000000000" inputmode="numeric" pattern="[0-9]*">
         </div>
         <div class="form-group"></div>
   
         <!-- Data de Nascimento -->
         <div class="w-30">
          <label for="dataDeNascimento">Data de Nascimento:</label>
            <input class="dataNascimento form-control" type="text" name="data" id="dataNascimento" placeholder="dd/mm/yyyy" pattern="\d{2}/\d{2}/\d{4}">
          </div>
          <div class="form-group"></div>
          </div>
       <hr />
   
       <!-- Endereço -->
       <h4 class="text-center mb-4 custom-heading">Endereço</h4>
         <div class="d-flex justify-content-between mb-3">
           <div class="w-30">
           <label for="endereço">Endereço:</label>
           <input class="form-control" type="text" name="endereço" id="endereço" placeholder="Digite aqui o endereço aqui">
         </div>
   
       <!-- Cidade -->
       <div class="w-30">
           <label for="rg">Cidade:</label>
           <input class="form-control" type="text" name="cidade" id="cidade" placeholder="Digite aqui a cidade aqui">
         </div>
         <div class="form-group"></div>
       
   
       <!-- Complemento -->
       <div class="w-30">
           <label for="complemento">Complemento:</label>
           <input class="form-control" type="text" name="complemento" id="complemento" placeholder="Digite aqui o complemento">
         </div>
       </div>
   
       <hr />
   
      <!-- Botão Salvar -->
      <div class="d-flex justify-content-center mt-4">
         <button type="button" class="btn btn-dark mx-2" @click="salvarFormulario">Salvar</button>
       </div>

       <!-- Botão para voltar a tela do Inicial -->
        <router-link to="/" class="btn btn-dark mx-2">Voltar</router-link>
   
      <!-- Notificação de sucesso -->
      <b-alert v-model="exibirMensagem" variant="success" dismissible>
         Formulário salvo com sucesso!
       </b-alert>
     </div>
   </div>
     
   </template>
   
   <script>
   export default {
     data() {
       return {
         exibirMensagem: false,
         form: {
           // formulario
         }
       };
     },
     methods: {
       salvarFormulario() {
         //  simular o salvamento 
         this.onSubmit();
   
         // mensagem de sucesso
         this.exibirMensagem = true;
   
         
         setTimeout(() => {
           this.exibirMensagem = false;
         }, 3000); // Esconder após 3 segundos 
       },
       onSubmit() {
         // Salvamento do formulário aqui
         alert("Formulário salvo!");
       }
     }
   };
   </script>
   
   <style>
   .w-30 {
     width: 30%;
   }
   
   /* placeholder */
   ::placeholder {
     font-style: italic;
     font-size: 14px;
     color: #3d3c3c;
   }
   
   </style>