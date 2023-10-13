import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { ProductReadComponent } from './components/product/product-read/product-read.component';


import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EquipamentoComponent } from './components/equipamento/equipamento/equipamento.component';
import { EquipamentoCreateComponent } from './components/equipamento/equipamento-create/equipamento-create.component';
import { ClientesComponent } from './components/empresas/clientes/clientes.component';
import { ClientesCreateComponent } from './components/empresas/clientes-create/clientes-create.component';
import { EquipamentoDeleteComponent } from './components/equipamento/equipamento-delete/equipamento-delete.component';
import { EquipamentoUpdateComponent } from './components/equipamento/equipamento-update/equipamento-update.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClientesDeleteComponent } from './components/empresas/clientes-delete/clientes-delete.component';
import { ClientesUpdateComponent } from './components/empresas/clientes-update/clientes-update.component';



registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    EquipamentoComponent,
    EquipamentoCreateComponent,
    ClientesComponent,
    ClientesCreateComponent,
    EquipamentoDeleteComponent,
    EquipamentoUpdateComponent,
    ClientesDeleteComponent,
    ClientesUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule


  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
