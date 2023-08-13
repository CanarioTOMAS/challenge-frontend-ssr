
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListClientPage } from './pages/list-client/list-client.component';
import { FormClientPage } from './pages/form-client/form-client.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ListClientPage},
  { path: 'client', component: FormClientPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
