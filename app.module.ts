import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { CatComponent } from './cat/cat.component';

import { OfferComponent } from './offer/offer.component';
import { DiscountComponent } from './discount/discount.component';

import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TrendComponent } from './trend/trend.component';
import { ContactComponent } from './contact/contact.component';

import { WesternTopsComponent } from './western-tops/western-tops.component';

import { MensComponent } from './mens/mens.component';
import { SareesComponent } from './sarees/sarees.component';
import { KurthiComponent } from './kurthi/kurthi.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BuynowComponent } from './buynow/buynow.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { WsbuynowComponent } from './wsbuynow/wsbuynow.component';
import { KdbuynowComponent } from './kdbuynow/kdbuynow.component';
import { MnbuynowComponent } from './mnbuynow/mnbuynow.component';
import { SabuynowComponent } from './sabuynow/sabuynow.component';

import { FavkidComponent } from './favkid/favkid.component';
import { FavmenComponent } from './favmen/favmen.component';
import { FavsareeComponent } from './favsaree/favsaree.component';
import { FavwestComponent } from './favwest/favwest.component';
import { KidsComponent } from './kids/kids.component';
import { AboutComponent } from './about/about.component';






const routes: Routes = [
 
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
   
    OfferComponent,
    DiscountComponent,
    
 
    MenuComponent,
   

       
      
                TrendComponent,
                ContactComponent,
                WesternTopsComponent,
            
                MensComponent,
                SareesComponent,
                KurthiComponent,
                ReviewsComponent,
                BuynowComponent,
                FavouriteComponent,
                WsbuynowComponent,
                KdbuynowComponent,
                MnbuynowComponent,
                SabuynowComponent,
               
                FavkidComponent,
                                FavmenComponent,
                                FavsareeComponent,
                                FavwestComponent,
                                KidsComponent,
                                AboutComponent,
                
               
       
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),
    MatButtonModule,MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,MatToolbarModule,MatIconModule,MatSidenavModule,
    MatListModule,MatCardModule,MatSnackBarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
