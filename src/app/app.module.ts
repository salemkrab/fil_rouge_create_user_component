import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MeteoPageComponent } from './components/meteo-page/meteo-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';
import { PlanningPageComponent } from './components/planning-page/planning-page.component';
import { ProfileAdminViewComponent } from './components/profile-admin-view/profile-admin-view.component';
import { ProfileUserViewComponent } from './components/profile-user-view/profile-user-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    HomePageComponent,
    LoginPageComponent,
    MeteoPageComponent,
    AdminPageComponent,
    CreateUserPageComponent,
    PlanningPageComponent,
    ProfileAdminViewComponent,
    ProfileUserViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
