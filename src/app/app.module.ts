import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { HomeComponent } from './IT18151220/home/home.component';
import { GalleryComponent } from './IT18151220/gallery/gallery.component';
import { LankaMapComponent } from './IT18151220/lanka-map/lanka-map.component';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { AboutusComponent } from './IT18035568/aboutus/aboutus.component';
import { FeedbackComponent } from './IT18190694/feedback/feedback.component';
import { HoteldetailsComponent } from './IT18165876/hoteldetails/hoteldetails.component';
import { TourpackagesComponent } from './IT18134940/tourpackages/tourpackages.component';
import { EventsComponent } from './IT18190694/events/events.component';
import { EventComponent } from './IT18190694/event/event.component';
import { TourguideComponent } from './IT18165876/tourguide/tourguide.component';
import { HoteldetailComponent } from './IT18165876/hoteldetail/hoteldetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    LankaMapComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    FeedbackComponent,
    HoteldetailsComponent,
    TourpackagesComponent,
    EventsComponent,
    EventComponent,
    TourguideComponent,
    HoteldetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
