import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';

import { StressComponent } from './stress/stress.component';
import { SelfTileComponent } from './stress/selftile/selftile.component';
import { SelfTileContainerComponent } from './stress/selftile-container/selftile-container.component';


import { AppState} from './app.service';
import { PriceService } from './stress/price.service';

@NgModule({
  declarations: [
    AppComponent,
    StressComponent,
    SelfTileComponent,
    SelfTileContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    RouterModule.forRoot([
      {path: '', component: StressComponent}
    ]),
    MdToolbarModule,
  ],
  providers: [
    AppState,
    PriceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
