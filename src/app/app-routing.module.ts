import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FotosComponent } from './fotos/fotos.component';
import { SobreComponent } from './sobre/sobre.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'fotos', component: FotosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
