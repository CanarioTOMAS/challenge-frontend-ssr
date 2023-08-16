
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListClientPage } from './pages/list-client/list-client.component';
import { FormClientPage } from './pages/form-client/form-client.component';
import { NgModule } from '@angular/core';
import { FormRubroPage } from './pages/form-rubro/form-rubro.component';
import { ListRubroPage } from './pages/list-rubro/list-rubro.component';
import { FormProductPage } from './pages/form-product/form-product.component';
import { ListProductPage } from './pages/list-product/list-product.component';
import { FormSalePage } from './pages/form-sale/form-sale.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '*', component: LoginComponent },
  { path: 'clients', component: ListClientPage},
  { path: 'client', component: FormClientPage},
  { path: 'rubro', component: FormRubroPage},
  { path: 'rubros', component: ListRubroPage},
  { path: 'product', component: FormProductPage},
  { path: 'products', component: ListProductPage},
  { path: 'sale', component: FormSalePage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
