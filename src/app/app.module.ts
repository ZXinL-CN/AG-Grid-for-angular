import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { cellRendererComponent } from './grid/cellRender.component';

@NgModule({
  declarations: [
    AppComponent,
    cellRendererComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
