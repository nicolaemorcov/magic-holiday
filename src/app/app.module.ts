import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RoomnavComponent } from './roomnav/roomnav.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ClientsComponent } from './clients/clients.component';
import { MainComponent } from './main/main.component';
import { AddroomComponent } from './addroom/addroom.component';
import { RemoveroomComponent } from './removeroom/removeroom.component';
import { UpdateroomComponent } from './updateroom/updateroom.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomFormComponent } from './room-form/room-form.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { Http }
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoomnavComponent,
    ReservationsComponent,
    ClientsComponent,
    MainComponent,
    AddroomComponent,
    RemoveroomComponent,
    UpdateroomComponent,
    RoomsComponent,
    RoomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
