import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: "welcome", loadChildren: () =>
      import("./pages/welcome-page/welcome-page.module").then(
        m => m.WelcomePageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
