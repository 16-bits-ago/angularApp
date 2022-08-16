import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './components/ui/layout/layout.module';
import { HeaderModule } from './components/ui/layout/header/header.module';
import { SaleComponent } from './components/screens/sale/sale.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { FavoritesComponent } from './components/screens/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProfileComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
