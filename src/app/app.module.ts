//-----------------------------------module------------------------------------------------//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageModule } from './pages/welcome-page/welcome-page.module';

//-----------------------------------components------------------------------------------------//
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
