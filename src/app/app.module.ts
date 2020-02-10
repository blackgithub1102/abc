import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebase);
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { Form1Component } from './pages/form1/form1.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'form', component: Form1Component },
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    AppHeaderComponent,
    AppToolbarComponent,
    RegisterComponent,
    HomepageComponent,
    Form1Component,
    
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
