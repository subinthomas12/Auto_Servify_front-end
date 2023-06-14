import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CdashboardComponent } from './cdashboard/cdashboard.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "cdashboard", component: CdashboardComponent },
  { path: "adashboard", component: AdashboardComponent },
  { path: "views", component:ViewComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
