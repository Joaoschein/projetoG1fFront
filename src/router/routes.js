import Pagina1Component from '../views/PaginaUm.vue'
import Pagina2Component from '../views/PaginaDois.vue'
import Pagina3Component from '../views/PaginaTres.vue'
import CadastroFormComponent from '../components/CadastroForm.vue'

const routes = [
  { path: '/paginaUm', component: Pagina1Component },
  { path: '/paginaDois', component: Pagina2Component },
  { path: '/cadastroForm', component: CadastroFormComponent }, 
  { path: '/paginaTres', component: Pagina3Component },
]

export default routes