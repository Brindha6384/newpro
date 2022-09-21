import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DiscountComponent } from './discount/discount.component';

import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';

import { MenuComponent } from './menu/menu.component';
import {MatInputModule} from '@angular/material/input';




import { ContactComponent } from './contact/contact.component';
import { TrendComponent } from './trend/trend.component';

import { WesternTopsComponent } from './western-tops/western-tops.component';
import { SareesComponent } from './sarees/sarees.component';
import { MensComponent } from './mens/mens.component';
import { KurthiComponent } from './kurthi/kurthi.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BuynowComponent } from './buynow/buynow.component';
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




import { FavouriteComponent } from './favourite/favourite.component';



const routes: Routes = [
 
  {
    path:'',component:HomeComponent,
  
},
  {path:'cat',component:CatComponent},
  {path:'kurthi',component:KurthiComponent},
  {path:'cont',component:ContactComponent},

  {path:'Western',component:WesternTopsComponent},
  {path:'sarees',component:SareesComponent},
  {path:'mens',component:MensComponent},
 
  {path:'trend',component:TrendComponent},
  {path:'festiv',component:OfferComponent},
  {path:'dis',component:DiscountComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'kids',component:KidsComponent},

  {path:'buynow/:id',component:BuynowComponent },
  {path:'wsbuynow/:id',component: WsbuynowComponent  },
 
  {path:'kdbuynow/:id',component:KdbuynowComponent  },
  {path:'mnbuynow/:id',component:MnbuynowComponent  },
  {path:'sabuynow/:id',component:SabuynowComponent },

  {path:'review',component:ReviewsComponent},

 
  {path:'favkid/:id',component:FavkidComponent   },
  {path:'favmen/:id',component:FavmenComponent },
  {path:'favsaree/:id',component:FavsareeComponent  },
  {path:'favwest/:id',component: FavwestComponent },
 

  
  {path:'favourite/:id',component:FavouriteComponent },

 

 
 
 
  
  
];



@NgModule({

  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
