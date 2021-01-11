import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewsComponent } from './news/news.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { AuthGuard } from './shared/auth.guard';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id/:title', component: ProductDetailComponent },
  { path: 'news', component: NewsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerv2', component: RegisterReactiveComponent},
  { path: 'secure', component: SecureComponent},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' , canActivate: [AuthGuard]  },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }) // วิธีนี้คือ lazy load module
    // ถ้าอยากให้โหลดทุก module มาตั้งแต่ครั้งแรกเลยจะใช้
    // RouterModule.forRoot(routes, { useHash: true , preloadingStrategy: PreloadAllModules} )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
