import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MenuComponent } from './menu/menu.component';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import {RegisterComponent} from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { UpdateCategoriesComponent } from './Categories/update-categories/update-categories.component';



const routes: Routes = [
  { path :'front',component: MenuFrontComponent} , 
{path : '', component:MenuComponent, children : [
  { path :'list',component: ListCategoriesComponent},
  { path :'listP',component: ListProduitsComponent},
  { path :'register',component: RegisterComponent},
  { path :'login',component: LoginComponent},
  { path :'update/:categoryId',component: UpdateCategoriesComponent}

]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
