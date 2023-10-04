import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component"
import { ProductCrudComponent } from "./views/product-crud/product-crud.component"
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { EquipamentoComponent } from './components/equipamento/equipamento/equipamento.component';
import { EquipamentoCreateComponent } from './components/equipamento/equipamento-create/equipamento-create.component';
import { ClientesComponent } from './components/empresas/clientes/clientes.component';
import { ClientesCreateComponent } from './components/empresas/clientes-create/clientes-create.component';
import { EquipamentoDeleteComponent } from './components/equipamento/equipamento-delete/equipamento-delete.component';
import { EquipamentoUpdateComponent } from './components/equipamento/equipamento-update/equipamento-update.component';
import { ClientesDeleteComponent } from './components/empresas/clientes-delete/clientes-delete.component';
import { ClientesUpdateComponent } from './components/empresas/clientes-update/clientes-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  // ---------- PRODUTOS ----------
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/read",
    component: ProductReadComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },


  // ---------- EQUIPAMENTOS ----------
  {
    path: "equipamento",
    component: EquipamentoComponent
  },
  {
    path: "equipamento/update/:id",
    component: EquipamentoUpdateComponent
  },
  {
    path: "equipamento/create",
    component: EquipamentoCreateComponent
  },
  {
    path: "equipamento/delete/:id",
    component: EquipamentoDeleteComponent
  },

  // ---------- EMPRESA ----------
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "clientes/create",
    component: ClientesCreateComponent
  },
  {
    path: "clientes/delete/:id",
    component: ClientesDeleteComponent
  },{
    path: "clientes/update/:id",
    component: ClientesUpdateComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
