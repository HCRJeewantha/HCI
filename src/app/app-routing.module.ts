import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './IT18151220/home/home.component';
import { GalleryComponent } from './IT18151220/gallery/gallery.component';
import { LankaMapComponent } from './IT18151220/lanka-map/lanka-map.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "map", component: LankaMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = {
  HomeComponent,
  GalleryComponent,
  LankaMapComponent,
}
