import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GarretComponent} from './shared/components/garret/garret.component';
import {StoreyComponent} from './shared/components/storey/storey.component';
import {GableComponent} from './shared/components/gable/gable.component';
import {SlopeComponent} from './shared/components/slope/slope.component';
import {WallComponent} from './shared/components/wall/wall.component';
import {SlabComponent} from './shared/components/slab/slab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GarretComponent,
    StoreyComponent,
    GableComponent,
    SlopeComponent,
    WallComponent,
    SlabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
