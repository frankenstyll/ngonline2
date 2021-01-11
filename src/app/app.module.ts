import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // สำหรับเขียน form

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EngtoThaiPipe } from './shared/engto-thai.pipe';
import { RegisterComponent } from './register/register.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { LoginComponent } from './login/login.component';
import { SecureComponent } from './secure/secure.component';
import { CeoTableComponent } from './ceo-table/ceo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    NewsComponent,
    PagenotfoundComponent,
    EngtoThaiPipe,
    RegisterComponent,
    RegisterReactiveComponent,
    LoginComponent,
    SecureComponent,
    CeoTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
