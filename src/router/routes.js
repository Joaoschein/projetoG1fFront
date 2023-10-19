import Pagina1Component from '../views/PaginaUm.vue'
import Pagina2Component from '../views/PaginaDois.vue'
import Pagina3Component from '../views/PaginaTres.vue'
import CadastroFormComponent from '../components/CadastroForm.vue'
import ListaDeUsuarios from '../components/ListaDeUsuarios.vue'
import PagamentoHotel from '../components/PagamentoHotel.vue'
import CheckIn from '../components/CheckIn.vue'

const routes = [
  { path: '/paginaUm', component: Pagina1Component },
  { path: '/paginaDois', component: Pagina2Component },
  { path: '/cadastroForm', component: CadastroFormComponent }, 
  { path: '/paginaTres', component: Pagina3Component },
  { path: '/listaUsuarios', component: ListaDeUsuarios},
  { path: '/pagamento', component: PagamentoHotel},
  { path: '/checkin', component: CheckIn}
]

export default routes