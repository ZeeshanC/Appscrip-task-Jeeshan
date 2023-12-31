import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { UtilService } from './services/util.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HttpClientModule,
    FooterComponent
  ],
  providers: [
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
