//-----------------------------------module------------------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';
//-----------------------------------components------------------------------------------------//
import { WelcomePageComponent } from './welcome-page.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { CustomersComponent } from 'src/app/components/customers/customers.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { MeetTeamComponent } from 'src/app/components/meet-team/meet-team.component';
import { OurServicesComponent } from 'src/app/components/our-services/our-services.component';
import { PricingComponent } from 'src/app/components/pricing/pricing.component';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';
import { WorksComponent } from 'src/app/components/works/works.component';
import { AboutComponent } from '../../components/about/about.component';
import { ShopingComponent } from 'src/app/components/shoping/shoping.component';


//-----------------------------------services------------------------------------------------//
import { TeamService } from 'src/app/components/meet-team/team.service';
import { GalleryService } from 'src/app/components/gallery/gallery.service';

const routes: Routes = [
  { path: "", component: WelcomePageComponent }
];

@NgModule({
  declarations: [WelcomePageComponent, WorksComponent,ShopingComponent, AboutComponent, NavbarComponent, BlogComponent, QuestionsComponent, BannerComponent, ContactComponent, CustomersComponent, FooterComponent, GalleryComponent, MeetTeamComponent, OurServicesComponent, PricingComponent,],
  imports: [
    CommonModule,FlexLayoutModule,SharedModule, RouterModule.forRoot(routes)
  ],
  providers:[TeamService,GalleryService]
})
export class WelcomePageModule { }
