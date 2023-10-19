<template>
  <div>
    <h1>Página De Administração</h1>
    <router-link to="/listaUsuarios" class="link">Lista de Usuarios</router-link>
    <router-link to="/pagamento" class="link">Pagamento</router-link>
    <router-link to="/checkin" class="link">CheckIn / CheckOut</router-link>

    <div>
      <router-view></router-view>
    </div>

  </div>

  
</template>

<script>
export default {
  methods: {
    redirectToPage(pageName) {
      this.$router.push({ name: pageName });
    },
  },
};
</script>

<style>
.link {
  text-decoration: none; 
  color: #007bff; 
  margin-right: 20px; 
  font-weight: bold; 
}
</style>