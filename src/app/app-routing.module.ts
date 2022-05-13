import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin-routing.module').then((admin) => admin.AdminRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
