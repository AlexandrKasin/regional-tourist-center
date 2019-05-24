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
import {MobileMenuComponent} from './components/nav-bar/mobile-menu/mobile-menu.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './ngrx/reducers/auth.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ToursPageComponent} from './components/tours-page/tours-page.component';
import {TourCardComponent} from './components/tours-page/tour-card/tour-card.component';
import {SelectComponent} from './base-components/select/select.component';
import {NgxEditorModule} from 'ngx-editor';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {UserSelectComponent} from './components/nav-bar/user-select/user-select.component';
import {TourFilterComponent} from './components/tours-page/tour-filter/tour-filter.component';
import {Ng5SliderModule} from 'ng5-slider';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { CollapsibleSelectComponent } from './base-components/collapsible-select/collapsible-select.component';
import { CheckboxComponent } from './base-components/checkbox/checkbox.component';
import { PageSelectorComponent } from './components/page-selector/page-selector.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tours', component: ToursPageComponent},
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
    ToursPageComponent,
    TourCardComponent,
    SelectComponent,
    UserSelectComponent,
    TourFilterComponent,
    CollapsibleSelectComponent,
    CheckboxComponent,
    PageSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    StoreModule.forRoot({authParams: authReducer}),
    StoreDevtoolsModule.instrument(),
    TooltipModule.forRoot(),
    NgxEditorModule,
    Ng5SliderModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [RegisterService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
