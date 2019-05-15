import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {ToolBarComponent} from './components/tool-bar/tool-bar.component';
import {LanguageSelectComponent} from './components/nav-bar/language-select/language-select.component';
import {LoginPopupComponent} from './components/nav-bar/login-popup/login-popup.component';
import {RegisterComponent} from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterService} from './services/register-service/register.service';
import {AuthService} from './services/auth-service/auth.service';
import { MobileMenuComponent } from './components/nav-bar/mobile-menu/mobile-menu.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    ToolBarComponent,
    LanguageSelectComponent,
    LoginPopupComponent,
    RegisterComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [RegisterService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
