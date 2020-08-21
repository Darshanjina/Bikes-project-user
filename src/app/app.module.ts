import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserarticlesComponent } from './userarticles/userarticles.component';
import { UseraboutComponent } from './userabout/userabout.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { FooterComponent } from './footer/footer.component';
import { SimilararticlesComponent } from './similararticles/similararticles.component';
import { DetailsarticlesComponent } from './detailsarticles/detailsarticles.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';

const ngxUiLoaderconfig : NgxUiLoaderConfig = {
    "bgsColor": "red",
    "bgsOpacity": 0.5,
    "bgsPosition": "center-center",
    "bgsSize": 90,
    "bgsType": "square-jelly-box",
    "blur": 5,
    "delay": 0,
    "fgsColor": "red",
    "fgsPosition": "center-center",
    "fgsSize": 80,
    "fgsType": "square-jelly-box",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "red",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 500
  }
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserhomeComponent,
    UserarticlesComponent,
    UseraboutComponent,
    UsercontactComponent,
    FooterComponent,
    SimilararticlesComponent,
    DetailsarticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
