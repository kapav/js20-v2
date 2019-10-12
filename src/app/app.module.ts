import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {EvidenceService} from './shared/services/evidence.service';
import { AppComponent } from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GarretComponent} from './shared/components/garret/garret.component';
import {StoreyComponent} from './shared/components/storey/storey.component';
import {GableComponent} from './shared/components/gable/gable.component';
import {SlopeComponent} from './shared/components/slope/slope.component';
import {WallComponent} from './shared/components/wall/wall.component';
import {SlabComponent} from './shared/components/slab/slab.component';
import {StairwellComponent} from './shared/components/stairwell/stairwell.component';
import {StaircaseComponent} from './shared/components/staircase/staircase.component';
import { StairwayComponent } from './shared/components/stairway/stairway.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GarretComponent,
    StoreyComponent,
    GableComponent,
    SlopeComponent,
    WallComponent,
    SlabComponent,
    StairwellComponent,
    StaircaseComponent,
    StairwayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EvidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
